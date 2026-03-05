export function Projects() {
    return (
        <div className="w-full flex flex-col gap-8 sm:gap-10 md:gap-12 mt-12 sm:mt-16 md:mt-20 items-center overflow-hidden">
            <div className="w-full px-4 sm:px-8 md:px-24 flex items-center justify-center">
                <div className="flex flex-wrap p-2 sm:px-6 md:px-12 justify-center items-center gap-2 sm:gap-0 sm:py-2 rounded-4xl sm:rounded-full bg-neutral-100 border border-neutral-300 w-full md:w-auto">
                    <button className="flex-1 min-w-[calc(50%-8px)] sm:min-w-0 sm:flex-none px-4 sm:px-8 md:px-12 cursor-pointer py-2 rounded-full bg-[#ff003c] text-white text-sm sm:text-base transition-colors text-center">
                        Брендинг
                    </button>
                    <button className="flex-1 min-w-[calc(50%-8px)] sm:min-w-0 sm:flex-none px-4 sm:px-8 md:px-12 cursor-pointer py-2 rounded-full bg-transparent text-neutral-500 text-sm sm:text-base hover:bg-neutral-200 transition-colors text-center">
                        Брендинг
                    </button>
                    <button className="flex-1 min-w-[calc(50%-8px)] sm:min-w-0 sm:flex-none px-4 sm:px-8 md:px-12 cursor-pointer py-2 rounded-full bg-transparent text-neutral-500 text-sm sm:text-base hover:bg-neutral-200 transition-colors text-center">
                        Брендинг
                    </button>
                    <button className="flex-1 min-w-[calc(50%-8px)] sm:min-w-0 sm:flex-none px-4 sm:px-8 md:px-12 cursor-pointer py-2 rounded-full bg-transparent text-neutral-500 text-sm sm:text-base hover:bg-neutral-200 transition-colors text-center">
                        Брендинг
                    </button>
                </div>
            </div>
            <div className="w-full px-4 sm:px-6 md:px-0 flex flex-wrap gap-4 sm:gap-6 items-center justify-center">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    )
}

function ProjectCard() {
    return (
        <div className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] flex flex-col gap-3 sm:gap-4 shrink-0">
            <div className="w-full h-48 sm:h-44 md:h-48 relative">
                <div className="absolute inset-0 bg-linear-to-tr from-black to-transparent rounded-2xl"></div>
                <img src="/man1.jpg" alt="" className="w-full h-full object-cover rounded-2xl" />
            </div>
            <div className="w-full flex flex-col gap-1 px-1">
                <h3 className="text-xl sm:text-2xl font-medium leading-tight text-neutral-700">Название проекта</h3>
                <p className="text-base sm:text-lg text-neutral-500">Описание проекта</p>
            </div>
        </div>
    )
}
