import { Route, Routes } from 'react-router-dom';
import './App.css';

import { Home } from './components/Home';
import { Login } from './components/Login';
import { Mynav } from './components/Mynav';
import Products from './components/Products';
import ProductDetiles from './components/ProductDetiles';

import ProductForm from './components/ProductForm';

function App() {
  return (
    <div>
      <Mynav/>
     
      
     <Routes>
     <Route path='products' element={<Products />} />
        <Route path='products/:id' element={<ProductDetiles />} />
        <Route path='products/:id/edit' element={<ProductForm />} />
      <Route path='' element={<Home/>}/>
      <Route path='Home' element={<Home/>}/>
      
      </Routes> 
    </div>

  )}
  export default App;
