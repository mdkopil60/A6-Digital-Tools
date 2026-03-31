const Banner = () => {
    return (
        <div className="grid md:grid-cols-2 items-center px-6 py-12 bg-gray-50">

            <div>
                <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm">
                    New: AI-Powered Tools Available
                </span>

                <h1 className="text-4xl md:text-5xl font-bold mt-4">
                    Supercharge Your <br /> Digital Workflow
                </h1>

                <p className="text-gray-600 mt-4">
                    Access premium AI tools, design assets, templates, and productivity
                    software—all in one place. <br /> Start creating faster today.
                    Explore Products
                </p>

                <div className="mt-6 flex gap-4">
                    <button className="btn btn-primary rounded-full">Explore</button>
                    <button className="btn rounded-full">Watch Demo</button>
                </div>
            </div>

            <div className="mt-8 md:mt-0 flex justify-center">
                <img src="/src/assets/banner.png" className="rounded-lg" />
            </div>
        </div>
    );
};

export default Banner;