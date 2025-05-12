import App from "./App.jsx";
import HomePage from "./components/homepage.jsx";
import ErrorPage from "./components/errorPage.jsx";


const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {index: true, element: <HomePage />},
        ]
    },
];


export default routes;