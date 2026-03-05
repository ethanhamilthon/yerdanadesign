import type { ReactNode } from "react";

interface SubtitleProps {
    children: ReactNode;
    className?: string;
}

export function Subtitle({ children, className = "" }: SubtitleProps) {
    return (
        <h2 className={`text-2xl md:text-3xl font-bold text-neutral-800 ${className}`}>
            {children}
        </h2>
    );
}
