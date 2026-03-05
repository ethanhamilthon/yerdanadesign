export function AboutMe() {
    return (
        <div className="w-full flex flex-col gap-8 sm:gap-12 md:gap-16 mt-8 sm:mt-10 md:mt-12 items-center px-0 sm:px-6 md:px-0">
            <h2 className="text-xl sm:text-2xl md:text-3xl tracking-tighter leading-tight sm:leading-snug md:leading-7 text-center font-medium text-neutral-700">
                Привет, я Ердана👋
            </h2>
            <div className="w-full flex flex-col md:flex-row items-stretch gap-4 px-4 sm:px-0">
                <div className="w-full md:w-1/2 h-64 relative shrink-0">
                    <p className="z-10 absolute left-4 sm:left-6 bottom-4 sm:bottom-6 text-neutral-700 leading-snug sm:leading-5 text-base sm:text-lg tracking-tighter pr-4">
                        Я помогаю бизнесу говорить
                        <br className="hidden sm:block" />
                        с аудиторией на визуальном
                        <br className="hidden sm:block" />
                        языке уже 7 лет.
                    </p>
                    <div className="absolute inset-0 bg-linear-to-tr from-white to-transparent rounded-2xl"></div>
                    <img src="/man3.jpg" alt="" className="w-full h-full object-cover rounded-2xl" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col sm:flex-row gap-4 h-auto md:h-64 shrink-0">
                    <div className="w-full sm:w-1/2 h-64 relative shrink-0">
                        <p className="z-10 absolute left-4 sm:left-6 bottom-4 sm:bottom-6 text-neutral-700 leading-snug sm:leading-5 text-base sm:text-lg tracking-tighter pr-4">
                            30+ комплексных
                            <br className="hidden sm:block" />
                            проектов
                        </p>
                        <div className="absolute inset-0 bg-linear-to-tr from-white to-transparent rounded-2xl"></div>
                        <img src="/man1.jpg" alt="" className="w-full h-full object-cover rounded-2xl" />
                    </div>
                    <div className="w-full sm:w-1/2 h-64 relative shrink-0">
                        <p className="z-10 absolute left-4 sm:left-6 bottom-4 sm:bottom-6 text-neutral-700 leading-snug sm:leading-5 text-base sm:text-lg tracking-tighter pr-4">
                            Работаю с B2B
                            <br className="hidden sm:block" />
                            и экспертами
                        </p>
                        <div className="absolute inset-0 bg-linear-to-tr from-white to-transparent rounded-2xl"></div>
                        <img src="/man2.jpg" alt="" className="w-full h-full object-cover rounded-2xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}