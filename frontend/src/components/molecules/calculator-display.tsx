interface CalculatorDisplayProps {
    display: string
    result: string
    showResult: boolean
    expression: string
}

const CalculatorDisplay = ({ display, result, showResult, expression}: CalculatorDisplayProps) => {
    return (
        <div className="mb-6">
            <div className="text-gray-400 text-right text-lg font-mono mb-1 ibm-plex-mono-bold">
                {expression ? expression : "0" }
            </div>
            <div className="text-white text-right text-7xl font-bold tracking-wider ibm-plex-mono-bold ">
                {showResult ? result : display}
            </div>
        </div>
    )
}

export default CalculatorDisplay