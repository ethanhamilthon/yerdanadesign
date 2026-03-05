export function AiNative() {
    return (
        <div className="w-full flex flex-col items-center gap-6 sm:gap-8 md:gap-10 mt-12 sm:mt-16 md:mt-24 px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl tracking-tighter text-center font-medium text-neutral-800">
                AI Native
                <br />
                <span className="font-normal text-base sm:text-lg tracking-tight text-neutral-500 mt-2 block">
                    Скорость AI. Стратегия и ответственность человека
                </span>
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl mx-auto gap-2 px-2">
                {/* Left Pill */}
                <div className="flex items-center justify-end gap-3 sm:gap-5 bg-white border border-neutral-300 rounded-[2.5rem] p-2.5 w-full md:w-[460px]">
                    <div className="flex flex-col items-end pt-2 pb-2 pl-4 sm:pl-6">
                        <span className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tighter leading-none mb-1">AI</span>
                        <span className="text-[11px] sm:text-[13px] text-neutral-500 tracking-tight">генерация гипотез</span>
                    </div>
                    <img src="/leftai.jpg" className="w-[64px] sm:w-[84px] h-[64px] sm:h-[84px] bg-[#ff003c] rounded-[1.25rem] sm:rounded-3xl shrink-0" />
                </div>

                {/* Right Pill */}
                <div className="flex items-center justify-start gap-3 sm:gap-5 bg-white border border-neutral-300 rounded-[2.5rem] p-2.5 w-full md:w-[460px]">
                    <img src="/rightai.jpg" className="w-[64px] sm:w-[84px] h-[64px] sm:h-[84px] bg-[#ff003c] rounded-[1.25rem] sm:rounded-3xl shrink-0" />
                    <div className="flex flex-col items-start pt-2 pb-2 pr-4 sm:pr-6">
                        <span className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tighter leading-none mb-1">Я</span>
                        <span className="text-[11px] sm:text-[13px] text-neutral-500 tracking-tight leading-[1.2]">
                            отбор, стратегическая<br />
                            рамка, финальное решение
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
