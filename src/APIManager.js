

class APIManager {
    constructor() {
        this.baseUrl = "https://fakestoreapi.com";
        this.productEndPoint = "/products";
        this.userEndPoint = "/users";
        this.cartEndPoint = "/carts";
        this.authEndPoint = "/login";
    };


    async #makeRequst(endPoint, options) {
        const url = `${this.baseUrl}${endPoint}`;
        
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error("An error occurred!");
            }
            const jsonResponse = await response.json();
            return jsonResponse;
        } catch {
            return "An error occurred!";
        }
    };


    async getProducts() {
        const options = {
            mode: "cors",
        };
        const products = await this.#makeRequst(this.productEndPoint, options);
        return products;
    };
};


export default APIManager;