import type { ReactNode } from "react";

interface SelectedTextProps {
    children: ReactNode;
    className?: string;
}

export function SelectedText({ children, className = "" }: SelectedTextProps) {
    return (
        <span className={`relative inline-block border-[1.5px] border-[#2C2C2C] px-1 md:px-2 py-0 lg:py-1 mx-1 md:mx-2 ${className}`}>
            <span className="absolute -top-[5px] -left-[5px] w-[8px] h-[8px] bg-[#2C2C2C] block"></span>
            <span className="absolute -top-[5px] -right-[5px] w-[8px] h-[8px] bg-[#2C2C2C] block"></span>
            <span className="absolute -bottom-[5px] -left-[5px] w-[8px] h-[8px] bg-[#2C2C2C] block"></span>
            <span className="absolute -bottom-[5px] -right-[5px] w-[8px] h-[8px] bg-[#2C2C2C] block"></span>
            {children}
        </span>
    );
}
