import "../styles/errorPage.css";
import { Link } from "react-router-dom";


function ErrorPage() {
    return (
    <>
    <div></div>
    <div className="error-main">
        <p>Oh no! This page doesn't exist!</p>
        <Link to="/">Go back home</Link>
    </div>
    </>
    );
};


export default ErrorPage;