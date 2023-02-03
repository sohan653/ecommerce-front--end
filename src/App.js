import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminMenu from "./components/AdminMenu";
import Navbar from "./components/navbar";
import AdminRoute from "./components/routes/AdminRoutes";
import PrivateRoute from "./components/routes/PrivateRoute";
import UserMenu from "./components/UserMenu";
import AdminCategory from "./pages/adminPage/Catogory";
import AdminDashBoard from "./pages/adminPage/DashBoard";
import AdminProduct from "./pages/adminPage/Product";
import AdminProducts from "./pages/adminPage/Products";
import Login from "./pages/auth/Login";

import Register from "./pages/auth/Register";
import Shop from "./pages/Shop";
import UserDashBoard from "./pages/userPage/DashBoard";
import UserOrders from "./pages/userPage/Order";
import UserProfile from "./pages/userPage/Profile";


function App() {
  return (
   <BrowserRouter>
    <Navbar></Navbar>
    <ToastContainer autoClose='1000' position="top-center"/>
      <Routes>
        <Route path="/" element={<Shop/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        {/* user dahsboard */}
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<UserMenu/>}>
                <Route path="" element={<UserDashBoard />} />
                <Route path="profile" element={<UserProfile />} />
                <Route path="orders" element={<UserOrders />} />
          </Route>
        </Route>
        {/* admin dashboard */}
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminMenu/>}>
                <Route path="" element={<AdminDashBoard />} />
                <Route path="category" element={<AdminCategory />} />
                <Route path="product" element={<AdminProduct />} />
                <Route path="products" element={<AdminProducts />} />
          </Route>
          
        </Route>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
