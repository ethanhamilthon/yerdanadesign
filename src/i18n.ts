import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// the translations
const resources = {
    ru: {
        translation: {
            "header": {
                "services": "Услуги",
                "projects": "Актуальное",
                "about": "Обо мне",
                "contact": "Связаться"
            },
            "projects": {
                "all": "Все",
                "understood": "Понятно",
                "view_project": "Смотреть проект",
                "branding": "Брендинг",
                "website": "Разработка Сайтов",
                "animation": "Анимация/Моушн",
                "marketing": "Маркетинг/СММ",
                "other": "Другое"
            },
            "contact": {
                "title": "Давайте обсудим ваш проект",
                "subtitle": "Выберите тип задачи и оставьте контакт — я свяжусь с вами.",
                "name": "Как вас зовут?",
                "name_placeholder": "Ваше имя",
                "method": "Как с вами связаться?",
                "contact_placeholder": "Ваш номер/юзернейм",
                "btn_send": "Отправить",
                "btn_sending": "Отправка...",
                "btn_sent": "Сообщение отправлено, отвечу как можно скорее!",
                "services": [
                    { "name": "Маркетинговый дизайн", "more": "Создание креативов для рекламы, баннеров, оформление соцсетей и email-рассылок." },
                    { "name": "Брендинг", "more": "Разработка логотипа, фирменного стиля, гайдлайнов и визуальной стратегии бренда." },
                    { "name": "Веб-дизайн / Cайт", "more": "Проектирование интерфейсов, дизайн лендингов, корпоративных сайтов и e-commerce." },
                    { "name": "Motion-дизайн", "more": "Анимация логотипов, создание рекламных роликов, 2D/3D анимация и эксплейнеры." },
                    { "name": "Арт-дирекшн", "more": "Управление визуальной частью проекта, контроль качества и стилистики." },
                    { "name": "Другое", "more": "Любые другие задачи, связанные с визуалом. Опишите подробнее при связи." }
                ],
                "alert": "Пожалуйста, заполните имя и контактные данные.",
                "alert_error": "Произошла ошибка при отправке. Пожалуйста, попробуйте позже.",
                "tg": "Telegram",
                "wa": "WhatsApp"
            },
            "hero": {
                "design_title": "Дизайн,",
                "turns_ideas": "который превращает\nидеи бизнеса\nв работающую систему",
                "subtitle": "От стратегии и брендинга до моушна,\nсайтов и digital-коммуникации",
                "start_project": "Начать проект",
                "cases": "Кейсы",
                "badge_design": "Design",
                "badge_strategy": "Strategy"
            },
            "seller": {
                "line1": "Дизайн — это не набор картинок.",
                "line2_highlight": "Это система,",
                "line2_rest": "которая объясняет продукт",
                "line3": "и помогает бизнесу продавать."
            },
            "about": {
                "title": "Привет, я Ердана👋",
                "card1_start": "Я",
                "card1_highlight": "помогаю бизнесу",
                "card1_rest": "говорить\nс аудиторией на визуальном\nязыке уже 7 лет.",
                "card2_highlight": "30+",
                "card2_rest": "комплексных\nпроектов",
                "card3_highlight": "Работаю",
                "card3_rest": "с B2B\nи экспертами"
            },
            "process": {
                "title": "Как я работаю",
                "steps": [
                    {
                        "title": "Погружение",
                        "subtitle": "Я: Погружаюсь в продукт, рынок и задачи, чтобы понять, какое решение действительно нужно",
                        "description": "Клиент: Делится информацией о бизнесе, продукте и целях проекта, чтобы сформировать точное понимание задачи."
                    },
                    {
                        "title": "Поиск решения",
                        "subtitle": "Я: Проверяю разные идеи и выбираю наиболее сильную концепцию",
                        "description": "Клиент: Изучает предложенные концепции, делится обратной связью и помогает выбрать направление для проекта."
                    },
                    {
                        "title": "Реализация",
                        "subtitle": "Я: Превращаю концепцию в полноценный дизайн и готовлю все необходимые материалы",
                        "description": "Клиент: Просматривает дизайн на ключевых этапах, дает комментарии и подтверждает финальное решение."
                    },
                    {
                        "title": "Финализация",
                        "subtitle": "Я: Финализирую проект и обеспечиваю поддержку после запуска",
                        "description": "Клиент: Получает готовые материалы, внедряет дизайн в работу и при необходимости обращается за поддержкой."
                    }
                ]
            },
            "ainative": {
                "title": "AI Native",
                "subtitle": "Скорость AI. Стратегия и ответственность человека",
                "left_title": "AI",
                "left_desc": "генерация гипотез",
                "right_title": "Я",
                "right_desc_1": "отбор, стратегическая",
                "right_desc_2": "рамка, финальное решение"
            },
            "actual": {
                "title": "Актуальное"
            },
            "cta": {
                "title_1": "Опишите проблему.",
                "title_2": "Предложу структуру решения.",
                "wa_link": "https://wa.me/77064103113?text=Привет!%20Я%20с%20твоего%20сайта.%0A%0AЕсть%20задача%20по%20дизайну:%0A[кратко%20опиши%20проблему%20или%20задачу]%0A%0AЦель%20проекта:%0A[что%20должно%20получиться]%0A%0AСроки:%0A[если%20есть]"
            }
        }
    },
    en: {
        translation: {
            "header": {
                "services": "Services",
                "projects": "Latest",
                "about": "About me",
                "contact": "Contact"
            },
            "projects": {
                "all": "All",
                "understood": "Got it",
                "view_project": "View project",
                "branding": "Branding",
                "website": "Web Development",
                "animation": "Animation/Motion",
                "marketing": "Marketing/SMM",
                "other": "Other"
            },
            "contact": {
                "title": "Let's discuss your project",
                "subtitle": "Select a task type and leave a contact — I will reach out to you.",
                "name": "What is your name?",
                "name_placeholder": "Your name",
                "method": "How to contact you?",
                "contact_placeholder": "Your number/username",
                "btn_send": "Send",
                "btn_sending": "Sending...",
                "btn_sent": "Message sent, I will answer as soon as possible!",
                "services": [
                    { "name": "Marketing Design", "more": "Creating creatives for ads, banners, social media design, and email newsletters." },
                    { "name": "Branding", "more": "Logo design, corporate identity, guidelines, and visual brand strategy." },
                    { "name": "Web Design / Site", "more": "Interface design, landing pages, corporate websites, and e-commerce." },
                    { "name": "Motion Design", "more": "Logo animation, commercials, 2D/3D animation, and explainers." },
                    { "name": "Art Direction", "more": "Managing the visual part of the project, quality control, and styling." },
                    { "name": "Other", "more": "Any other visual-related tasks. Describe in more detail when contacted." }
                ],
                "alert": "Please fill in your name and contact info.",
                "alert_error": "An error occurred while sending. Please try again later.",
                "tg": "Telegram",
                "wa": "WhatsApp"
            },
            "hero": {
                "design_title": "Design,",
                "turns_ideas": "that turns\nbusiness ideas\ninto a working system",
                "subtitle": "From strategy and branding to motion,\nwebsites and digital communication",
                "start_project": "Start Project",
                "cases": "Cases",
                "badge_design": "Design",
                "badge_strategy": "Strategy"
            },
            "seller": {
                "line1": "Design is not just a set of pictures.",
                "line2_highlight": "It's a system",
                "line2_rest": "that explains the product",
                "line3": "and helps the business sell."
            },
            "about": {
                "title": "Hi, I'm Yerdana👋",
                "card1_start": "I",
                "card1_highlight": "help businesses",
                "card1_rest": "speak\nwith their audience in a visual\nlanguage for 7 years.",
                "card2_highlight": "30+",
                "card2_rest": "complex\nprojects",
                "card3_highlight": "I work",
                "card3_rest": "with B2B\nand experts"
            },
            "process": {
                "title": "How I work",
                "steps": [
                    {
                        "title": "Immersion",
                        "subtitle": "Me: I dive into the product, market, and business goals to understand what solution is really needed",
                        "description": "Client: Shares information about the business, product, and project goals to form an accurate understanding of the task."
                    },
                    {
                        "title": "Finding a solution",
                        "subtitle": "Me: I test different ideas and choose the strongest concept",
                        "description": "Client: Reviews the proposed concepts, shares feedback, and helps choose the direction for the project."
                    },
                    {
                        "title": "Implementation",
                        "subtitle": "Me: I turn the concept into a complete design and prepare all necessary materials",
                        "description": "Client: Reviews the design at key stages, provides comments, and confirms the final solution."
                    },
                    {
                        "title": "Finalization",
                        "subtitle": "Me: I finalize the project and provide support after launch",
                        "description": "Client: Receives the final materials, implements the design, and reaches out for support if necessary."
                    }
                ]
            },
            "ainative": {
                "title": "AI Native",
                "subtitle": "AI speed. Human strategy and responsibility",
                "left_title": "AI",
                "left_desc": "hypothesis generation",
                "right_title": "Me",
                "right_desc_1": "selection, strategic",
                "right_desc_2": "framework, final decision"
            },
            "actual": {
                "title": "Latest"
            },
            "cta": {
                "title_1": "Describe the problem.",
                "title_2": "I will propose a solution structure.",
                "wa_link": "https://wa.me/77064103113?text=Hi!%20I'm%20from%20your%20website.%0A%0AI%20have%20a%20design%20task:%0A[briefly%20describe%20the%20problem%20or%20task]%0A%0AProject%20goal:%0A[what%20should%20be%20the%20result]%0A%0ADeadline:%0A[if%20any]"
            }
        }
    },
    kk: {
        translation: {
            "header": {
                "services": "Қызметтер",
                "projects": "Блог",
                "about": "Мен туралы",
                "contact": "Байланыс"
            },
            "projects": {
                "all": "Бәрі",
                "understood": "Түсіндім",
                "view_project": "Проектті көру",
                "branding": "Брендинг",
                "website": "Сайт",
                "animation": "Анимация/Моушн",
                "marketing": "Маркетинг/SMM",
                "other": "Басқалар"
            },
            "contact": {
                "title": "Проекттіңізді талқылайық",
                "subtitle": "Дизайн түрін таңдап, байланыс қалдырыңыз — өзім хабарласамын.",
                "name": "Есіміңіз кім?",
                "name_placeholder": "Сіздің есіміңіз",
                "method": "Сізбен қалай байланысуға болады?",
                "contact_placeholder": "Нөміріңіз/юзернейміңіз",
                "btn_send": "Жіберу",
                "btn_sending": "Жіберілуде...",
                "btn_sent": "Хабарлама жіберілді, мүмкіндігінше тез жауап беремін!",
                "services": [
                    { "name": "Маркетингтік дизайн", "more": "Жарнамаға, баннерлерге, әлеуметтік желілерге және email-таратылымдарға арналған креативтер жасау." },
                    { "name": "Брендинг", "more": "Логотип, фирмалық стиль, гайдлайн және брендтің визуалды стратегиясын жасау." },
                    { "name": "Веб-дизайн / Сайт", "more": "Интерфейстерді жобалау, лендингтер, корпоративтік сайттар және e-commerce дизайны." },
                    { "name": "Motion-дизайн", "more": "Логотиптерді анимациялау, жарнамалық роликтер, 2D/3D анимация және эксплейнерлер жасау." },
                    { "name": "Арт-дирекшн", "more": "Жобаның визуалды бөлігін басқару, сапа мен стилистиканы бақылау." },
                    { "name": "Басқа", "more": "Визуалға қатысты кез келген басқа тапсырмалар. Байланысқан кезде толығырақ сипаттаңыз." }
                ],
                "alert": "Есіміңіз бен байланыс деректеріңізді толтырыңыз.",
                "alert_error": "Жіберу кезінде қате пайда болды. Кейінірек қайталап көріңіз.",
                "tg": "Telegram",
                "wa": "WhatsApp"
            },
            "hero": {
                "design_title": "Бизнестің",
                "turns_ideas": "идеяларын\nсистемаға айналдыратын\nдизайн",
                "subtitle": "Стратегия мен брендингтен бастап моушн,\nсайттар мен digital-коммуникацияға дейін",
                "start_project": "Жұмысты бастау",
                "cases": "Кейстер",
                "badge_design": "Design",
                "badge_strategy": "Strategy"
            },
            "seller": {
                "line1": "Дизайн — жай ғана суреттер емес.",
                "line2_highlight": "Бұл жүйе,",
                "line2_rest": "ол продуктты түсіндіреді",
                "line3": "және бизнеске сатуға көмектеседі."
            },
            "about": {
                "title": "Сәлем, есімім Ердана👋",
                "card1_start": "Мен",
                "card1_highlight": "бизнеске",
                "card1_rest": "аудиториямен визуалды\nтілде сөйлесуге\n7 жыл көмектесіп келемін.",
                "card2_highlight": "30+",
                "card2_rest": "үлкен\nпроекттер",
                "card3_highlight": "B2B",
                "card3_rest": "және эксперттермен\nжұмыс істеймін"
            },
            "process": {
                "title": "Қалай жұмыс істеймін",
                "steps": [
                    {
                        "title": "Проектке кіру",
                        "subtitle": "Мен: Қандай шешім шынымен қажет екенін түсіну үшін продуктты, нарықты және задачаны зерттеймін",
                        "description": "Клиент: Тапсырманы нақты түсіну үшін бизнес, продукт және проект мақсаттары туралы ақпаратпен бөліседі."
                    },
                    {
                        "title": "Шешім іздеу",
                        "subtitle": "Мен: Әртүрлі идеяларды тексеріп, ең мықты концепцияны таңдаймын",
                        "description": "Клиент: Ұсынылған концепцияларды қарайды, кері байланыспен бөліседі."
                    },
                    {
                        "title": "Реализация",
                        "subtitle": "Мен: Гипотезаларды толыққанды дизайнға айналдырамын және барлық қажетті материалдарды дайындаймын",
                        "description": "Клиент: Дизайнды қарайды және соңғы шешімді растайды."
                    },
                    {
                        "title": "Қорытындылау",
                        "subtitle": "Мен: Проектті аяқтаймын және іске қосқаннан кейін поддержка көрсетемін",
                        "description": "Клиент: Дайын материалдарды алады, дизайнды қолданады және поддержка ала алады."
                    }
                ]
            },
            "ainative": {
                "title": "AI Native",
                "subtitle": "AI жылдамдығы. Адамның стратегиясы мен жауапкершілігі",
                "left_title": "AI",
                "left_desc": "гипотеза генерациясын жасау",
                "right_title": "Мен",
                "right_desc_1": "іріктеу, стратегиялық",
                "right_desc_2": "негіз, соңғы шешім"
            },
            "actual": {
                "title": "Соңғы әңгімелер"
            },
            "cta": {
                "title_1": "Проблеманы айтыңыз.",
                "title_2": "Шешім ұсынамын.",
                "wa_link": "https://wa.me/77064103113?text=Сәлем!%20Сайтыңыздан%20жазып%20тұрмын.%0A%0AДизайн%20бойынша%20тапсырма%20бар:%0A[проблеманы%20немесе%20тапсырманы%20қысқаша%20сипаттаңыз]%0A%0AПроекттің%20мақсаты:%0A[не%20шығу%20керек]%0A%0AМерзімі:%0A[егер%20болса]"
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        fallbackLng: "ru",
        detection: {
            order: ['querystring', 'localStorage', 'navigator'],
            lookupQuerystring: 'lang',
            caches: ['localStorage'],
        },
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
