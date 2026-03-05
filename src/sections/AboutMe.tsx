export function AboutMe() {
    return (
        <div className="w-full flex flex-col gap-16 mt-12 items-center">
            <h2 className="text-3xl tracking-tighter leading-7 text-center font-medium text-neutral-700">
                Привет, я Ердана👋
            </h2>
            <div className="w-full flex items-center gap-4">
                <div className="w-full h-64 relative">
                    <p className="z-10 absolute left-4 bottom-4 text-neutral-700 leading-5 text-lg  tracking-tighter">
                        Я помогаю бизнесу говорить
                        <br />
                        с аудиторией на визуальном
                        <br />
                        языке уже 7 лет.
                    </p>
                    <div className="absolute inset-0 bg-linear-to-tr from-white rounded-2xl to-transparent"></div>
                    <img src="/man3.jpg" alt="" className="w-full h-full object-cover rounded-2xl" />
                </div>
                <div className="w-full h-64 flex gap-4">

                    <div className="w-full h-64 relative">
                        <p className="z-10 absolute left-4 bottom-4 text-neutral-700 leading-5 text-lg  tracking-tighter">
                            30+ комплексных
                            <br />
                            проектов
                        </p>
                        <div className="absolute inset-0 bg-linear-to-tr from-white rounded-2xl to-transparent"></div>
                        <img src="/man1.jpg" alt="" className="w-full h-full object-cover rounded-2xl" />
                    </div>
                    <div className="w-full h-64 relative">
                        <p className="z-10 absolute left-4 bottom-4 text-neutral-700 leading-5 text-lg  tracking-tighter">
                            Работаю с B2B
                            <br />
                            и экспертами
                        </p>
                        <div className="absolute inset-0 bg-linear-to-tr from-white rounded-2xl to-transparent"></div>
                        <img src="/man2.jpg" alt="" className="w-full h-full object-cover rounded-2xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}