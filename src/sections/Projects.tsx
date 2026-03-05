import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { createClient } from "contentful";

const client = createClient({
    space: 'osbxgzswmmhk',
    environment: 'master', // defaults to 'master' if not set
    accessToken: 'jbouT3UBakPMLMvfiahIDLNKc5YFCnK8rsKbTmW2qX0'
});

export interface ProjectData {
    id: string | number;
    title: string;
    description: string;
    image: string;
    body: string;
    link?: string;
    tags: string[];
}

export function Projects() {
    const [projectsData, setProjectsData] = useState<ProjectData[]>([]);
    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
    const [activeTab, setActiveTab] = useState("Все");
    const [categories, setCategories] = useState<string[]>(["Все", "Брендинг", "Разработка Сайтов", "Анимация/Моушн", "Маркетинг/СММ"]);

    useEffect(() => {
        client.getEntries({ content_type: 'project' })
            .then((response) => {
                const fetched: ProjectData[] = response.items.map((item: any) => {
                    const fields = item.fields;

                    const tagTranslations: Record<string, string> = {
                        'branding': 'Брендинг',
                        'website': 'Разработка Сайтов',
                        'animation': 'Анимация/Моушн',
                        'motion': 'Анимация/Моушн',
                        'marketing': 'Маркетинг/СММ'
                    };

                    const rawTags = fields.tags || [];
                    const translatedTags = rawTags.map((t: string) => tagTranslations[t.toLowerCase()] || t);

                    let imgUrl = "";
                    if (fields.thumbnail?.fields?.file?.url) {
                        imgUrl = "https:" + fields.thumbnail.fields.file.url;
                    }

                    let linkUrl = fields.link;
                    if (linkUrl && !linkUrl.startsWith('http')) {
                        linkUrl = 'https://' + linkUrl;
                    }

                    return {
                        id: item.sys.id,
                        title: fields.name || 'Название проекта',
                        description: fields.description || '',
                        body: fields.description || '',
                        image: imgUrl || '/man1.jpg',
                        link: linkUrl,
                        tags: translatedTags
                    };
                });

                setProjectsData(fetched);

                const allTags = new Set<string>();
                fetched.forEach(p => p.tags.forEach(t => allTags.add(t)));
                const newCategories = ["Все", "Брендинг", "Разработка Сайтов", "Анимация/Моушн", "Маркетинг/СММ"];
                Array.from(allTags).forEach(t => {
                    if (!newCategories.includes(t)) newCategories.push(t);
                });
                setCategories(newCategories);

            })
            .catch(console.error);
    }, []);

    const closeModal = () => setSelectedProject(null);

    const filteredProjects = projectsData.filter(p =>
        activeTab === "Все" ? true : p.tags.includes(activeTab)
    );

    return (
        <div id="projects" className="w-full flex flex-col gap-8 sm:gap-10 md:gap-12 mt-12 sm:mt-16 md:mt-20 items-center overflow-hidden">
            <div className="w-full px-4 sm:px-8 md:px-24 flex items-center justify-center">
                <div className="flex flex-wrap p-2 sm:px-6 md:px-12 justify-center items-center gap-2 sm:gap-0 sm:py-2 rounded-4xl sm:rounded-full bg-neutral-100 border border-neutral-300 w-full md:w-auto">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveTab(cat)}
                            className={`flex-1 min-w-[calc(50%-8px)] sm:min-w-0 sm:flex-none px-4 sm:px-8 md:px-12 cursor-pointer py-2 rounded-full transition-all text-sm sm:text-base text-center hover:underline active:underline ${activeTab === cat
                                ? "bg-[#ff003c] text-white"
                                : "bg-transparent text-neutral-500 hover:bg-neutral-200"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>
            <div className="w-full px-4 sm:px-6 md:px-0 flex flex-wrap gap-4 sm:gap-6 items-center justify-center">
                {filteredProjects.map(project => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        onClick={() => setSelectedProject(project)}
                    />
                ))}
            </div>

            {selectedProject && createPortal(
                <div
                    className="fixed inset-0 z-100 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-in fade-in duration-300"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white rounded-3xl sm:rounded-4xl w-full max-w-2xl p-6 sm:p-10 flex flex-col gap-6 shadow-2xl relative animate-in zoom-in-95 duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={closeModal}
                            className="absolute z-20 top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white sm:bg-neutral-100 hover:bg-neutral-200 text-neutral-600 shadow-sm transition-colors cursor-pointer"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="w-full h-48 sm:h-64 relative rounded-2xl overflow-hidden shrink-0">
                            <div className="absolute inset-0 bg-linear-to-tr from-black/60 to-transparent z-10"></div>
                            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                        </div>

                        <div className="flex flex-col gap-4">
                            <h3 className="text-2xl sm:text-3xl font-medium leading-tight text-neutral-800">
                                {selectedProject.title}
                            </h3>
                            <div className="w-full h-px bg-neutral-200"></div>
                            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
                                {selectedProject.body}
                            </p>

                            <div className="mt-4 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                                <button
                                    onClick={closeModal}
                                    className="w-full sm:w-auto px-8 py-3 rounded-full bg-neutral-100 border border-neutral-300 hover:bg-neutral-200 text-neutral-700 text-base font-medium transition-colors cursor-pointer text-center hover:underline active:underline"
                                >
                                    Понятно
                                </button>
                                {selectedProject.link && (
                                    <a
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="w-full sm:w-auto flex justify-center items-center px-8 py-3 rounded-full bg-[#ff003c] hover:bg-[#e60036] text-white text-base font-medium transition-colors cursor-pointer hover:underline active:underline"
                                    >
                                        Смотреть проект
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </div>
    )
}

interface ProjectCardProps {
    project: ProjectData;
    onClick: () => void;
}

function ProjectCard({ project, onClick }: ProjectCardProps) {
    return (
        <div
            onClick={onClick}
            className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] flex flex-col gap-3 sm:gap-4 shrink-0 cursor-pointer group"
        >
            <div className="w-full h-48 sm:h-44 md:h-48 relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-linear-to-tr from-black to-transparent z-10"></div>
                <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-3 left-3 z-20 flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-medium tracking-tight border border-white/30">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <div className="w-full flex flex-col gap-1 px-1">
                <h3 className="text-xl sm:text-2xl font-medium leading-tight text-neutral-700 group-hover:text-black transition-colors group-hover:underline group-active:underline">{project.title}</h3>
                <p className="text-base sm:text-lg text-neutral-500">{project.description}</p>
            </div>
        </div>
    )
}
