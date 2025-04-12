// src/lib/api.ts
import {API_BASE_URL} from "../constants/api.ts";

export async function evaluateExpression(expression: string): Promise<number> {
    const sanitized = expression.replace(/×/g, "*").replace(/÷/g, "/")

    const res = await fetch(`${API_BASE_URL}/api/calculate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ expression: sanitized }),
    })

    if (!res.ok) {
        throw new Error("Failed to evaluate expression")
    }

    const data = await res.json()
    return data.result
}