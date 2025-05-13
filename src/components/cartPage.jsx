import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import CartItemCard from "./cartItemCard.jsx";
import "../styles/cartPage.css";


function CartPage() {
    const context = useOutletContext();
    const cart = context.cartRef.current;
    

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
        <div>
            <p>Shopping Cart</p>
            <button className="checkout-btn">Checkout</button>
        </div>
        <div className="cart-item-list">
            {getItemCards(getCheckoutCart())}
        </div>
    </main>
    );
};


export default CartPage;