import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Mynav } from './components/Mynav';

function App() {
  return (
    <div>
      <Mynav/>
     
      
     <Routes>
      <Route path='' element={<Home/>}/>
      <Route path='Home' element={<Home/>}/>
      
      </Routes> 
    </div>
  );
}

export default App;
