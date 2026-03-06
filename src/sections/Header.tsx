import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export function Header() {
    const { t } = useTranslation();

    return (
        <header className="w-full sticky top-0 z-50 py-6 sm:py-8 md:py-12 px-0 sm:px-4 md:px-12">
            <nav className="w-full sticky top-0 py-4 px-6 sm:py-5 sm:px-10 md:py-6 md:px-16 bg-[#0a0a0a]/80 border backdrop-blur-lg border-neutral-800 rounded-full flex justify-between items-center">
                <a href="/"><img src="/logo.svg" alt="" className="w-[100px] h-[33px] md:w-[120px] md:h-[40px] cursor-pointer" /></a>
                <div className="hidden lg:flex gap-10 items-center text-neutral-100">
                    <a href="/#about" className="text-base font-normal text-neutral-400 tracking-tighter cursor-pointer hover:underline hover:text-neutral-100 underline-offset-4 transition-all">
                        // {t('header.about')}
                    </a>
                    <a href="/#contact" className="text-base font-normal text-neutral-400 tracking-tighter cursor-pointer hover:underline hover:text-neutral-100 underline-offset-4 transition-all">
                        // {t('header.contact')}
                    </a>
                    <a href="/#actual" className="text-base font-normal text-neutral-400 tracking-tighter cursor-pointer hover:underline hover:text-neutral-100 underline-offset-4 transition-all">
                        // {t('header.projects')}
                    </a>
                </div>
                <LanguageChanger />
            </nav>
        </header>
    )
}

function LanguageChanger() {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const languages = [
        { code: 'ru', label: 'RUS' },
        { code: 'en', label: 'ENG' },
        { code: 'kk', label: 'KAZ' }
    ];

    const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const changeLanguage = (code: string) => {
        i18n.changeLanguage(code);
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="py-2 px-3 sm:px-4 cursor-pointer gap-2 flex items-center bg-neutral-800 hover:bg-neutral-800 transition-colors border border-neutral-800 rounded-full"
            >
                <span className="font-bold text-sm sm:text-base text-neutral-200">/{currentLang.label}</span>
                <img src="/language.svg" alt="lang" className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </div>

            {isOpen && (
                <div className="absolute top-full right-0 mt-2 py-2 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-lg z-50 min-w-[100px] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => changeLanguage(lang.code)}
                            className={`px-4 py-2 text-left cursor-pointer text-sm font-medium hover:bg-neutral-800 transition-colors ${i18n.language === lang.code ? 'text-[#ff003c]' : 'text-neutral-200'}`}
                        >
                            {lang.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}