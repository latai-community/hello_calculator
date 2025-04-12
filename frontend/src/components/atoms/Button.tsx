import type React from "react";
import { cn } from "../../lib/utils.ts"

export default function Button ({
                    children,
                    onClick,
                    className,
                    disabled = false,
                }: {
    children: React.ReactNode
    onClick?: () => void
    className?: string
    disabled?: boolean
}) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={cn(
                "h-16 rounded-md flex items-center justify-center text-2xl font-medium transition-colors",
                disabled ? "text-gray-600 cursor-not-allowed" : "text-white hover:bg-white/10 active:bg-white/20",
                className,
            )}
        >
            {children}
        </button>
    )
}