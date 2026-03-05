export function Actual() {
    return (
        <div id="actual" className="w-full flex flex-col items-center gap-6 sm:gap-8 md:gap-12 mt-12 sm:mt-16 md:mt-24">
            <h2 className="text-2xl sm:text-3xl tracking-tighter text-center font-medium text-neutral-800">
                Актуальное
            </h2>
            <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 px-4">
                {/* Card 1 - Pushed down the most */}
                <div className="w-full aspect-5/4 rounded-3xl sm:rounded-4xl bg-[#f9f9f9] border border-neutral-300 transition-transform hover:-translate-y-2 cursor-pointer duration-300"></div>

                {/* Card 2 - Highest */}
                <div className="w-full aspect-5/4 rounded-3xl sm:rounded-4xl bg-[#f9f9f9] border border-neutral-300 transition-transform hover:-translate-y-2 cursor-pointer duration-300"></div>

                {/* Card 3 - In between */}
                <div className="w-full aspect-5/4 rounded-3xl sm:rounded-4xl bg-[#f9f9f9] border border-neutral-300 transition-transform hover:-translate-y-2 cursor-pointer duration-300"></div>
            </div>
        </div>
    )
}
