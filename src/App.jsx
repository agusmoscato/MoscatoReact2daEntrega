import React, {useState, Fragment} from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Inicio, Error, ItemListContainer} from "./components";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Inicio />,
        errorElement: <Error/>
    },
    {
        path: "/Catalogo",
        element: <ItemListContainer />,
    },
    /* {
        path: "/Ofertas",
        element: <ofertas />,
    }, */
    
]);

export function App() {

    return (
        <Fragment>
            <RouterProvider router={router} />
        </Fragment>

    );
}