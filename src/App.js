import './App.css';
import Navbar from './component/Navebar'
import Home from './component/Home';
import Product from './component/Product';
import { Routes, Route } from 'react-router-dom';
import PageNotFound from './component/PageNotFound';
import Products from './component/Products';
// import Cart from './component/Cart';
import Cart from './component/Cart';
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/products/:id' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
