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