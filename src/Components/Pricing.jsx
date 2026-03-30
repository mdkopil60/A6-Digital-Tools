export default function Pricing() {
    return (
        <div className="py-16 bg-gray-50 text-center">
            <h2 className="text-3xl font-bold mb-2">
                Simple, Transparent Pricing
            </h2>
            <p className="text-gray-500 mb-10">
                Choose the plan that fits your needs
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">

                {/* Starter */}
                <div className="bg-white p-6 rounded-xl shadow">
                    <h3 className="font-bold text-xl">Starter</h3>
                    <p className="text-3xl font-bold my-3">$0<span className="text-sm">/month</span></p>

                    <ul className="text-sm text-gray-500 mb-4">
                        <li>✔ Access to free tools</li>
                        <li>✔ Basic templates</li>
                        <li>✔ Community support</li>
                    </ul>

                    <button className="bg-purple-600 text-white px-4 py-2 rounded-lg w-full">
                        Get Started Free
                    </button>
                </div>

                {/* Pro */}
                <div className="bg-indigo-600 from-purple-600 to-indigo-700 text-white p-6 rounded-xl shadow-lg scale-105">
                    <h3 className="font-bold text-xl">Pro</h3>
                    <p className="text-3xl font-bold my-3">$29<span className="text-sm">/month</span></p>

                    <ul className="text-sm mb-4">
                        <li>✔ All premium tools</li>
                        <li>✔ Priority support</li>
                        <li>✔ Unlimited projects</li>
                    </ul>

                    <button className="bg-white text-purple-700 px-4 py-2 rounded-lg w-full">
                        Start Pro Trial
                    </button>
                </div>

                {/* Enterprise */}
                <div className="bg-white p-6 rounded-xl shadow">
                    <h3 className="font-bold text-xl">Enterprise</h3>
                    <p className="text-3xl font-bold my-3">$99<span className="text-sm">/month</span></p>

                    <ul className="text-sm text-gray-500 mb-4">
                        <li>✔ Team collaboration</li>
                        <li>✔ Dedicated support</li>
                        <li>✔ Custom solutions</li>
                    </ul>

                    <button className="bg-purple-600 text-white px-4 py-2 rounded-lg w-full">
                        Contact Sales
                    </button>
                </div>

            </div>
        </div>
    );
}