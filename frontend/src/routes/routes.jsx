import { BrowserRouter, Routes as Router, Route } from "react-router-dom";
import Employees from '../pages/Employees';

function Routes() {
    return (
        <BrowserRouter>
        <Router>
            <Route path="/" element={<Employees/>}/>
        </Router>
        </BrowserRouter>
    )
}

export default Routes;