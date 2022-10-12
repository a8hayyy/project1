import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart'
import Products from './pages/Products';

function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/products' element={<Products/>}/>
          </Routes>
        </Router>
    </>
  );
}

export default App;
