import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Inicio, Error, ItemListContainer, OfferItemListContainer, ItemDetail, ItemDetailsOffer } from "./components";
import { FilterItems } from "./components/ItemListComponent/FilterItems";


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
    {
        path: "/Catalogo/category/:productCategory",
        element: <FilterItems />
    },
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
