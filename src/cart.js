

class Cart {
    #cart = null;
    constructor() {
        this.#cart = [];
    };

    addItem(item) {
        this.#cart.push(item);
    };

    removeItem(itemId) {
        const newCart = [];
        let found = false;

        for (let item of this.#cart) {
            if (!found && item.id === itemId) {
                found = true;
                continue;
            }
            newCart.push(item);
        }
        this.#cart = newCart;
    };

    clearCart() {
        this.#cart = [];
    };

    getCart() {
        return this.#cart;
    };

    getItemCount() {
        return this.#cart.length;
    };
};


export default Cart;