import App from "./App.jsx";
import HomePage from "./components/homepage.jsx";
import ErrorPage from "./components/errorPage.jsx";
import ShopPage from "./components/shopPage.jsx";
import CartPage from "./components/cartPage.jsx";


const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {index: true, element: <HomePage />},
            {path: "*", element: <ErrorPage />},
            {path: "shop", element: <ShopPage />},
            {path: "cart", element: <CartPage />},
        ]
    },
];


export default routes;