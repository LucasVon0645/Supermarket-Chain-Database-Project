import { BrowserRouter, Routes as Router, Route } from "react-router-dom";
import Employees from '../pages/Employees';
import Equipments from "../pages/Equipments";
import General from "../pages/General";
import Orders from "../pages/Orders";
import Products from "../pages/Products";
import Providers from "../pages/Providers";

function Routes() {
    return (
        <BrowserRouter>
        <Router>
            <Route path="/" element={<General/>}/>
            <Route path="/employees" element={<Employees/>}/>
            <Route path="/orders" element={<Orders/>}/>
            <Route path="/providers" element={<Providers/>}/>
            <Route path="/equipments" element={<Equipments/>}/>
            <Route path="/products" element={<Products/>}/>
        </Router>
        </BrowserRouter>
    )
}

export default Routes;