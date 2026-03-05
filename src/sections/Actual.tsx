import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { createClient } from "contentful";

const client = createClient({
    space: 'osbxgzswmmhk',
    environment: 'master',
    accessToken: 'jbouT3UBakPMLMvfiahIDLNKc5YFCnK8rsKbTmW2qX0'
});

export function Actual() {
    const { t } = useTranslation();
    const [actuals, setActuals] = useState<any[]>([]);

    useEffect(() => {
        const fetchActuals = async () => {
            try {
                // Fetching content type 'actual'
                const response = await client.getEntries({ content_type: 'actual' });

                const fetched = response.items.map((item: any) => {
                    const fields = item.fields;

                    // Cover image parsing
                    let imgUrl = "";
                    if (fields.thumbnail?.fields?.file?.url) {
                        imgUrl = "https:" + fields.thumbnail.fields.file.url;
                    }

                    return {
                        id: item.sys.id,
                        title: fields.title || 'Untitled',
                        coverImage: imgUrl,
                        slug: fields.uniquePath || item.sys.id,
                        // Not necessarily showing languageTag here based on design, but storing it
                        languageTag: fields.language || 'RU'
                    };
                });

                setActuals(fetched);
            } catch (err) {
                console.error("Error fetching actuals:", err);
            }
        };

        fetchActuals();
    }, []);

    return (
        <div id="actual" className="w-full flex flex-col items-center gap-6 sm:gap-8 md:gap-12 mt-12 sm:mt-16 md:mt-24">
            <h2 className="text-2xl sm:text-3xl tracking-tighter text-center font-medium text-neutral-800">
                {t('actual.title')}
            </h2>
            <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 px-4">
                {actuals.map((item) => (
                    <Link
                        key={item.id}
                        to={`/actuals/${item.slug}`}
                        className="w-full aspect-5/4 rounded-3xl sm:rounded-4xl bg-[#f9f9f9] border border-neutral-300 transition-transform hover:-translate-y-2 cursor-pointer duration-300 relative overflow-hidden group"
                    >
                        {item.coverImage && (
                            <img src={item.coverImage} alt={item.title} className="absolute inset-0 w-full h-full object-cover rounded-3xl sm:rounded-4xl group-hover:scale-105 transition-transform duration-500" />
                        )}
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent rounded-3xl sm:rounded-4xl z-10 flex items-end p-5 sm:p-6">
                            <h3 className="text-white text-xl sm:text-2xl font-medium tracking-tight group-hover:underline">
                                {item.title}
                            </h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
