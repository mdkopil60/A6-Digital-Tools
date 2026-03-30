1 Navber.jsx 
import React from 'react';

const Navbar = (cart) => {
    return (
        <div className="navbar bg-white px-6 shadow">

            {/* LEFT */}
            <div className="flex-1">
                <h1 className="text-xl font-bold text-indigo-600">DigiTools</h1>
            </div>

            {/* Menu */}
            <div className="flex-1 hidden md:flex justify-center">
                <ul className="flex gap-6 text-gray-600 font-medium">
                    <li>Products</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Testimonials</li>
                    <li>FAQ</li>
                </ul>
            </div>

            {/* RIGHT */}
            <div className="flex-1 flex justify-end items-center gap-4">

                {/* Cart Icon with Badge */}
                <div className="relative cursor-pointer">
                    {/* <img src="/src/assets/shopping-cart.png" alt="" /> */}
                    <span className="absolute -top-2 -right-2 text-black text-xs w-5 h-5 flex items-center justify-center rounded-full">
                        {cart.length}
                    </span>
                </div>

                <button className="text-gray-600">Login</button>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-full">Get Started</button>
            </div>
        </div>
    );
};

export default Navbar;

2 Banner.jsx
import React from 'react';

const Banner = () => {
    return (
        <div className="grid md:grid-cols-2 items-center px-6 py-12 bg-gray-50">

            {/* Left */}
            <div>
                <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm">
                    New: AI-Powered Tools Available
                </span>

                <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
                    Supercharge Your <br /> Digital Workflow
                </h1>

                <p className="text-gray-600 mt-4">
                    Access premium AI tools, design assets, templates, and productivity
                    software—all in one place. <br />Start creating faster today.
                    Explore Products
                </p>

                <div className="mt-6 flex gap-4">
                    <button className="btn btn-primary rounded-full">Explore Products</button>

                    <button className="btn btn-wide rounded-full">
                        ▶ Watch Demo
                    </button>
                </div>
            </div>

            {/* Right */}
            <div className="mt-8 md:mt-0 flex justify-center">
                <img
                    src="/src/assets/banner.png"
                    alt="AI"
                    className="rounded-lg"
                />
            </div>
        </div>
    );
};



export default Banner;

3 Stats.jsx 
const Stats = () => {
    return (
        <div className="bg-indigo-600 from-indigo-700 to-purple-600 text-white py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-6">

                <div>
                    <h2 className="text-4xl font-bold">50K+</h2>
                    <p className="text-gray-200">Active Users</p>
                </div>

                <div>
                    <h2 className="text-4xl font-bold">200+</h2>
                    <p className="text-gray-200">Premium Tools</p>
                </div>

                <div>
                    <h2 className="text-4xl font-bold">4.9</h2>
                    <p className="text-gray-200">Rating</p>
                </div>

            </div>
        </div>
    );
};

export default Stats;
4 Steps.jsx
export default function Steps() {
    return (
        <div className="text-center my-16">
            <h2 className="text-3xl font-bold mb-2">
                Get Started In 3 Steps
            </h2>
            <p className="text-gray-500 mb-10">
               Start using premium digital tools in minutes, not hours.
            </p>

            <div className="grid md:grid-cols-3 gap-6 px-5">

                <div className="p-6 shadow rounded-xl">
                    <div> <img src="/src/assets/user.png" alt="" /> </div>
                    <h3 className="font-bold">Create Account</h3>
                    <p className="text-sm text-gray-500">
                        Sign up for free in seconds. No credit card <br />required to get started.
                    </p>
                </div>

                <div className="p-6 shadow rounded-xl">
                    <div className="text-3xl mb-3"><img src="/src/assets/package.png" alt="" /></div>
                    <h3 className="font-bold">Choose Products</h3>
                    <p className="text-sm text-gray-500">
                        Browse our catalog and select the tools <br />that fit your needs.
                    </p>
                </div>

                <div className="p-6 shadow rounded-xl">
                    <div className="text-3xl mb-3"><img src="/src/assets/rocket.png" alt="" /></div>
                    <h3 className="font-bold">Start Creating</h3>
                    <p className="text-sm text-gray-500">
                       Download and start using your premium <br />tools immediately.
                    </p>
                </div>

            </div>
        </div>
    );
}
5 Products.jsx
import products from "../data/products";
import ProductCard from "./ProductCard";

export default function Products({ addToCart }) {
    return (
        <div className="my-16 px-5">

            <h2 className="text-3xl font-bold text-center">
                Premium Digital Tools
            </h2>
            <p className="text-center text-gray-500 mb-8">

                Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                    />
                ))}
            </div>

        </div>
    );
}
6 ProductCard.jsx
export default function ProductCard({ product, addToCart }) {
    return (
        <div className="border p-5 rounded-xl shadow hover:shadow-lg transition">

            <img src={product.icon} className="h-12 mb-3" />

            <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded">
                {product.tag}
            </span>

            <h2 className="font-bold mt-2">{product.name}</h2>

            <p className="text-sm text-gray-500 mb-2">
                {product.description}
            </p>

            <h3 className="font-bold mb-2">
                ${product.price}/{product.period}
            </h3>

            <ul className="text-sm text-gray-600 mb-3">
                {product.features.map((f, i) => (
                    <li key={i}>✔ {f}</li>
                ))}
            </ul>

            <button
                onClick={() => addToCart(product)}
                className="bg-purple-600 text-white w-full py-2 rounded-lg">
                Buy Now
            </button>
        </div>
    );
}
7 Pricing.jsx
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
8 CTA.jsx
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
9 Cart.jsx
// import { toast } from "react-toastify";

const Cart = ({ cart, setCart }) => {
    const handleRemove = (id) => {
        setCart(cart.filter((item) => item.id !== id));
        // toast.error("Removed!");
    };

    const handleCheckout = () => {
        setCart([]);
        // toast.success("Checkout done!");
    };

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    if (cart.length === 0) {
        return <p className="text-center">Cart is empty</p>;
    }

    return (
        <div className="p-6">
            {cart.map((item) => (
                <div key={item.id} className="flex justify-between">
                    <p>{item.name}</p>
                    <button onClick={() => handleRemove(item.id)}>Remove</button>
                </div>
            ))}

            <h2>Total: ${total}</h2>

            <button onClick={handleCheckout} className="btn btn-success mt-4">
                Proceed to Checkout
            </button>
        </div>
    );
};

export default Cart;
10 Footer.jsx
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
11 App.jsx
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

function App() {
    const [view, setView] = useState("products");
    const [cart, setCart] = useState([]);

    return (
        <Suspense fallback="Loading...">

            <Navbar cart={cart} />
            <Banner />
            <Stats />
            <Steps />
            

            {/* Toggle Button */}
            <div className="flex justify-center gap-4 my-6">
                <button onClick={() => setView("products")} className="btn">
                    Products
                </button>
                <button onClick={() => setView("cart")} className="btn">
                    Cart
                </button>
            </div>

            {/* Conditional Render */}
            {view === "products" ? (
                <Products
                    products={productsData}
                    cart={cart}
                    setCart={setCart}
                />
            ) : (
                <Cart
                    cart={cart}
                    setCart={setCart}
                />
            )}
            <Pricing />
            <CTA />
            <Footer />

        </Suspense>
    )
}

export default App;