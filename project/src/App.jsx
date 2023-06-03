import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Products } from './components/Products';
import { ProductDetails } from './components/ProductDetiles';
import { ProductForm } from './components/ProductForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='products' element={<Products />} />
        <Route path='products/:id' element={<ProductDetails />} />
        <Route path='products/:id/edit' element={<ProductForm />} />
      </Routes>    </div>
  );
}

export default App;
