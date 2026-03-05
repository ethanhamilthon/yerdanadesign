"use client";

import { useState, useRef, useEffect } from "react";

const steps = [
    {
        id: 1,
        title: "Формулирую идею",
        subtitle: ">> Правильные идеи начало правильных дизайн решении",
        description: "В этом этапе обычно я во время общения понимаю задачу клиента. Провожу полный брифинг, и показываю разные реализации идеи с работ других студий",
    },
    {
        id: 2,
        title: "Анализ и создание концепта",
        subtitle: ">> Глубокий анализ рынка и конкурентов",
        description: "На этом этапе мы собираем все данные и анализируем их для определения правильного визуального направления.",
    },
    {
        id: 3,
        title: "Настоящая разработка и финализация",
        subtitle: ">> Отрисовка всех макетов и дизайн-системы",
        description: "Воплощаем концепты в жизнь. Создаем все необходимые экраны, состояния элементов и готовим компоненты к передаче разработчикам.",
    },
    {
        id: 4,
        title: "Поддержка и развития проекта",
        subtitle: ">> Дальнейшее сопровождение и улучшения",
        description: "Анализируем поведение пользователей и вносим необходимые правки для повышения удобства использования.",
    }
];

export function Process() {
    const [lineX, setLineX] = useState(0);
    const [activeStepId, setActiveStepId] = useState(1);
    const [isDragging, setIsDragging] = useState(false);
    const [isInitialized, setIsInitialized] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            setLineX(0); // Optional: start line at beginning of step 1
            setIsInitialized(true);
        }
    }, []);

    const updateX = (clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        let newX = clientX - rect.left;

        // Clamp the X position to the container's bounds
        newX = Math.max(0, Math.min(newX, rect.width));
        setLineX(newX);

        // Determine active step based on percentage across timeline
        const progress = newX / rect.width;
        if (progress < 0.25) {
            setActiveStepId(1);
        } else if (progress < 0.5) {
            setActiveStepId(2);
        } else if (progress < 0.75) {
            setActiveStepId(3);
        } else {
            setActiveStepId(4);
        }
    };

    const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        setIsDragging(true);
        updateX(e.clientX);

        const target = e.currentTarget;
        target.setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        updateX(e.clientX);
    };

    const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
        setIsDragging(false);
        const target = e.currentTarget;
        try {
            target.releasePointerCapture(e.pointerId);
        } catch {
            // Ignore if pointerId is invalid
        }
    };

    return (
        <div className="w-full flex flex-col items-center gap-4 sm:gap-6 mt-12 px-2 sm:px-6 md:px-0 overflow-hidden">
            <h2 className="text-2xl sm:text-3xl tracking-tighter leading-tight sm:leading-snug text-center font-medium text-neutral-800">
                Как я работаю
            </h2>

            <div
                className="relative w-full max-w-5xl mx-auto flex flex-col mt-4 cursor-ew-resize touch-none select-none"
                ref={containerRef}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
            >
                {/* Draggable Vertical Line + Triangle */}
                <div
                    className={`absolute top-[2px] bottom-0 z-10 w-8 flex flex-col items-center -translate-x-1/2`}
                    style={{
                        left: isInitialized ? `${lineX}px` : '0%',
                        transitionProperty: isDragging ? 'none' : 'left',
                        transitionDuration: '200ms',
                        transitionTimingFunction: 'ease-out'
                    }}
                >
                    <div className="w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[20px] border-t-neutral-800 shrink-0 drop-shadow-sm pointer-events-none"></div>
                    <div className="w-[2px] h-full bg-neutral-800 pointer-events-none z-0"></div>
                </div>

                <div className="flex flex-col w-full z-0 relative pt-12 pb-8 gap-2 pointer-events-none">
                    {steps.map((step, index) => {
                        let positionClass = "";
                        if (index === 0) positionClass = "ml-0 w-[85%] sm:w-[70%] md:w-[50%]";
                        else if (index === 1) positionClass = "ml-[5%] sm:ml-[10%] md:ml-[20%] w-[85%] sm:w-[70%] md:w-[50%]";
                        else if (index === 2) positionClass = "ml-[10%] sm:ml-[20%] md:ml-[35%] w-[85%] sm:w-[70%] md:w-[50%]";
                        else if (index === 3) positionClass = "ml-[15%] sm:ml-[30%] md:ml-[50%] w-[85%] sm:w-[70%] md:w-[50%]";

                        const isActive = step.id === activeStepId;

                        return (
                            <div
                                key={step.id}
                                className={`
                                    relative flex flex-col items-start transition-all duration-300
                                    ${positionClass}
                                `}
                            >
                                <div className={`
                                    w-full overflow-hidden transition-all duration-300 pointer-events-auto px-4 sm:px-6 py-3 sm:py-4
                                    ${isActive
                                        ? 'bg-[#ff003c] text-white rounded-2xl block'
                                        : 'bg-[#e5e5e5] text-neutral-800 rounded-2xl border border-[#A8A8A8] flex items-center'
                                    }
                                `}>
                                    <div className={`flex flex-col w-full transition-all duration-300`}>
                                        <h3 className={`
                                            tracking-tighter font-medium transition-all duration-300 leading-tight
                                            ${isActive
                                                ? 'text-lg sm:text-xl mb-2 sm:mb-4 text-left'
                                                : 'text-lg sm:text-xl w-full'
                                            }
                                        `}>
                                            {step.title}
                                        </h3>

                                        <div className={`grid transition-all duration-500 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                            <div className="overflow-hidden flex flex-col gap-2 sm:gap-3">
                                                <p className="font-normal text-xs sm:text-sm tracking-tight opacity-90 leading-tight">
                                                    {step.subtitle}
                                                </p>
                                                <p className="text-xs sm:text-sm font-light opacity-90 leading-tight tracking-tight hidden sm:block">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
