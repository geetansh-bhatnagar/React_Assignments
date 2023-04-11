import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter,  Route , Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Payment from "./components/Payment";
import "@fortawesome/fontawesome-free/css/all.min.css"


export default function App(){
    return(
        <div className="App">

            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/Products" element={<Products />} />
                    <Route path="/Cart" element={<Cart />} />
                    <Route path="/Checkout" element={<Checkout />} />
                    <Route path="/Payment" element={<Payment />} />
                </Routes>

            </BrowserRouter>
  <Footer />
        </div>
);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
