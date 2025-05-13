import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import CartItemCard from "./cartItemCard.jsx";
import "../styles/cartPage.css";
import { useState } from "react";


function CartPage() {
    const context = useOutletContext();
    const cart = context.cartRef.current;
    const [totalPrice, setTotalPrice] = useState(getTotalPrice());


    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    });


    function getTotalPrice() {
        let price = 0;
        for (let item of cart.getCart()) {
            price += item.price;
        }
        return price;
    };
    

    function getCheckoutCart() {
        const checkoutCart = {};
        for (let item of cart.getCart()) {
            if (item.id in checkoutCart) {
                const cartItem = checkoutCart[item.id];
                cartItem.quantity += 1;
            } else {
                checkoutCart[item.id] = {...item, quantity: 1};
            }
        }
        return Object.values(checkoutCart);
    };


    function getItemCards(data) {
        const elementList = [];
        for (let item of data) {
            const card = <CartItemCard 
                data={item}
                key={item.id}
                cartRef={context.cartRef}
                counterRef={context.counterRef}
                setTotalPrice={setTotalPrice}
            />
            elementList.push(card);
        }
        return elementList;
    };


    if (cart.getCart().length === 0) {
        return (
            <main className="cart-empty">
                <p>Your shopBay Cart is empty!</p>
                <Link to="/shop" className="shopping-link">Continue Shopping</Link>
            </main>
        );
    }


    return (
    <main className="cart">
        <div className="checkout-info">
            <p>Shopping Cart</p>
            <p className="total-price">Total: {formatter.format(totalPrice)}</p>
            <button className="checkout-btn">Checkout</button>
        </div>
        <div className="cart-item-list">
            {getItemCards(getCheckoutCart())}
        </div>
    </main>
    );
};


export default CartPage;