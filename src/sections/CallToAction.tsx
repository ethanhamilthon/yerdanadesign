export function CallToAction() {
    return (
        <div className="w-full flex flex-col items-center mt-16 sm:mt-24 md:mt-32 mb-6 sm:mb-12">
            <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 px-4 md:px-0">
                <h2 className="text-2xl sm:text-3xl tracking-tighter leading-[1.1] font-medium text-neutral-800 text-center md:text-left">
                    Опишите проблему.<br />
                    Предложу структуру решения.
                </h2>
                <a
                    href="https://wa.me/77064103113?text=Привет!%20Я%20с%20твоего%20сайта.%0A%0AЕсть%20задача%20по%20дизайну:%0A[кратко%20опиши%20проблему%20или%20задачу]%0A%0AЦель%20проекта:%0A[что%20должно%20получиться]%0A%0AСроки:%0A[если%20есть]"
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-center items-center px-10 sm:px-12 py-4 sm:py-5 rounded-full bg-[#1CD05D] hover:bg-[#19b953] transition-colors"
                >
                    <span className="text-lg sm:text-xl text-white font-medium tracking-tight">WhatsApp</span>
                </a>
            </div>
        </div>
    )
}
