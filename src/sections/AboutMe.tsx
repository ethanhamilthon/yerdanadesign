import { useTranslation } from "react-i18next";

export function AboutMe() {
    const { t } = useTranslation();

    return (
        <div id="about" className="w-full flex flex-col gap-8 sm:gap-12 md:gap-16 mt-8 sm:mt-10 md:mt-12 items-center px-0 sm:px-6 md:px-0">
            <h2 className="text-xl sm:text-2xl md:text-3xl tracking-tighter leading-tight sm:leading-snug md:leading-7 text-center font-medium text-neutral-700">
                {t('about.title')}
            </h2>
            <div className="w-full flex flex-col md:flex-row items-stretch gap-4 px-4 sm:px-0">
                <div className="w-full md:w-1/2 h-64 relative shrink-0">
                    <p className="z-10 absolute left-4 sm:left-6 bottom-4 sm:bottom-6 text-neutral-700 leading-4 sm:leading-5 text-lg sm:text-lg tracking-tighter pr-4">
                        {t('about.card1_start')} <span className="text-[#FF003C]">{t('about.card1_highlight')}</span> {
                            t('about.card1_rest').split('\n').map((line, i, arr) => (
                                <span key={i}>
                                    {line}
                                    {i < arr.length - 1 && <br />}
                                </span>
                            ))
                        }
                    </p>
                    <div className="absolute inset-0 bg-linear-to-t sm:bg-linear-to-tr from-white from-20% via-white/60 to-transparent rounded-2xl"></div>
                    <img src="/me1.jpg" alt="" className="w-full h-full object-cover rounded-2xl" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col sm:flex-row gap-4 h-auto md:h-64 shrink-0">
                    <div className="w-full sm:w-1/2 h-64 relative shrink-0">
                        <p className="z-10 absolute left-4 sm:left-6 bottom-4 sm:bottom-6 text-neutral-700 leading-4 sm:leading-5 text-lg sm:text-lg tracking-tighter pr-4">
                            <span className="text-[#FF003C]">{t('about.card2_highlight')}</span> {
                                t('about.card2_rest').split('\n').map((line, i, arr) => (
                                    <span key={i}>
                                        {line}
                                        {i < arr.length - 1 && <br />}
                                    </span>
                                ))
                            }
                        </p>
                        <div className="absolute inset-0 bg-linear-to-t sm:bg-linear-to-tr from-white from-20% via-white/60 to-transparent rounded-2xl"></div>
                        <img src="/me2.jpg" alt="" className="w-full h-full object-cover rounded-2xl" />
                    </div>
                    <div className="w-full sm:w-1/2 h-64 relative shrink-0">
                        <p className="z-10 absolute left-4 sm:left-6 bottom-4 sm:bottom-6 text-neutral-700 leading-4 sm:leading-5 text-lg sm:text-lg tracking-tighter pr-4">
                            <span className="text-[#FF003C]">{t('about.card3_highlight')}</span> {
                                t('about.card3_rest').split('\n').map((line, i, arr) => (
                                    <span key={i}>
                                        {line}
                                        {i < arr.length - 1 && <br />}
                                    </span>
                                ))
                            }
                        </p>
                        <div className="absolute inset-0 bg-linear-to-t sm:bg-linear-to-tr from-white from-20% via-white/60 to-transparent rounded-2xl"></div>
                        <img src="/me3.jpg" alt="" className="w-full h-full object-cover rounded-2xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}