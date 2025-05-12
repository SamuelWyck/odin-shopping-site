import App from "./App.jsx";
import HomePage from "./components/homepage.jsx";
import ErrorPage from "./components/errorPage.jsx";


const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {index: true, element: <HomePage />},
            {path: "*", element: <ErrorPage />},
        ]
    },
];


export default routes;