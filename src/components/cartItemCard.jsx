import { useState } from "react";
import "../styles/cartItemCard.css";


function CartItemCard({data, cartRef, counterRef}) {
    const [quantity, setQuantity] = useState(data.quantity);


    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    });

    const price = formatter.format(data.price * quantity);


    function decreaseQuantity() {
        cartRef.current.removeItem(data.id);
        setQuantity(quantity - 1);
        counterRef.current.update(-1);
    };


    function increaseQuantity() {
        const newItem = {...data};
        delete newItem.quantity;
        cartRef.current.addItem(newItem);
        counterRef.current.update(1);
        setQuantity(quantity + 1);
    };


    if (quantity <= 0) {
        return null;
    }

    return (
    <div className="cart-item-card">
        <div className="cart-item-img-wrapper">
            <img src={data.image} alt={data.title} />
        </div>
        <div className="card-item-info">
            <p>{data.title}</p>
            <p className="cart-item-price">Price: {price}</p>
            <div className="quantity-control">
                <p>Quantity</p>
                <button onClick={decreaseQuantity}>-</button>
                <span>{quantity}</span>
                <button onClick={increaseQuantity}>+</button>
            </div>
        </div>
    </div>
    );
};


export default CartItemCard;