import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Inicio, Error, ItemListContainer, OfferItemListContainer, ItemDetail, ItemDetailsOffer } from "./components";


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
        element: <ItemDetail />,
    },
    {
        path: "/ofertas/:productId",
        element: <ItemDetailsOffer />,
    }


]);

export function App() {

    return (
        <React.Fragment>
            <RouterProvider router={router} />
        </React.Fragment>
    );
}
