import "../styles/homePage.css";
import { useOutletContext } from "react-router-dom";
import ProductCard from "./productCard.jsx";



function HomePage() {
    const context = useOutletContext();
    if (context.products.length === 0) {
        return null
    }


    const topProducts = [];
    for (let i = 0; i < 3; i += 1) {
        const productData = context.products[i];
        const productCard = <ProductCard 
            data={productData}
            counterRef={context.counterRef}
            cartRef={context.cartRef}
            key={productData.id}
        />
        topProducts.push(productCard);
    }


    return (
    <main className="homepage-main">
        <section className="hero-section">
            <div className="hero-img"></div>
            <div className="banner-text">
                <p>shopBay</p>
                <p>shop with confidence</p>
            </div>
        </section>
        <section className="statement-section">
            <p>Mission Statement</p>
            <p>Our passion is to offer quality products at an affordable price while using minimal child labor. We do this by partnering with ethical suppliers like AfricanWarlordOutlet.</p>
        </section>
        <section className="top-products-section">
            <p>Top Products</p>
            <div className="top-products-list">
                {topProducts}
            </div>
        </section>
        <section className="quote-section">
            <p>"I have personally made sure that all of our products are legally and ethically sourced. Those 'Made in Iran' labels were a manufacturing error. On a unrelated note, the child labor allegations against us have been dropped due to lack of proof."</p>
            <p><i>-Truste Mee Sr. CEO of shopBay</i></p>
        </section>
    </main>
    );
};



export default HomePage;