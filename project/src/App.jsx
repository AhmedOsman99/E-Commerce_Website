import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { Mynav } from "./components/Mynav";
import { Products } from "./components/Products";
import { ProductDetails } from "./components/ProductDetiles";
import { ProductForm } from "./components/ProductForm";
import { Login } from "./components/Login";
import { useSelector } from "react-redux";
import { Registeration } from "./components/Registeration";
import { MyCart } from "./components/MyCart";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Aboutus } from "./components/Aboutus";
import { Footer } from "./components/Footer";
import { Notfound } from "./components/Notfound";

function App() {
  const user = useSelector((state) => state.users.user);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    if (!user && pathname !== "/Home" && pathname !== "/register")
      navigate("/login");
    if (user && (pathname === "/login" || pathname === "/register"))
      navigate("/Home");
  }, [pathname]);
  return (
    <div className="App">
      <Mynav />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="products/:id/edit" element={<ProductForm />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Registeration />} />
        <Route path="MyCart" element={<MyCart />} />
        <Route path="aboutus" element={<Aboutus />} />
        <Route path="*" element={<Notfound />} />

      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
