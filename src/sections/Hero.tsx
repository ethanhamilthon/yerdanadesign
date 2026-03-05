
export function Hero() {
    return (
        <div className="w-full flex flex-col items-center gap-12">
            <div className="w-full flex flex-col items-center gap-6">
                <h1 className="text-4xl md:text-5xl tracking-tighter leading-10 font-bold bg-linear-to-l from-[#2C2C2C] to-[#5F5F5F] bg-clip-text text-transparent text-center">
                    Визуальная <span className="text-[#ff003c]">коммуникация,</span>
                    <br />
                    которая превращает
                    <br />
                    идеи в систему продаж
                </h1>
                <p className="text-xl tracking-tighter leading-4 text-center text-neutral-600">
                    Проектирую дизайн решении, которые усиливают
                    <br />
                    позиционирование бизнеса
                </p>
            </div>
            <div className="w-full items-center justify-center flex gap-4">
                <a href="#" className="flex justify-center items-center  relative gap-2.5 px-12 py-4 rounded-full bg-neutral-100 border-2 border-neutral-400">
                    <p className="text-xl text-center text-black">Старт 🚀</p>
                </a>
                <a href="#" className="flex justify-center items-center  relative gap-2.5 px-12 py-4 rounded-full bg-[#ff003c] border border-transparent 
[border-image:radial-gradient(circle,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_100%)_1]">
                    <p className="text-xl text-center text-white">Проекты 💻</p>
                </a>
            </div>
        </div>
    )
}