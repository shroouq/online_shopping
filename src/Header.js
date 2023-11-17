import React from "react";
import { Route, Routes, Link } from 'react-router-dom';
import Register from "./Register";
import Bages from "./Bages";
import Login from "./Login";
import Homepage from "./HomePage";
import Product from "./Product";
import Cart from "./Cart";
import "./Apps.css";
import { ShoppingCart} from 'phosphor-react' ;
//import 'https://kit.fontawesome.com/fdbf8305d1.js';
// <i class="fa-solid fa-cart-shopping"></i>
//import 'bootstrap/dist/css/bootstrap.css';


function Header(){
    return(
        <div className="header">
            
        <nav className="nav">
            
            <Link className="b" to="/">Perfume</Link>
            <Link className="a" to="/login">register</Link>
            <Link className="a" to="/register">login</Link>
            <button> logout</button>

            <div>
            <button className="circle">
            <Link className="a" to="/Cart">
               <ShoppingCart size={32}/>
            </Link>
            
            </button>
            <span className="circle2">
                3
            </span>
            </div>
            
        </nav>
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/bages" element={<Register />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/product" element={<Product />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Bages />} />

        </Routes>
        </div>
    )

       
};

export default Header;