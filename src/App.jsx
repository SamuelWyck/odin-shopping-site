import './App.css';
import Header from './components/header.jsx';
import { Link } from 'react-router-dom';
import cartImg from "./assets/cart.svg";


function App() {

    return (
        <>
        <Header>
            <Link to="/">Home</Link>
            <Link to="shop">Shop</Link>
            <Link to="cart">
            <img src={cartImg} alt="cart"/>
            </Link>
        </Header>
        </>
    );
};


export default App;