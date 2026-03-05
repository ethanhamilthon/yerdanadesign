export function Projects() {
    return (
        <div className="w-full flex flex-col gap-12 mt-20 items-center">
            <div className="w-full px-24 flex items-center justify-center">
                <div className="flex px-12 justify-center items-center py-2  rounded-full bg-neutral-100 border border-neutral-300">
                    <button className="px-12 cursor-pointer py-2 rounded-full  bg-[#ff003c] text-white">
                        Брендинг
                    </button>
                    <button className="px-12 cursor-pointer py-2 rounded-full bg-neutral-100 text-neutral-500">
                        Брендинг
                    </button>
                    <button className="px-12 cursor-pointer py-2 rounded-full bg-neutral-100 text-neutral-500">
                        Брендинг
                    </button>
                    <button className="px-12 cursor-pointer py-2 rounded-full bg-neutral-100 text-neutral-500">
                        Брендинг
                    </button>
                </div>

            </div>
            <div className="w-full flex flex-wrap gap-4 items-center justify-center">
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
        <div className="w-[30%] flex flex-col gap-4">
            <div className="w-full h-48 relative">
                <div className="absolute inset-0 bg-linear-to-tr from-black rounded-2xl to-transparent"></div>
                <img src="/man1.jpg" alt="" className="w-full h-full object-cover rounded-2xl" />
            </div>
            <div className="w-full flex flex-col">
                <h3 className="text-2xl font-medium leading-4 text-neutral-700">Название проекта</h3>
                <p className="text-lg text-neutral-500">Описание проекта</p>
            </div>
        </div>
    )
}
