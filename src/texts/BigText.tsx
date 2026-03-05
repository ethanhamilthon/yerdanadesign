import type { ReactNode } from "react";

interface BigTextProps {
    children: ReactNode;
    className?: string;
}

export function BigText({ children, className = "" }: BigTextProps) {
    return (
        <p className={`text-lg font-medium tracking-tighter leading-4 ${className}`}>
            {children}
        </p>
    );
}
