import type { ReactNode } from "react";

interface CursorBadgeProps {
    children: ReactNode;
    className?: string;
    position?: "left" | "right";
}

export function CursorBadge({ children, className = "", position = "left" }: CursorBadgeProps) {
    return (
        <div className={`relative inline-flex items-center justify-center px-6 py-1 rounded-full bg-[#ff003c] text-white font-medium tracking-tighter text-base ${className}`}>
            {/* Red cursor arrow positioned at the top-left */}
            <svg
                className={`absolute -top-6 ${position === "left" ? "-left-6" : "-right-6"} w-8 h-8 z-10 transform ${position === "left" ? "-rotate-15" : "rotate-60"}`}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M10.82 2.19C9.99 1.36 8.6 1.95 8.6 3.12V25.87C8.6 27.12 10.14 27.71 10.98 26.79L16.75 20.56C17.02 20.27 17.4 20.11 17.8 20.11H26.79C27.96 20.11 28.55 18.72 27.72 17.89L10.82 2.19Z"
                    fill="#ff003c"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                />
            </svg>
            {children}
        </div>
    )
}
