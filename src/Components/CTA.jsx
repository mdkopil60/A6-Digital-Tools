export default function CTA() {
    return (
        <div className="bg-indigo-600 from-purple-600 to-indigo-700 text-white text-center py-16">
            <h2 className="text-3xl font-bold mb-3">
                Ready To Transform Your Workflow?
            </h2>

            <p className="text-white mb-5">
                Join thousands of professionals who are already using Digitools to work smarter. <br />
                Start your free trial today.
            </p>

            <div className="flex justify-center gap-4">
                <button className="bg-white text-indigo-600 btn btn-primary rounded-full">
                    Explore Products
                </button>
                <button className="btn btn-outline rounded-full">
                    View Pricing
                </button>
            </div>
             <p className="text-white mb-5">14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
}