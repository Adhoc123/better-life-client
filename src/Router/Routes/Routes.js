import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Details from "../../Pages/Details/Details";
import Home from "../../Pages/Home/Home/Home";
import Services from "../../Pages/Home/Services/Services";
import TotalService from "../../Pages/Home/TotalService/TotalService";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/totalservices',
                element: <TotalService></TotalService>
            },
            {
                path: '/services/:id',
                element: <Details></Details>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            }
        ]
    }
])

export default router;