const Cart = ({ cart, setCart }) => {

    const handleRemove = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    if (cart.length === 0) {
        return <h2 className="text-center mt-10">Cart is empty</h2>;   
    }

    return (
        <div className="p-6">

            {cart.map(item => (
                <div key={item.id} className="flex justify-between mb-3">
                    <p>{item.name}</p>
                    <button className="text-red-500 btn" onClick={() => handleRemove(item.id)}>
                        Remove
                    </button>
                </div>
            ))}

            <h2 className="mt-5 font-bold">Total: ${total}</h2>
        </div>
    );
};

export default Cart;