import { createBrowserRouter } from "react-router-dom";
import { Bill } from "./Dashboard/Bill";
import { Login } from "./Auth/Login";
import { Dashboard } from "./Dashboard";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        element: <Dashboard />,
        children: [
            {
                path: 'bill',
                element: <Bill />
            }
        ]
    }
])