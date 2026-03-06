import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export function Contact() {
    const { t } = useTranslation();
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [contactMethod, setContactMethod] = useState<'telegram' | 'whatsapp'>('telegram');
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [isSent, setIsSent] = useState(false);
    const [isSending, setIsSending] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('contact_form_sent') === 'true') {
            setIsSent(true);
        }
    }, []);

    const toggleService = (serviceName: string) => {
        setSelectedServices((prev) =>
            prev.includes(serviceName)
                ? prev.filter((s) => s !== serviceName)
                : [...prev, serviceName]
        );
    };

    const handleSubmit = async () => {
        if (isSent || isSending) return;

        if (!name.trim() || !contact.trim()) {
            alert(t('contact.alert'));
            return;
        }

        setIsSending(true);

        const message = `
🔔 Новая заявка с сайта!
👤 Имя: ${name}
📞 Связь: ${contactMethod}
📱 Контакт: ${contact}
🛠 Услуги: ${selectedServices.length > 0 ? selectedServices.join(', ') : 'Не выбрано'}
        `.trim();

        try {
            const token = "8687831346:AAErDRC2UVThdyEwxn7zJDdDJwtjloLGGk0";
            // Внимание: для Telegram API нужен chat_id. 
            // Получить его можно написав боту @userinfobot или аналогичным, и посмотреть свой ID.
            // Замените YOUR_CHAT_ID_HERE на ваш chat_id.
            const chatId = "1389541730";

            await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message,
                }),
            });

            localStorage.setItem('contact_form_sent', 'true');
            setIsSent(true);
        } catch (error) {
            console.error("Ошибка при отправке: ", error);
            alert(t('contact.alert_error'));
        } finally {
            setIsSending(false);
        }
    };

    const servicesList = t('contact.services', { returnObjects: true }) as { name: string, more: string }[];

    return (
        <div id="contact" className="w-full flex flex-col gap-8 sm:gap-10 md:gap-12 mt-12 sm:mt-16 md:mt-20 items-center">
            <h2 className="text-2xl sm:text-3xl tracking-tighter leading-tight sm:leading-7 text-center font-medium text-neutral-100 px-4">
                {t('contact.title')}
                <br />
                <span className="font-normal text-base tracking-tight">{t('contact.subtitle')}</span>
            </h2>
            <div className="w-full px-4 sm:px-8 md:px-24 flex flex-col md:flex-row gap-8 md:gap-12">
                <div className="w-full md:w-1/2 flex flex-col gap-3">
                    {servicesList.map((service, index) => (
                        <Service
                            key={index}
                            text={service.name}
                            more={service.more}
                            isActive={selectedServices.includes(service.name)}
                            onClick={() => toggleService(service.name)}
                        />
                    ))}
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-between gap-8 md:gap-0">
                    <div className="w-full flex flex-col gap-6 md:gap-2">
                        <div className="flex flex-col gap-2 md:gap-0">
                            <span className="text-neutral-200 text-base sm:text-lg tracking-tighter">{t('contact.name')}</span>
                            <input
                                type="text"
                                placeholder={t('contact.name_placeholder')}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                disabled={isSent}
                                className="bg-neutral-900 w-full border border-neutral-800 rounded-full placeholder:text-neutral-500 px-6 py-3 text-neutral-100 disabled:opacity-60"
                            />
                        </div>
                        <div className="flex flex-col items-start gap-3 md:gap-2">
                            <span className="text-neutral-200 text-base sm:text-lg tracking-tighter">{t('contact.method')}</span>
                            <div className="flex flex-wrap sm:flex-nowrap px-2 sm:px-4 justify-center items-center py-2 gap-2 sm:gap-0 rounded-3xl sm:rounded-full bg-black/40 border border-neutral-800 w-full sm:w-auto">
                                <button
                                    onClick={() => setContactMethod('telegram')}
                                    disabled={isSent}
                                    className={`flex-1 sm:flex-none px-4 sm:px-6 cursor-pointer py-2 rounded-full transition-colors text-sm sm:text-base ${contactMethod === 'telegram' ? 'bg-[#ff003c] text-white' : 'bg-transparent sm:bg-[#181a1f] text-neutral-400 hover:bg-neutral-800'} disabled:opacity-60`}
                                >
                                    {t('contact.tg')}
                                </button>
                                <button
                                    onClick={() => setContactMethod('whatsapp')}
                                    disabled={isSent}
                                    className={`flex-1 sm:flex-none px-4 sm:px-6 cursor-pointer py-2 rounded-full transition-colors text-sm sm:text-base ${contactMethod === 'whatsapp' ? 'bg-[#ff003c] text-white' : 'bg-transparent sm:bg-[#181a1f] text-neutral-400 hover:bg-neutral-800'} disabled:opacity-60`}
                                >
                                    {t('contact.wa')}
                                </button>
                            </div>
                            <input
                                type="text"
                                placeholder={t('contact.contact_placeholder')}
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                                disabled={isSent}
                                className="bg-neutral-900 w-full border border-neutral-800 rounded-full placeholder:text-neutral-500 px-6 py-3 text-neutral-100 disabled:opacity-60"
                            />
                        </div>
                    </div>
                    <button
                        onClick={handleSubmit}
                        disabled={isSent || isSending}
                        className={`w-full px-6 py-4 rounded-full text-white text-base sm:text-lg font-medium transition-all ${isSent
                            ? "bg-green-500 cursor-default"
                            : isSending
                                ? "bg-neutral-400 cursor-not-allowed"
                                : "bg-[#ff003c] cursor-pointer active:scale-[0.98] hover:bg-[#e60036]"
                            }`}
                    >
                        {isSent ? t('contact.btn_sent') : isSending ? t('contact.btn_sending') : t('contact.btn_send')}
                    </button>
                </div>
            </div>
        </div>
    )
}

interface ServiceProps {
    isActive?: boolean;
    text: string;
    more?: string;
    onClick?: () => void;
}

function Service({ isActive = false, text, more, onClick }: ServiceProps) {
    const [showTooltip, setShowTooltip] = useState(false);

    const handleInfoInteraction = (e: React.MouseEvent | React.TouchEvent) => {
        e.stopPropagation();
        setShowTooltip(!showTooltip);
    };

    return <div onClick={onClick} className={`w-full cursor-pointer rounded-4xl sm:rounded-full flex justify-between items-center border px-4 sm:px-8 py-3 gap-2 transition-all duration-300 ${isActive
        ? "bg-[#ff003c] text-white border-[#ff003c]"
        : "bg-neutral-900 text-neutral-400 border-neutral-800 hover:border-neutral-600"
        }`}>
        <span className="text-sm sm:text-base leading-tight">{text}</span>
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <div
                className="relative flex items-center justify-center p-1 -m-1"
                onClick={handleInfoInteraction}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
            >
                <svg className="cursor-help shrink-0 w-4 sm:w-5 h-4 sm:h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10ZM10.0098 13C10.5621 13 11.0098 13.4477 11.0098 14V14.0098C11.0098 14.5621 10.5621 15.0098 10.0098 15.0098H10C9.44771 15.0098 9 14.5621 9 14.0098V14C9 13.4477 9.44771 13 10 13H10.0098ZM11 7C11 6.74257 10.9024 6.48842 10.707 6.29297C10.5111 6.09707 10.2561 5.99955 9.99805 6C9.77338 6.00043 9.55175 6.07538 9.36914 6.22461L9.2168 6.36133C8.82411 6.68154 8.24501 6.65883 7.87891 6.29297C7.48841 5.90248 7.48847 5.26944 7.87891 4.87891C8.46314 4.29467 9.23064 4.00134 9.99512 4C10.7629 3.99876 11.5343 4.29206 12.1211 4.87891C12.7066 5.46449 13 6.23382 13 7C13 7.76616 12.7066 8.53555 12.1211 9.12109C11.7939 9.44822 11.4083 9.68075 10.999 9.8252L11 9.99609C11.0019 10.5482 10.556 10.9978 10.0039 11C9.45162 11.0019 9.00195 10.5552 9 10.0029L8.99609 9.00293C8.99526 8.73695 9.10114 8.48122 9.28906 8.29297C9.477 8.10488 9.73214 7.99958 9.99805 8C10.2561 8.00045 10.5111 7.90287 10.707 7.70703C10.9024 7.51162 11 7.25741 11 7ZM20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill={isActive ? "#FFFFFF" : "#A8A8A8"} />
                </svg>

                {showTooltip && more && (
                    <div className="absolute right-0 bottom-full mb-2 w-48 sm:w-64 p-3 z-20 bg-neutral-800 text-white text-xs sm:text-sm rounded-xl shadow-lg border border-neutral-700 leading-snug animate-in fade-in zoom-in-95 duration-200">
                        {more}
                        <div className="absolute -bottom-1.5 right-2 w-3 h-3 bg-neutral-800 border-b border-r border-neutral-700 rotate-45"></div>
                    </div>
                )}
            </div>
            <svg className={`shrink-0 w-[14px] sm:w-[18px] h-[14px] sm:h-[18px] transition-transform duration-300 ${isActive ? 'rotate-45' : ''}`} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.99952 16.9996C9.99952 17.5518 9.55183 17.9994 8.99963 17.9995C8.44735 17.9995 7.99974 17.5519 7.99974 16.9996L8.00043 9.99965H0.999796C0.447511 9.99965 -9.83307e-05 9.55204 -9.76563e-05 8.99976C-9.83307e-05 8.44747 0.447511 7.99986 0.999796 7.99986H8.00043L7.99974 0.99992C7.99974 0.447635 8.44735 2.62866e-05 8.99963 2.6708e-05C9.55183 0.000124025 9.99952 0.447696 9.99952 0.99992L10.0002 7.99986L16.9995 7.99986C17.5518 7.99986 17.9994 8.44747 17.9994 8.99976C17.9994 9.55204 17.5518 9.99965 16.9995 9.99965L10.0002 9.99965L9.99952 16.9996Z" fill={isActive ? "#FFFFFF" : "#2C2C2C"} />
            </svg>

        </div>
    </div>
}