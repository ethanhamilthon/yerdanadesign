"use client";

import { useEffect, useRef, useState } from "react";
import { CursorBadge } from "../components/CursorBadge";
import { SelectedText } from "../components/SelectedText";

export function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!heroRef.current) return;
            const rect = heroRef.current.getBoundingClientRect();

            // Calculate mouse position relative to the hero container
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            setMousePos({
                x: x,
                y: y
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Helper to calculate clamped movement styles
    const getClampedStyle = (factor: number) => {
        const MAX_OFFSET = 100;

        // Raw movement based on mouse
        let moveX = mousePos.x * factor;
        let moveY = mousePos.y * factor;

        // Calculate current distance of movement
        const currentOffsetDist = Math.sqrt(moveX * moveX + moveY * moveY);

        // If movement exceeds max offset, scale it back proportionally
        if (currentOffsetDist > MAX_OFFSET) {
            const scale = MAX_OFFSET / currentOffsetDist;
            moveX *= scale;
            moveY *= scale;
        }

        return {
            transform: `translate(${moveX}px, ${moveY}px)`,
            transition: "transform 0.1s ease-out"
        };
    };

    return (
        <div ref={heroRef} className="w-full flex flex-col items-center gap-12 relative overflow-visible">
            <div className="w-full flex flex-col items-center gap-4 sm:gap-6">
                <h1 className="relative text-3xl sm:text-4xl md:text-5xl tracking-tighter leading-6 sm:leading-8 md:leading-10 font-bold bg-linear-to-l from-[#2C2C2C] to-[#5F5F5F] bg-clip-text text-transparent text-center pt-4 sm:pt-8">
                    Визуальная<SelectedText className="text-[#ff003c] font-bold!">коммуникация,</SelectedText>
                    <br />
                    которая превращает
                    <br />
                    идеи в систему продаж

                    <div style={getClampedStyle(0.15)} className="hidden md:block absolute top-0 -right-12 z-20 pointer-events-none">
                        <CursorBadge>
                            Дизайнер
                        </CursorBadge>
                    </div>

                    <div style={getClampedStyle(-0.1)} className="hidden md:block absolute top-16 -left-12 z-20 pointer-events-none">
                        <CursorBadge position="right">
                            Арт Директор
                        </CursorBadge>
                    </div>
                </h1>
                <p className="text-base sm:text-lg md:text-xl tracking-tighter leading-tight sm:leading-4 text-center text-neutral-600">
                    Проектирую дизайн решении, которые усиливают
                    <br className="hidden sm:block" />
                    {" "}позиционирование бизнеса
                </p>
            </div>
            <div className="w-full items-center justify-center flex flex-col sm:flex-row gap-4">
                <a href="#" className="w-full sm:w-auto flex justify-center items-center relative gap-2.5 px-8 sm:px-12 py-3 sm:py-4 rounded-full bg-neutral-100 border-2 border-neutral-400">
                    <p className="text-lg sm:text-xl text-center text-black">Старт 🚀</p>
                </a>
                <a href="#" className="w-full sm:w-auto flex justify-center items-center relative gap-2.5 px-8 sm:px-12 py-3 sm:py-4 rounded-full bg-[#ff003c] border border-transparent 
[border-image:radial-gradient(circle,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_100%)_1]">
                    <p className="text-xl text-center text-white">Проекты 💻</p>
                </a>
            </div>
        </div>
    )
}