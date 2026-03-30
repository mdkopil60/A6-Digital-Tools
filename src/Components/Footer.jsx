export default function Footer() {
    return (
        <footer className="bg-black text-gray-400 py-10">
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-6">

                <div>
                    <h2 className="text-white text-xl font-bold mb-2">
                        DigiTools
                    </h2>
                    <p>
                        Premium digital tools for creators and professionals.
                    </p>
                </div>

                <div>
                    <h3 className="text-white mb-2">Product</h3>
                    <ul>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Templates</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white mb-2">Company</h3>
                    <ul>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Blog</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white mb-2">Resources</h3>
                    <ul>
                        <li>Docs</li>
                        <li>Support</li>
                        <li>Contact</li>
                    </ul>
                </div>

            </div>

            <p className="text-center mt-6 text-sm">
                © 2026 DigiTools. All rights reserved.
            </p>
        </footer>
    );
}