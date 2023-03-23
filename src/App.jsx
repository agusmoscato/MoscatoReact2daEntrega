import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Inicio, Error, ItemListContainer, OfferItemListContainer, ItemDetail } from "./components";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Inicio />,
        errorElement: <Error />
    },
    {
        path: "/Catalogo",
        element: <ItemListContainer />,
    },
    {
        path: "/Ofertas",
        element: <OfferItemListContainer />,
    },
    /* {
        path: "/Catalogo/category/:id",
        element: <ItemListContainer />
    }, */
    {
        path: "/item/:productId",
        element: <ItemDetail />
    }


]);

export function App() {

    return (
        <React.Fragment>
            <RouterProvider router={router} />
        </React.Fragment>
    );
}
