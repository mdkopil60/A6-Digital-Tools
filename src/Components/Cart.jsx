const Cart = ({ cart, setCart }) => {

    const handleRemove = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const handleCheckout = () => {
        setCart([]);
    };

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    if (cart.length === 0) {
        return (
            <div className="mt-10 text-center text-gray-500">
                Your cart is empty
                <img className="mx-auto w-60 h-60" src="/src/assets/cart-arrow-down.png" alt="" />
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