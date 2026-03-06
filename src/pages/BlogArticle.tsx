import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "../sections/Header";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { createClient } from "contentful";
import { Helmet } from "react-helmet-async";

const client = createClient({
    space: 'osbxgzswmmhk',
    environment: 'master',
    accessToken: 'jbouT3UBakPMLMvfiahIDLNKc5YFCnK8rsKbTmW2qX0'
});

export function BlogArticle() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [article, setArticle] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                // We use fields.uniquePath depending on what the user actually named it in Contentful
                const response = await client.getEntries({
                    content_type: 'actual',
                    'fields.uniquePath': slug,
                    limit: 1
                });

                if (response.items.length > 0) {
                    const item = response.items[0];
                    const fields = item.fields as any;

                    let imgUrl = "";
                    if (fields.thumbnail?.fields?.file?.url) {
                        imgUrl = "https:" + fields.thumbnail.fields.file.url;
                    }

                    setArticle({
                        title: fields.title || "Untitled",
                        description: fields.description || "Article about our actual projects and news",
                        coverImage: imgUrl,
                        languageTag: fields.language || "RU",
                        content: fields.content // Rich text field
                    });
                }
            } catch (err) {
                console.error("Error fetching article:", err);
            } finally {
                setLoading(false);
            }
        };

        if (slug) {
            fetchArticle();
        }
    }, [slug]);

    if (loading) {
        return (
            <div className="w-full flex md:contents flex-col gap-6">
                <Header />
                <div className="w-full max-w-5xl mx-auto flex items-center justify-center min-h-[50vh]">
                    <p className="text-neutral-500">Загрузка...</p>
                </div>
            </div>
        );
    }

    if (!article) {
        return (
            <div className="w-full flex md:contents flex-col gap-6">
                <Header />
                <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center min-h-[50vh] gap-4">
                    <p className="text-neutral-500">Запись не найдена</p>
                    <button onClick={() => navigate(-1)} className="px-6 py-2 bg-neutral-900 border border-neutral-800 rounded-full hover:bg-neutral-800 text-neutral-200">Назад</button>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full flex md:contents flex-col gap-6">
            <Helmet>
                <title>{article.title}</title>
                <meta property="og:title" content={article.title} />
                <meta property="og:description" content={article.description} />
                <meta property="og:image" content={article.coverImage} />
                <meta property="og:type" content="article" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={article.title} />
                <meta name="twitter:description" content={article.description} />
                <meta name="twitter:image" content={article.coverImage} />
            </Helmet>
            <Header />
            <div className="w-full max-w-5xl mx-auto flex flex-col gap-6 sm:gap-8 px-2 sm:px-6 md:px-0">

                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 transition-colors shrink-0"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 12H5" stroke="#e5e5e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 19L5 12L12 5" stroke="#e5e5e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tighter text-neutral-100 leading-tight">
                        {article.title}
                    </h1>
                </div>

                {/* <div className="flex items-center gap-2 px-14 sm:px-16 md:px-16">
                    <span className="px-3 py-1 bg-neutral-100 border border-neutral-200 text-neutral-600 rounded-full text-xs font-semibold tracking-tight uppercase">
                        {article.languageTag}
                    </span>
                </div> */}

                <div className="w-full mt-2 aspect-video sm:aspect-21/9 bg-neutral-900 rounded-3xl sm:rounded-[2.5rem] overflow-hidden border border-neutral-800 flex shrink-0">
                    <img src={article.coverImage} className="w-full h-full object-cover" alt={article.title} />
                </div>

                {/* Contentful Rich Text output */}
                <div className="flex flex-col gap-4 text-neutral-300 text-lg md:text-xl font-light tracking-tight leading-relaxed mt-4 sm:mt-8 pb-32">
                    {documentToReactComponents(article.content as any, {
                        renderNode: {
                            'heading-2': (_, children) => <h2 className="text-2xl md:text-3xl font-medium tracking-tighter text-neutral-100 mt-8 mb-4">{children}</h2>,
                            'paragraph': (_, children) => <p className="mb-4">{children}</p>,
                            // Add more custom renderers if needed to match design system
                        }
                    })}
                </div>

            </div>
        </div>
    )
}
