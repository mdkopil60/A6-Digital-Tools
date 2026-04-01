
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white px-10 py-16">

            {/* Top Section */}
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">              
                <div>
                    <h2 className="text-2xl font-bold mb-3">DigiTools</h2>
                    <p className="text-gray-400 text-sm">
                        Premium digital tools for creators, professionals, and businesses.
                        Work smarter with our suite of powerful tools.
                    </p>
                </div>

                {/* Product */}
                <div>
                    <h3 className="font-semibold mb-3">Product</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li className="hover:text-white cursor-pointer">Features</li>
                        <li className="hover:text-white cursor-pointer">Pricing</li>
                        <li className="hover:text-white cursor-pointer">Templates</li>
                        <li className="hover:text-white cursor-pointer">Integrations</li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h3 className="font-semibold mb-3">Company</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li className="hover:text-white cursor-pointer">About</li>
                        <li className="hover:text-white cursor-pointer">Blog</li>
                        <li className="hover:text-white cursor-pointer">Careers</li>
                        <li className="hover:text-white cursor-pointer">Press</li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="font-semibold mb-3">Resources</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li className="hover:text-white cursor-pointer">Documentation</li>
                        <li className="hover:text-white cursor-pointer">Help Center</li>
                        <li className="hover:text-white cursor-pointer">Community</li>
                        <li className="hover:text-white cursor-pointer">Contact</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-3">Social Links</h3>
                    <div className="flex gap-3">
                        <div className="bg-white w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:scale-110 transition shadow-md">
                            <img src="./facebook.png" alt="fb" className="w-4 h-4" />
                        </div>
                        <div className="bg-white w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:scale-110 transition shadow-md">
                            <img src="./linkedin.png" alt="tw" className="w-4 h-4" />
                        </div>
                        <div className="bg-white w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:scale-110 transition shadow-md">
                            <img src="./spotify.png" alt="gh" className="w-4 h-4" />
                        </div>
                    </div>
                </div>
            </div>
         
            <div className="border-t border-gray-700 my-8"></div>
         
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
                <p>© 2026 DigiTools. All rights reserved.</p>

                <div className="flex gap-6 mt-4 md:mt-0">
                    <span className="hover:text-white cursor-pointer">Privacy Policy</span>
                    <span className="hover:text-white cursor-pointer">Terms of Service</span>
                    <span className="hover:text-white cursor-pointer">Cookies</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;