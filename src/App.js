
import './App.css';
import Home from './Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
} from "react-router-dom";
import MenSection from './Men-section';
import WomenSection from './Women-section';
import SignUp from './Sign-up';
import ProductInfo from './Product-info';
import CartProduct from './actions/Cart-product';


export default  function App() {
  return (
   <Router>
     <Routes>
       <Route path='/' element={<Home />}/>
       <Route path='men-section' element={<MenSection />}/>
       <Route path='women-section' element={<WomenSection/>} />
       <Route path='sign-up' element={<SignUp/>}/>
       <Route path='product-info' element={<ProductInfo/>} />
       <Route path='product-info/cart-product' element={<CartProduct/>}/>
     </Routes>
   </Router>
  );
}


