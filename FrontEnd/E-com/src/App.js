
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import banner_mens from './components/assets/banner_mens.png';
import banner_women from './components/assets/banner_women.png';

import banner_kids from './components/assets/banner_kids.png';
import Product from './pages/Product';
import ProductCategory from './pages/ShopCategory';
import Login from './pages/Login';
import Footer from './components/footer/Footer'
function App() {
  return (
    <div>
       <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/product" element={<Product />}>
            
            <Route path=':productId' element={<Product />} />
          </Route>
        <Route path="/mens" element={<ProductCategory category="men" banner={banner_mens}/>}/>
        <Route path="/womens"  element={<ProductCategory category="women" banner={banner_women}/>}/>
        <Route path="/kids" element={<ProductCategory category="kid" banner={banner_kids}/>}/>
        
      </Routes>
      <Footer/>
      </BrowserRouter> 
    </div>
  );
} 

export default App;
