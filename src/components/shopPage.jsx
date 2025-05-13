import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import ProductCard from "./productCard.jsx";
import "../styles/shopPage.css";


function ShopPage() {
    const context = useOutletContext();
    console.log(context.products)
    const [products, setProducts] = useState(createProductList(context));


    function createProductList(context) {
        const productElements = [];
        for (let productData of context.products) {
            const productCard = <ProductCard 
                data={productData}
                counterRef={context.counterRef}
                cartRef={context.cartRef}
                key={productData.id}
            />
            productElements.push(productCard);
        }
        return productElements;
    };


    return (
    <main className="shopping-main">
        <p className="shopping-title">Product Line</p>
        <div className="shopping-products-list">
            {products}
        </div>
    </main>
    );
};


export default ShopPage;