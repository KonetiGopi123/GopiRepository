import { BrowserRouter, Link, Route, Routes, useSearchParams } from "react-router-dom";
import AboutUs from "./AboutUs";
import Cart from "./Cart";
import ContactUs from "./ContactUs";
import Home from "./Home";
import NonVeg from "./NonVeg";
import PurchaseHistory from "./PurchaseHistory";
import Veg from "./Veg";
import "./App.css";
import { useSelector } from "react-redux";
import { FaCarrot, FaDrumstickBite, FaHistory, FaHome, FaInfoCircle, FaPhone, FaShoppingCart } from "react-icons/fa";
import GoogleLoginComponent from "./GoogleLoginComponent";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App()
{
  const cart=useSelector((state)=>state.cart);
  const totalItems=cart.reduce((sum,item)=>sum+item.quantity,0);

  

  return(
    <>
    <GoogleOAuthProvider clientId="1015670360963-6an3kh561l6hqquii6mmh3j9k58fcotl.apps.googleusercontent.com">
    <GoogleLoginComponent/>
    </GoogleOAuthProvider>
    


    <BrowserRouter>
    <Link to="/Home"><FaHome/>Home</Link>
    <Link to="/Veg"><FaCarrot/>Veg</Link>
    <Link to="/NonVeg"><FaDrumstickBite/>NonVeg</Link>
    <Link to="/Cart"><FaShoppingCart/>Cart({totalItems})</Link>
    <Link to="/PurchaseHistory"><FaHistory/>PurchaseHistory</Link>
    <Link to="/AboutUs"><FaInfoCircle/>AboutUs</Link>
    <Link to="/ContactUs"><FaPhone/>ContactUs</Link>


    <Routes>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Veg" element={<Veg/>}/>
      <Route path="/NonVeg" element={<NonVeg/>}/>
      <Route path="/Cart" element={<Cart/>}/>
      <Route path="/PurchaseHistory" element={<PurchaseHistory/>}/>
      <Route path="/AboutUs" element={<AboutUs/>}/>
      <Route path="/ContactUs" element={<ContactUs/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )

}
export default App;