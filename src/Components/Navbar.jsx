const Navbar = ({ cart }) => {
    return (
        <div className="navbar bg-white px-6 shadow">

            <div className="flex-1">
                <h1 className="text-4xl font-extrabold text-indigo-600">DigiTools</h1>
            </div>

            <div className="flex-1 hidden md:flex justify-center">
                <ul className="flex gap-6 text-gray-600 font-medium">
                    <li>Products</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Testimonials</li>
                    <li>FAQ</li>
                </ul>
            </div>

            <div className="flex-1 flex justify-end items-center gap-4">
                <div className="relative">
                    <img className="w-6 h-6" src="/src/assets/shopping-cart.png" alt="" />
                    <span className="absolute -top-2 -right-2 text-xs w-5 h-5 flex items-center justify-center rounded-full bg-red-500 text-white">
                        {cart.length}
                    </span>
                </div>

                <button className="text-gray-600 btn btn-ghost">Login</button>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-full btn btn-primary">
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default Navbar;