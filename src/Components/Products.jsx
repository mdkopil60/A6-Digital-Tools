import ProductCard from "./ProductCard";

export default function Products({ products, addToCart }) {
    return (
        <div className="my-16 px-5">

            <h2 className="text-3xl font-bold text-center">
                Premium Digital Tools
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
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