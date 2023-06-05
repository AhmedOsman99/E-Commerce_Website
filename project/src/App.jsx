import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { Mynav } from './components/Mynav';
import { Products } from './components/Products';
import { ProductDetails } from './components/ProductDetiles';
import { ProductForm } from './components/ProductForm';
import { MyCart } from './components/MyCart';

function App() {
  return (
    <div className="App">
      <Mynav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/products/:id/edit" element={<ProductForm />} />
        <Route path="/MyCart" element={<MyCart />} />
      </Routes>
    </div>
  );
}

export default App;