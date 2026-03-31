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