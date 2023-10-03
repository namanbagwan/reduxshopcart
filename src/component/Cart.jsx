import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteCart } from "../redux/action"; // Import your action for removing items

function Cart() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.handleCart);

    // Calculate the total price
    const totalPrice = cartItems.reduce((total, product) => total + product.price * product.qty, 0);

    const handleRemoveItem = (productId) => {
        dispatch(deleteCart(productId)); // Dispatch the action to remove the item
    };

    return (
        <div className="container mt-4">
            <div className="row">
                {cartItems.map((product) => (
                    <div className="col-md-3 mb-4" key={product.id}>
                        <div className="card h-100 text-center p-4">
                            <img
                                src={product.image}
                                className="card-img-top img-fluid"
                                alt={product.title}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text lead fw-bold">${product.price}</p>
                                <p className="card-text">Quantity: {product.qty}</p>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleRemoveItem(product.id)}
                                >
                                    Remove Item
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-4">
                <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
            </div>
        </div>
    );
}

export default Cart;
