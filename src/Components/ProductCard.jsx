export default function ProductCard({ product, addToCart }) {
    return (
        <div className="border p-5 rounded-xl shadow hover:shadow-lg">

            <img src={product.icon} className="h-12 mb-3" />

            <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded">
                {product.tag}
            </span>

            <h2 className="font-bold mt-2">{product.name}</h2>

            <p className="text-sm text-gray-500">
                {product.description}
            </p>

            <h3 className="font-bold">
                ${product.price}/{product.period}
            </h3>

            <button
                onClick={() => addToCart(product)}
                className="bg-purple-600 text-white w-full py-2 mt-3 rounded-lg">
                Buy Now
            </button>
        </div>
    );
}