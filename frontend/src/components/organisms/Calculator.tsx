// src/organisms/Calculator.tsx
import { useState } from "react"
import CalculatorKeyboard from "../molecules/calculator-keyboard.tsx"
import CalculatorDisplay from "../molecules/calculator-display.tsx"
import {evaluateExpression} from "../../lib/api.ts";

export default function Calculator() {
    const [display, setDisplay] = useState("0")
    const [expression, setExpression] = useState("")
    const [result, setResult] = useState("")
    const [showResult, setShowResult] = useState(false)

    const handleNumberClick = (number: string) => {
        if (showResult) {
            setDisplay(number)
            setExpression(number)
            setShowResult(false)
            return
        }
        if (display === "0") {
            setDisplay(number)
            setExpression(expression + number)
        } else {
            setDisplay(display + number)
            setExpression(expression + number)
        }
    }

    const handleOperationClick = (op: string) => {
        const lastChar = expression.slice(-1)
        const isOperator = (char: string) => ["+", "-", "×", "÷"].includes(char)

        if (isOperator(lastChar) && isOperator(op)) return

        if (expression === "" && isOperator(op) && op !== "-") return

        if (lastChar === "(" && isOperator(op)) return

        if (op === ")") {
            const open = (expression.match(/\(/g) || []).length
            const close = (expression.match(/\)/g) || []).length
            if (close >= open) return
        }

        if (isOperator(lastChar) && op === ")") return

        if (showResult) {
            setExpression(result + op)
            // llamdo a la api
            setDisplay("0")
            setShowResult(false)
            return
        }

        setDisplay("0")
        setExpression(expression + op)
    }

    const handleClear = () => {
        setDisplay("0")
        setExpression("")
        setResult("")
        setShowResult(false)
    }

    const handleEquals = async () => {
        try {
            const result = await evaluateExpression(expression)
            setResult(result.toString())
            setDisplay(result.toString())
            setShowResult(true)
        } catch (error) {
            console.error("Calculation error:", error)
            setDisplay("Error")
            setTimeout(() => {
                setDisplay("0")
                setExpression("")
                setShowResult(false)
            }, 1000)
        }
    }


    const handleDecimal = () => {
        if (showResult) {
            setDisplay("0.")
            setExpression("0.")
            setShowResult(false)
            return
        }
        const lastNumberHasDecimal = /\.\d*$/.test(display)
        if (!lastNumberHasDecimal) {
            setDisplay(display + ".")
            setExpression(expression + ".")
        }
    }

    const handleDelete = () => {
        if (showResult) {
            handleClear()
            return
        }
        if (display.length > 1) {
            setDisplay(display.slice(0, -1))
            setExpression(expression.slice(0, -1))
        } else {
            setDisplay("0")
            if (expression.length > 0) {
                setExpression(expression.slice(0, -1))
            }
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className=" p-8 bg-black rounded-3xl shadow-2xl overflow-hidden">
                <CalculatorDisplay
                    display={display}
                    result={result}
                    showResult={showResult}
                    expression={expression}
                />
                <CalculatorKeyboard
                    onNumberClick={handleNumberClick}
                    onOperationClick={handleOperationClick}
                    onClear={handleClear}
                    onDecimal={handleDecimal}
                    onDelete={handleDelete}
                    onEquals={handleEquals}
                />
            </div>
        </div>
    )
}