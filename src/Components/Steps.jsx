export default function Steps() {
    return (
        <div className="text-center my-16">

            <h2 className="text-3xl font-bold">Get Started In 3 Steps</h2>

            <div className="grid md:grid-cols-3 gap-6 px-5 mt-10">

                <div className="p-6 shadow rounded-xl">
                    <img src="/src/assets/user.png" />
                    <h3>Create Account</h3>
                </div>

                <div className="p-6 shadow rounded-xl">
                    <img src="/src/assets/package.png" />
                    <h3>Choose Products</h3>
                </div>

                <div className="p-6 shadow rounded-xl">
                    <img src="/src/assets/rocket.png" />
                    <h3>Start Creating</h3>
                </div>

            </div>
        </div>
    );
}