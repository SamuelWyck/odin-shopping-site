import "../styles/homePage.css";


function HomePage() {

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
        </section>
    </main>
    );
};



export default HomePage;