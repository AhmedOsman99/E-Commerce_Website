import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { Mynav } from "./components/Mynav";
import { Products } from "./components/Products";
import { ProductDetails } from "./components/ProductDetiles";
import { ProductForm } from "./components/ProductForm";
import { Login } from "./components/Login";
import { useSelector } from "react-redux";
import { Registeration } from "./components/Registeration";
import { Aboutus } from "./components/Aboutus";
import { Footer } from "./components/Footer";
import { Notfound } from "./components/Notfound";

function App() {
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
        <Route path="aboutus" element={<Aboutus />} />
        <Route path="*" element={<Notfound />} />

      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
