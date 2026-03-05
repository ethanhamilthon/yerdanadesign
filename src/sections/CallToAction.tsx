export function CallToAction() {
    return (
        <div className="w-full flex flex-col items-center mt-32 mb-12">
            <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4 md:px-0">
                <h2 className="text-3xl tracking-tighter leading-[1.1] font-medium text-neutral-800 text-center md:text-left">
                    Опишите проблему.<br />
                    Предложу структуру решения.
                </h2>
                <a
                    href="https://wa.me/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-center items-center px-12 py-5 rounded-full bg-[#1CD05D] hover:bg-[#19b953] transition-colors"
                >
                    <span className="text-xl text-white font-medium tracking-tight">WhatsApp</span>
                </a>
            </div>
        </div>
    )
}
