
export function Header() {
    return (
        <header className="w-full sticky top-0 z-50 py-6 sm:py-8 md:py-12 px-0 sm:px-4 md:px-12">
            <nav className="w-full sticky top-0 py-4 px-6 sm:py-5 sm:px-10 md:py-6 md:px-16 bg-black/1 border backdrop-blur-sm border-white rounded-full flex justify-between items-center">
                <img src="/logo.svg" alt="" className="w-[100px] h-[33px] md:w-[120px] md:h-[40px]" />
                <div className="hidden lg:flex gap-10 items-center text-neutral-900">
                    <a href="#" className="text-base font-normal text-neutral-500 tracking-tighter cursor-pointer">
                        // Кто я
                    </a>
                    <a href="#" className="text-base font-normal text-neutral-500 tracking-tighter cursor-pointer">
                        // Связаться
                    </a>
                    <a href="#" className="text-base font-normal text-neutral-500 tracking-tighter cursor-pointer">
                        // Актуальное
                    </a>
                </div>
                <LanguageChanger />
            </nav>
        </header>
    )
}

function LanguageChanger() {
    return (
        <div className="py-2 px-3 sm:px-4 cursor-pointer gap-2 flex items-center bg-neutral-200 border rounded-full">
            <span className="font-bold text-sm sm:text-base text-neutral-700">/RUS</span>
            <img src="/language.svg" alt="" />
        </div>
    )
}