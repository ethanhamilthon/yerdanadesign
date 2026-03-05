import { useState } from "react";

const steps = [
    {
        id: 1,
        title: "Формулирую идею",
        subtitle: ">> Правильные идеи начало правильных дизайн решении",
        description: "На этом этапе обычно я во время общения понимаю задачу клиента. Провожу полный брифинг, и показываю разные реализации идеи из работ других студий.",
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
        title: "Поддержка и развитие проекта",
        subtitle: ">> Дальнейшее сопровождение и улучшения",
        description: "Анализируем поведение пользователей и вносим необходимые правки для повышения удобства использования.",
    }
];

export function Process() {
    const [activeStep, setActiveStep] = useState(1);

    return (
        <div className="w-full flex flex-col items-center gap-12 mt-12 md:mt-24">
            <h2 className="text-2xl md:text-3xl tracking-tighter leading-10 text-center font-medium text-neutral-800">
                Как я работаю
            </h2>

            <div className="relative w-full max-w-5xl mx-auto flex flex-col mt-4">
                {/* Vertical Line - Desktop */}
                <div className="hidden md:block absolute top-[2px] bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-neutral-800 z-0"></div>
                {/* Triangle at top - Desktop */}
                <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[20px] border-t-neutral-800 z-10"></div>

                {/* Vertical Line - Mobile */}
                <div className="md:hidden absolute top-[2px] bottom-0 left-[24px] -translate-x-1/2 w-[2px] bg-neutral-800 z-0"></div>
                <div className="md:hidden absolute top-0 left-[24px] -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[16px] border-t-neutral-800 z-10"></div>

                <div className="flex flex-col w-full px-4 md:px-0 z-10 relative pt-12 pb-8 gap-3 md:gap-4">
                    {steps.map((step, index) => {
                        const isActive = activeStep === step.id;

                        let desktopPosition = "";
                        if (index === 0) desktopPosition = "md:ml-0 md:w-[50%]";
                        else if (index === 1) desktopPosition = "md:ml-[20%] md:w-[50%]";
                        else if (index === 2) desktopPosition = "md:ml-[35%] md:w-[50%]";
                        else if (index === 3) desktopPosition = "md:ml-[50%] md:w-[50%]";

                        return (
                            <div
                                key={step.id}
                                onClick={() => setActiveStep(step.id)}
                                className={`
                                    relative cursor-pointer transition-all duration-500 ease-in-out
                                    flex flex-col w-[calc(100%-40px)] ml-[40px]
                                    ${desktopPosition}
                                `}
                            >
                                <div className={`
                                    w-full overflow-hidden transition-all duration-500 ease-in-out
                                    ${isActive
                                        ? 'bg-[#ff003c] text-white rounded-2xl md:rounded-[2rem] shadow-lg p-6 md:p-8'
                                        : 'bg-[#e5e5e5] text-neutral-800 rounded-full border-[2px] border-[#A8A8A8] hover:border-neutral-500 p-4 md:px-8 flex items-center min-h-[64px] md:min-h-[72px]'
                                    }
                                `}>
                                    <div className="flex flex-col w-full justify-center">
                                        <h3 className={`
                                            transition-all duration-300 tracking-tighter
                                            ${isActive
                                                ? 'text-2xl md:text-3xl font-medium'
                                                : 'text-lg md:text-xl font-medium text-center md:text-left w-full'
                                            }
                                        `}>
                                            {step.title}
                                        </h3>

                                        <div className={`grid transition-all duration-500 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                                            <div className="overflow-hidden flex flex-col gap-3">
                                                <p className="font-normal text-sm md:text-base tracking-tight opacity-90">
                                                    {step.subtitle}
                                                </p>
                                                <p className="text-sm md:text-sm font-light opacity-90 leading-snug tracking-tight">
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
