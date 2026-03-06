import type { ReactNode } from "react";

interface SmallTextProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}

export function SmallText({ children, className = "", onClick }: SmallTextProps) {
    return (
        <p onClick={onClick} className={`text-base font-normal text-neutral-400 tracking-tighter ${className}`}>
            {children}
        </p>
    );
}
