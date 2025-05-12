

class Cart {
    #cart = null;
    constructor() {
        this.#cart = [];
    };

    addItem(item) {
        this.#cart.push(item);
    };

    removeItem(item) {
        const newCart = [];
        let found = false;

        for (let oldItem of this.#cart) {
            if (!found && oldItem.id === item.id) {
                found = true;
                continue;
            }
            newCart.push(item);
        }
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