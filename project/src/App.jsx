import { Route, Routes } from 'react-router-dom';
import './App.css';
import Products from './components/Products';
import ProductDetiles from './components/ProductDetiles';
import { Navbar } from 'react-bootstrap';
import ProductForm from './components/ProductForm';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='products' element={<Products />} />
        <Route path='products/:id' element={<ProductDetiles />} />
        <Route path='products/:id/edit' element={<ProductForm />} />

      </Routes>    </div>
  );
}

export default App;
