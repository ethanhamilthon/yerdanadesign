
export function Contact() {
    return (
        <div className="w-full flex flex-col gap-12 mt-20 items-center">
            <h2 className="text-3xl tracking-tighter leading-7 text-center font-medium text-neutral-700">
                Давайте проектируем ваш визуал
            </h2>
            <div className="w-full px-24 flex gap-12">
                <div className="w-full flex flex-col gap-3">
                    <Service />
                    <Service />
                    <Service />
                    <Service />
                    <Service />
                    <Service />
                </div>
                <div className="w-full flex flex-col justify-between">
                    <div className="w-full flex flex-col gap-2">
                        <div className="flex flex-col">
                            <span className="text-neutral-700 text-lg tracking-tighter">Как вас зовут?</span>
                            <input type="text" placeholder="Ваша имя" className="bg-neutral-50 border border-neutral-400 rounded-full placeholder:text-neutral-400 px-6 py-3 text-neutral-800" />
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <span className="text-neutral-700 text-lg tracking-tighter">Как с вами связаться?</span>
                            <div className=" px-4 flex justify-center items-center py-2  rounded-full bg-neutral-100 border border-neutral-300">
                                <button className="px-6 cursor-pointer py-2 rounded-full  bg-[#ff003c] text-white">
                                    Telegram
                                </button>
                                <button className="px-6 cursor-pointer py-2 rounded-full bg-neutral-100 text-neutral-500">
                                    WhatsApp
                                </button>
                            </div>
                            <input type="text" placeholder="Ваш номер/юзернейм" className="bg-neutral-50 w-full border border-neutral-400 rounded-full placeholder:text-neutral-400 px-6 py-3 text-neutral-800" />
                        </div>
                    </div>
                    <button className="w-full px-6 cursor-pointer py-4 rounded-full  bg-[#ff003c] text-white">
                        Отправить
                    </button>
                </div>
            </div>
        </div>
    )
}

function Service() {
    return <div className="w-full rounded-full flex justify-between items-center text-neutral-500 bg-neutral-200 border border-neutral-400 px-8 py-3">
        <span>Визуальная система</span>
        <div className="flex items-center gap-4">
            <svg className="cursor-pointer" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10ZM10.0098 13C10.5621 13 11.0098 13.4477 11.0098 14V14.0098C11.0098 14.5621 10.5621 15.0098 10.0098 15.0098H10C9.44771 15.0098 9 14.5621 9 14.0098V14C9 13.4477 9.44771 13 10 13H10.0098ZM11 7C11 6.74257 10.9024 6.48842 10.707 6.29297C10.5111 6.09707 10.2561 5.99955 9.99805 6C9.77338 6.00043 9.55175 6.07538 9.36914 6.22461L9.2168 6.36133C8.82411 6.68154 8.24501 6.65883 7.87891 6.29297C7.48841 5.90248 7.48847 5.26944 7.87891 4.87891C8.46314 4.29467 9.23064 4.00134 9.99512 4C10.7629 3.99876 11.5343 4.29206 12.1211 4.87891C12.7066 5.46449 13 6.23382 13 7C13 7.76616 12.7066 8.53555 12.1211 9.12109C11.7939 9.44822 11.4083 9.68075 10.999 9.8252L11 9.99609C11.0019 10.5482 10.556 10.9978 10.0039 11C9.45162 11.0019 9.00195 10.5552 9 10.0029L8.99609 9.00293C8.99526 8.73695 9.10114 8.48122 9.28906 8.29297C9.477 8.10488 9.73214 7.99958 9.99805 8C10.2561 8.00045 10.5111 7.90287 10.707 7.70703C10.9024 7.51162 11 7.25741 11 7ZM20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="#A8A8A8" />
            </svg>
            <svg className="cursor-pointer" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.99952 16.9996C9.99952 17.5518 9.55183 17.9994 8.99963 17.9995C8.44735 17.9995 7.99974 17.5519 7.99974 16.9996L8.00043 9.99965H0.999796C0.447511 9.99965 -9.83307e-05 9.55204 -9.76563e-05 8.99976C-9.83307e-05 8.44747 0.447511 7.99986 0.999796 7.99986H8.00043L7.99974 0.99992C7.99974 0.447635 8.44735 2.62866e-05 8.99963 2.6708e-05C9.55183 0.000124025 9.99952 0.447696 9.99952 0.99992L10.0002 7.99986L16.9995 7.99986C17.5518 7.99986 17.9994 8.44747 17.9994 8.99976C17.9994 9.55204 17.5518 9.99965 16.9995 9.99965L10.0002 9.99965L9.99952 16.9996Z" fill="#2C2C2C" />
            </svg>

        </div>
    </div>
}