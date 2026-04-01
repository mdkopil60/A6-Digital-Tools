export default function Steps() {
    return (
        <div className="text-center my-16">
            <h2 className="text-3xl font-bold">Get Started In 3 Steps</h2>
            <p className="text-gray-500 mb-10 text-center">Start using premium digital tools in minutes, not hours.</p>

            <div className="grid md:grid-cols-3 gap-6 px-5 mt-10">

                {/* Step 1 */}
                <div className="p-6 shadow rounded-xl flex flex-col items-center">
                    <img src="./user.png" className="w-16 h-16 mb-4" alt="user" />
                    <h3 className="text-2xl font-bold">Create Account</h3>
                    <p className="text-gray-600 mt-4">
                        Sign up for free in seconds. No credit card <br /> required to get started.
                    </p>
                </div>

                {/* Step 2 */}
                <div className="p-6 shadow rounded-xl flex flex-col items-center">
                    <img src="./package.png" className="w-16 h-16 mb-4" alt="package" />
                    <h3 className="text-2xl font-bold">Choose Products</h3>
                    <p className="text-gray-600 mt-4">
                        Browse our catalog and select the tools <br /> that fit your needs.
                    </p>
                </div>

                {/* Step 3 */}
                <div className="p-6 shadow rounded-xl flex flex-col items-center">
                    <img src="./rocket.png" className="w-16 h-16 mb-4" alt="rocket" />
                    <h3 className="text-2xl font-bold">Start Creating</h3>
                    <p className="text-gray-600 mt-4">
                        Download and start using your premium <br /> tools immediately.
                    </p>
                </div>

            </div>
        </div>
    );
}