// src/molecules/CalculatorKeyboard.tsx
import Button from "../atoms/Button"

interface CalculatorKeyboardProps {
    onNumberClick: (number: string) => void;
    onOperationClick: (operation: string) => void;
    onClear: () => void;
    onDecimal: () => void;
    onDelete: () => void;
    onEquals: () => void;
}

const CalculatorKeyboard = ({  onNumberClick,  onOperationClick,  onDecimal,  onDelete,  onEquals }: CalculatorKeyboardProps) => {
    const cellStyle = "min-w-[80px] min-h-[80px] text-3xl"
    const defaultStyle = "text-white ibm-plex-mono-bold text-3xl"
    const operationStyles = "text-gray-500 font-mono"

    return (
        <div className="w-full max-w-md mx-auto">
            <div className="grid grid-cols-5 grid-rows-4 gap-6">
                {/* Fila 1 */}
                <Button className={`${cellStyle} ${defaultStyle}`} onClick={() => onNumberClick("7")}>7</Button>
                <Button className={`${cellStyle} ${defaultStyle}`} onClick={() => onNumberClick("8")}>8</Button>
                <Button className={`${cellStyle} ${defaultStyle}`} onClick={() => onNumberClick("9")}>9</Button>
                <Button className={`${cellStyle} ${operationStyles}`} onClick={() => onOperationClick("÷")}>÷</Button>
                <Button className={`${cellStyle} ${operationStyles}`} onClick={() => onOperationClick(")")}>)</Button>

                {/* Fila 2 */}
                <Button className={`${cellStyle} ${defaultStyle}`} onClick={() => onNumberClick("4")}>4</Button>
                <Button className={`${cellStyle} ${defaultStyle}`} onClick={() => onNumberClick("5")}>5</Button>
                <Button className={`${cellStyle} ${defaultStyle}`} onClick={() => onNumberClick("6")}>6</Button>
                <Button className={`${cellStyle} ${operationStyles}`} onClick={() => onOperationClick("×")}>×</Button>
                <Button className={`${cellStyle} ${operationStyles}`} onClick={() => onOperationClick("(")}>(</Button>

                {/* Fila 3 */}
                <Button className={`${cellStyle} ${defaultStyle}`} onClick={() => onNumberClick("1")}>1</Button>
                <Button className={`${cellStyle} ${defaultStyle}`} onClick={() => onNumberClick("2")}>2</Button>
                <Button className={`${cellStyle} ${defaultStyle}`} onClick={() => onNumberClick("3")}>3</Button>
                <Button className={`${cellStyle} ${operationStyles}`} onClick={() => onOperationClick("-")}>-</Button>

                {/* Fila 4 */}
                <Button className={`${cellStyle} ${defaultStyle}`} onClick={() => onNumberClick("0")}>0</Button>
                <Button className={`${cellStyle} ${defaultStyle}`} onClick={onDecimal}>.</Button>
                <Button className={`${cellStyle} ${defaultStyle}`} onClick={onDelete}>DEL</Button>
                <Button className={`${cellStyle} ${operationStyles}`} onClick={() => onOperationClick("+")}>+</Button>

                {/* Fila 5 - Botón "=" cubriendo dos filas */}
                <div className="col-start-5 row-start-3 row-span-2">
                    <Button
                        className={`h-full w-full ${cellStyle} bg-[#E63737] hover:bg-[#FB4141] text-white`}
                        onClick={onEquals}
                    >
                        =
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CalculatorKeyboard