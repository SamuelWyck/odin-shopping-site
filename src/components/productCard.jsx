import "../styles/productCard.css";


function ProductCard({data, counterRef, cartRef}) {
    const title = data.title;
    const price = data.price;
    const description = data.description;
    const image = data.image;


    function clickHandler() {
        cartRef.current.addItem(data);
        counterRef.current.update(1);
    };


    return (
    <div className="product-card">
        <div className="product-img-wrapper">
            <img src={image} alt={title} />
        </div>
        <p className="product-title">{title}</p>
        {/* <p className="product-description">{description}</p> */}
        <p className="product-price">{`$${price}`}</p>
        <button onClick={clickHandler}>Add to Cart</button>
    </div>
    );
};



export default ProductCard;