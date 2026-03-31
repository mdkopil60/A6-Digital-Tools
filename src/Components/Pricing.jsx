export default function Pricing() {
    return (
        <div className="py-16 bg-gray-50 text-center">
            <h2 className="text-3xl font-bold mb-2">
                Simple, Transparent Pricing
            </h2>
            <p className="text-gray-500 mb-10">
                Choose the plan that fits your needs. Upgrade or downgrade anytime.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 items-stretch">
                {/* Starter */}
                <div className="bg-white p-6 rounded-xl shadow flex flex-col justify-between">
                    <div>
                        <h3 className="font-bold text-xl">Starter</h3>
                        <p className="text-gray-500 mb-6">Perfect for getting started</p>
                        <p className="text-3xl font-bold my-3">$0<span className="text-sm font-normal text-gray-400">/month</span></p>

                        <ul className="text-sm text-gray-600 mb-4 space-y-1.5 text-left ml-6 list-none">
                            <li>✔ <span className='pl-1'>Access to 10 free tools</span></li>
                            <li>✔ <span className='pl-1'>Basic templates</span></li>
                            <li>✔ <span className='pl-1'>Community support</span></li>
                            <li>✔ <span className='pl-1'>1 project per month</span></li>
                        </ul>
                    </div>

                    <button className="bg-blue-600 text-white py-2.5 rounded-lg w-full mt-4 hover:bg-blue-700 transition duration-150">
                        Get Started Free
                    </button>
                </div>
                <div className="bg-indigo-600 text-white p-6 pt-10 rounded-xl shadow-xl scale-105 flex flex-col justify-between relative">

                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-yellow-400 text-indigo-950 font-semibold text-xs py-1.5 px-5 rounded-full shadow-md uppercase tracking-wide">
                        Most Popular
                    </div>
                    <div>
                        <h3 className="font-bold text-xl">Pro</h3>
                        <p className="text-indigo-100 mb-6">Best for professionals</p>
                        <p className="text-3xl font-bold my-3">$29<span className="text-sm font-normal text-indigo-200">/month</span></p>

                        <ul className="text-sm text-indigo-50 mb-4 space-y-1.5 text-left ml-6 list-none">
                            <li>✔ <span className='pl-1'>Access to all premium tools</span></li>
                            <li>✔ <span className='pl-1'>Unlimited templates</span></li>
                            <li>✔ <span className='pl-1'>Priority support</span></li>
                            <li>✔ <span className='pl-1'>Unlimited projects</span></li>
                            <li>✔ <span className='pl-1'>Cloud sync</span></li>
                            <li>✔ <span className='pl-1'>Advanced analytics</span></li>
                        </ul>
                    </div>

                    <button className="bg-white text-indigo-700 py-2.5 rounded-lg w-full mt-4 font-semibold hover:bg-gray-100 transition duration-150">
                        Start Pro Trial
                    </button>
                </div>

                {/* Enterprise */}
                <div className="bg-white p-6 rounded-xl shadow flex flex-col justify-between">
                    <div>
                        <h3 className="font-bold text-xl">Enterprise</h3>
                        <p className="text-gray-500 mb-6">For teams and businesses</p>
                        <p className="text-3xl font-bold my-3">$99<span className="text-sm font-normal text-gray-400">/month</span></p>
                        <ul className="text-sm text-gray-600 mb-4 space-y-1.5 text-left ml-6 list-none">
                            <li>✔ <span className='pl-1'>Everything in Pro</span></li>
                            <li>✔ <span className='pl-1'>Team collaboration</span></li>
                            <li>✔ <span className='pl-1'>Custom integrations</span></li>
                            <li>✔ <span className='pl-1'>Dedicated support</span></li>
                            <li>✔ <span className='pl-1'>SLA guarantee</span></li>
                            <li>✔ <span className='pl-1'>Custom branding</span></li>
                        </ul>
                    </div>
                    <button className="bg-blue-600 text-white py-2.5 rounded-lg w-full mt-4 hover:bg-blue-700 transition duration-150">
                        Contact Sales
                    </button>
                </div>

            </div>
        </div>
    );
}