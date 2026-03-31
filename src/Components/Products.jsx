import ProductCard from "./ProductCard";

export default function Products({ products, addToCart, cart}) {
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
                        cart = {cart}
                    />
                ))}
            </div>

        </div>
    );
}