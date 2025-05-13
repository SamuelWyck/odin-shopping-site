import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import ProductCard from "./productCard.jsx";
import SideMenu from "./sideMenu.jsx";
import "../styles/shopPage.css";


function ShopPage() {
    const context = useOutletContext();
    const [category, setCategory] = useState("All categories");
    const [products, setProducts] = useState(createProductList(filterProducts(context)));


    function createProductList(dataList) {
        const productElements = [];
        for (let productData of dataList) {
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


    function getCategoryList() {
        const categorySet = new Set();
        for (let product of context.products) {
            categorySet.add(product.category);
        }
        return Array.from(categorySet);
    };


    function filterProducts(context, category="All categories") {
        const filteredArray = [];
        const targetCategory = category.toLowerCase();
        for (let product of context.products) {
            if (category === "All categories" || product.category === targetCategory) {
                filteredArray.push(product);
            }
        }
        return filteredArray;
    };


    function categoryCallback(category) {
        setCategory(category);
        setProducts(createProductList(filterProducts(context, category)));
    };


    return (
    <main className="shopping-main">
        <p className="shopping-title">Product Line</p>
        <p className="category-title">{category}</p>
        <SideMenu categoryList={getCategoryList()} choiceHandler={categoryCallback} />
        <div className="shopping-products-list">
            {products}
        </div>
    </main>
    );
};


export default ShopPage;