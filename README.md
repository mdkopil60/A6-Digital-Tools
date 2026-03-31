Project Name: Digital Tools Store

Description:
This is a React-based digital product buying website.

Technologies:
- React
- Tailwind CSS
- DaisyUI

Features:
1. Add to cart
2. Remove from cart
3. Checkout system

app.jsx
import { Suspense, useState } from 'react'
import './App.css'
import productsData from "./data/products.json";
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Products from './Components/Products';
import Cart from './Components/Cart';
import Stats from './Components/Stats';
import Steps from './Components/Steps';
import Pricing from './Components/Pricing';
import CTA from './Components/CTA';
import Footer from './Components/Footer';
import { toast, ToastContainer } from 'react-toastify';

function App() {
    const [view, setView] = useState("products");
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const exists = cart.find(item => item.id === product.id);
        if (exists) {
            toast.error("Already Added !");
            return;
        }
        setCart([...cart, product]);
        toast.success("Added to Cart !")
    };

    return (
        <Suspense fallback="Loading...">

            <Navbar cart={cart} />
            <Banner />
            <Stats />
            <Steps />
            <div className="flex justify-center gap-4 my-6">
                <button onClick={() => setView("products")} className="btn btn-soft btn-primary rounded-full">
                    Products
                </button>
                <button onClick={() => setView("cart")} className="btn btn-soft btn-primary rounded-full">
                    Cart ({cart.length})
                </button>
            </div>
            {view === "products" ? (
                <>
                    <Products products={productsData} addToCart={addToCart} cart={cart} />
                    <Pricing />
                    <CTA />
                    <Footer />
                </>
            ) : (
                <Cart cart={cart} setCart={setCart} />
            )}



            <ToastContainer />
        </Suspense>



    );

}

export default App;

Banner.jsx
const Banner = () => {
    return (
        <div className="grid md:grid-cols-2 items-center px-6 py-12 bg-gray-50">

            <div>
                <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm">
                    New: AI-Powered Tools Available
                </span>

                <h1 className="text-4xl md:text-5xl font-bold mt-4">
                    Supercharge Your <br /> Digital Workflow
                </h1>

                <p className="text-gray-600 mt-4">
                    Access premium AI tools, design assets, templates, and productivity
                    software—all in one place. <br /> Start creating faster today.
                    Explore Products
                </p>

                <div className="mt-6 flex gap-4">
                    <button className="btn btn-primary rounded-full">Explore</button>
                    <button className="btn rounded-full text-indigo-600">Watch Demo</button>
                </div>
            </div>

            <div className="mt-8 md:mt-0 flex justify-center">
                <img src="/src/assets/banner.png" className="rounded-lg" />
            </div>
        </div>
    );
};

export default Banner;
Cart.jsx
import { toast } from "react-toastify";

const Cart = ({ cart, setCart }) => {

    const handleRemove = (id) => {
        setCart(cart.filter(item => item.id !== id));
        toast.info("Remove from Cart")
    };

    const handleCheckout = () => {
        setCart([]);
        toast.success("Checkout Successful")
    };

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    if (cart.length === 0) {
        return (
            <div className="mt-10 text-center text-gray-500">
                <img className="mx-auto w-60 h-60" src="/src/assets/cart-arrow-down.png" alt="" />
                <h3 className="text-center text-2xl">Your cart is empty</h3>
            </div>
        );
    }

    return (
        <div className="mt-10 max-w-4xl mx-auto">

            {/* Card */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200">

                {/* Title */}
                <h2 className="text-lg font-semibold mb-6 text-gray-800">
                    Your Cart
                </h2>

                {/* Items */}
                <div className="space-y-4">
                    {cart.map(item => (
                        <div
                            key={item.id}
                            className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-xl"
                        >
                            {/* Left */}
                            <div className="flex items-center gap-3">

                                {/* JSON icon */}
                                <img
                                    src={item.icon}
                                    alt={item.name}
                                    className="w-10 h-10 object-contain"
                                />

                                <div>
                                    <p className="font-medium text-gray-800">
                                        {item.name}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        ${item.price}
                                    </p>
                                </div>
                            </div>

                            {/* Right */}
                            <button
                                onClick={() => handleRemove(item.id)}
                                className="text-red-500 btn btn-ghost"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>

                {/* Total */}
                <div className="flex justify-between items-center mt-6 text-sm text-gray-600">
                    <span className="font-bold">Total:</span>
                    <span className="font-bold text-black text-lg">
                        ${total}
                    </span>
                </div>

                {/* Button */}
                <button
                    onClick={handleCheckout}
                    className="mt-6 w-full bg-indigo-600 from-indigo-600 to-purple-600 text-white py-3 rounded-full font-medium hover:opacity-90 transition"
                >
                    Proceed To Checkout
                </button>

            </div>
        </div>
    );
};

export default Cart;
CTA.jsx
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
Navber.jsx
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
pricing.jsx
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
ProductCard.jsx
export default function ProductCard({ product, addToCart, cart }) {

    const isAdded = cart.some(item => item.id === product.id);

    return (
        <div className="border p-5 rounded-xl shadow hover:shadow-lg transition duration-300 bg-white">

            <div className="flex items-center justify-between mb-3">
                <img src={product.icon} alt="icon" className="h-12" />

                <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded">
                    {product.tag}
                </span>
            </div>

            {/* Title */}
            <h2 className="font-bold text-lg">{product.name}</h2>

            {/* Description */}
            <p className="text-sm text-gray-500 mt-1">
                {product.description}
            </p>

            {/* Price */}
            <h3 className="font-bold mt-3">
                ${product.price}/{product.period}
            </h3>

            {/* Features */}
            <ul className="text-sm mt-2 mb-4 space-y-1">
                {product.features.map((f, i) => (
                    <li key={i}>✔ {f}</li>
                ))}
            </ul>

            <button
                onClick={() => {
                    if (!isAdded) {
                        addToCart(product);
                    }
                }}
                className={`w-full rounded-lg transition duration-300 
                ${isAdded
                        ? "btn btn-success hover:scale-105"
                        : "btn btn-primary hover:scale-105"
                    }`}
            >
                {isAdded ? "Add To Cart" : "Buy Now"}
            </button>

        </div>
    );
}
Products
import ProductCard from "./ProductCard";

export default function Products({ products, addToCart, cart }) {
    return (
        <div className="my-16 px-5">

            <h2 className="text-4xl font-bold text-center">
                Premium Digital Tools
            </h2>
            <p className="text-gray-500 mb-10 text-center">Choose from our curated collection of premium digital products designed <br />
                to boost your productivity and creativity.</p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                        cart={cart}
                    />
                ))}
            </div>

        </div>
    );
}