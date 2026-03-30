const Stats = () => {
    return (
        <div className="bg-indigo-600 text-white py-10">
            <div className="grid md:grid-cols-3 text-center gap-6">

                <div>
                    <h2 className="text-4xl font-bold">50K+</h2>
                    <p>Active Users</p>
                </div>

                <div>
                    <h2 className="text-4xl font-bold">200+</h2>
                    <p>Premium Tools</p>
                </div>

                <div>
                    <h2 className="text-4xl font-bold">4.9</h2>
                    <p>Rating</p>
                </div>

            </div>
        </div>
    );
};

export default Stats;