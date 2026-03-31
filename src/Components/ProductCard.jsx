export default function ProductCard({ product, addToCart, cart }) {

    // check product already added or not
    const isAdded = cart.find(item => item.id === product.id);

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

            {/* features */}
            <ul className="text-sm mt-2 mb-3">
                {product.features.map((f, i) => (
                    <li key={i}>✔ {f}</li>
                ))}
            </ul>

            {/*  Button logic */}
            <button
                disabled={isAdded}
                onClick={() => addToCart(product)}
                className={`w-full rounded-lg 
                ${isAdded ? "btn btn-success " : "btn btn-primary"}`}
            >
                {isAdded ? "Add To Cart" : "Buy Now"}
            </button>

        </div>
    );
}