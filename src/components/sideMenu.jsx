import "../styles/sideMenu.css";
import { useState } from "react";
import leftArrow from "../assets/chevron-left.svg";
import menuImg from "../assets/menu.svg";


function SideMenu({categoryList, choiceHandler}) {
    const [showing, setShowing] = useState(false);
    const [categoryliList, setCategoryliList] = useState(createLiList(categoryList));


    function createLiList(categoryList) {
        categoryList.push("all categories");
        const liList = [];
        for (let category of categoryList) {
            category = capitalize(category);
            const li = <li key={category}>
                <button onClick={categoryClick}>{category}</button>
            </li>
            liList.push(li);
        }
        return liList.reverse();
    };


    function capitalize(word) {
        return word.slice(0, 1).toUpperCase() + word.slice(1);
    };


    function toggleShow() {
        setShowing(!showing);
    };

    function categoryClick(event) {
        const category = event.target.textContent;
        console.log(category)
        choiceHandler(category);
        setShowing(false);
    };


    let button = <button className="show-menu-btn" onClick={toggleShow}>
        <img src={menuImg} alt="sidebar button" />
    </button>;
    if (showing) {
        button = <button className="hide-menu-btn" onClick={toggleShow}>
            <img src={leftArrow} alt="close menu" />
        </button>
    }

    const content = <div className="menu-content">
        <p>Categories</p>
        <ul>
            {categoryliList}
        </ul>
    </div>
    return (
    <div className={(showing) ? "side-menu showing" : "side-menu"}>
        {button}
        {!showing || content}
    </div>
    );
};


export default SideMenu;