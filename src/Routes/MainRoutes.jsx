import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "../components";
import { Inicio, Error, ItemListContainer, ItemDetail, FilterItems, CartComponent } from "../components";
import  {Cart}  from "../components/Carrito/Cart";


export const MainRoutes = () => {

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Inicio />}/>
                <Route exact path="/catalogo" element={<ItemListContainer />}/>
                <Route exact path="/catalogo/:productCategory" element={<FilterItems />}/>
                <Route exact path="/cart" element={<Cart />}/>
                <Route exact path="/item/:productId" element={<ItemDetail />}/>
                <Route path="*" element={<Error />}/>

            </Routes>
        </Router>
    )
};
