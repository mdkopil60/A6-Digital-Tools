export default function CTA() {
    return (
        <div className="bg-indigo-600 from-purple-600 to-indigo-700 text-white text-center py-16">
            <h2 className="text-3xl font-bold mb-3">
                Ready To Transform Your Workflow?
            </h2>

            <p className="mb-6">
                Join thousands of professionals using DigiTools
            </p>

            <div className="flex justify-center gap-4">
                <button className="bg-white text-purple-700 px-5 py-2 rounded-lg">
                    Explore Products
                </button>
                <button className="border px-5 py-2 rounded-lg">
                    View Pricing
                </button>
            </div>
        </div>
    );
}