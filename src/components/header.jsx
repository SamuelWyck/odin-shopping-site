import { Children } from "react";
import "../styles/header.css";


function Header({children}) {

    return (
    <header>
        <p className="logo">shopBay</p>
        <nav>
            {children}
        </nav>
    </header>
    );
};


export default Header;