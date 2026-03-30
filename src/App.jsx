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

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <Suspense fallback="Loading...">

            <Navbar cart={cart} />
            <Banner />
            <Stats />
            <Steps />

            <div className="flex justify-center gap-4 my-6">
                <button onClick={() => setView("products")} className="btn">
                    Products
                </button>
                <button onClick={() => setView("cart")} className="btn">
                    Cart
                </button>
            </div>

            {view === "products" ? (
                <>
                    <Products products={productsData} addToCart={addToCart} />
                    <Pricing />
                    <CTA />
                    <Footer />
                </>
            ) : (
                <Cart cart={cart} setCart={setCart} />
            )}

        </Suspense>
    );
}

export default App;