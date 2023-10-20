import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./scene/Dashboard";
import Charges from "./scene/Charges";
import BillsPayment from "./scene/BillsPayment";
import Invoice from "./scene/Invoice";
import Topup from "./scene/Topup";
import UserManagement from "./scene/UserManagement";
import HomeIndex from "./scene/HomeIndex";


function App() {
  return (
    <Router>
      <Routes>
        <Route  element={<Home />}>
        <Route path="/" element={<HomeIndex />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/charges" element={<Charges />} />
        <Route path="/billspayment" element={<BillsPayment />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/topup" element={<Topup />} />
        <Route path="/usermanagement" element={<UserManagement />} />
        </Route> 
      </Routes>
    </Router>
  );
}

export default App;
