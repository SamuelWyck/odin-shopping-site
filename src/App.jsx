import './App.css';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import { Link, Outlet } from 'react-router-dom';
import cartImg from "./assets/cart.svg";
import { createRef, useEffect, useRef, useState } from 'react';
import Cart from './cart.js';
import Counter from './components/counter.jsx';
import APIManager from './APIManager.js';


function App() {
    const cartRef = useRef(new Cart);
    const [products, setProducts] = useState([]);
    const [renderKey, setRenderKey] = useState(0);


    useEffect(function() {
        const api = new APIManager();
        api.getProducts().then(function(res) {
            setProducts(res);
            setRenderKey(r => r + 1)
        });
    }, []);
    
    const counterRef = createRef();
    const counter = <Counter ref={counterRef} count={cartRef.current.getItemCount()} />


    return (
        <>
        <Header>
            <Link to="/">Home</Link>
            <Link to="shop">Shop</Link>
            <Link to="cart">
            <img src={cartImg} alt="cart"/>
            {counter}
            </Link>
        </Header>
        <Outlet key={renderKey} context={{products, cartRef, counterRef}}/>
        <Footer></Footer>
        </>
    );
};


export default App;