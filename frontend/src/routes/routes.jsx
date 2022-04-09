import { BrowserRouter, Routes as Router, Route } from "react-router-dom";
import Employees from '../pages/Employees';
import Orders from "../pages/Orders";

function Routes() {
    return (
        <BrowserRouter>
        <Router>
            <Route path="/employees" element={<Employees/>}/>
            <Route path="/" element={<Orders/>}/>
        </Router>
        </BrowserRouter>
    )
}

export default Routes;