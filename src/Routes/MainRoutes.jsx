import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "../components";
import { Inicio, Error, ItemListContainer, OfferItemListContainer, ItemDetail, ItemDetailsOffer, FilterItems, CartComponent } from "../components";
import  {Cart}  from "../components/Carrito/Cart";


export const MainRoutes = () => {

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Inicio />}/>
                <Route exact path="/catalogo" element={<ItemListContainer />}/>
                <Route exact path="/ofertas" element={<OfferItemListContainer />}/>
                <Route exact path="/cart" element={<Cart />}/>
                <Route exact path="/catalogo/category/:productCategory" element={<FilterItems />}/>
                <Route exact path="/item/:productId" element={<ItemDetail />}/>
                <Route exact path="/ofertas/:productId" element={<ItemDetailsOffer />}/>
                <Route path="*" element={<Error />}/>

            </Routes>
        </Router>
    )
};
