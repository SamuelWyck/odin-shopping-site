import App from "./App.jsx";
import HomePage from "./components/homepage.jsx";


const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {index: true, element: <HomePage />},
        ]
    },
];


export default routes;