import type { ReactNode } from "react";

interface TitleProps {
    children: ReactNode;
    className?: string;
}

export function Title({ children, className = "" }: TitleProps) {
    return (
        <h1 className={`text-4xl md:text-5xl tracking-tighter leading-10 font-bold text-neutral-900 ${className}`}>
            {children}
        </h1>
    );
}
