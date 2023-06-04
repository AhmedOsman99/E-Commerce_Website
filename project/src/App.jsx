import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { Mynav } from './components/Mynav';
import { Products } from './components/Products';
import { ProductDetails } from './components/ProductDetiles';
import { ProductForm } from './components/ProductForm';
import { Login } from './components/Login';
import { useSelector } from 'react-redux';
import { Registeration } from './components/Registeration';



function App() {
  
  return (

    <div className="App" >
      <Mynav />

      <Routes>
        <Route path='' element={<Home />} />
        <Route path='Home' element={<Home />} />
        <Route path='products' element={<Products />} />
        <Route path='products/:id' element={<ProductDetails />} />
        <Route path='products/:id/edit' element={<ProductForm />} />
        <Route path='login' element={<Login />} />
        
      </Routes>
    </div >
  );
}


export default App;