import React from "react";
import { MainRoutes } from "./Routes/MainRoutes";
import { CartProvider } from "./context/cartContext";

export function App() {

    return (
        <CartProvider>
            <MainRoutes />
        </CartProvider>
    );
}
