import React from "react";
import "./Apps.css";
import { Route, Routes, Link } from 'react-router-dom';
import 'https://kit.fontawesome.com/fdbf8305d1.js';



function Footer(){
    return(
    <div className="footer">
        <div className="container">
            <div className="first label" >
            
            <i class="fa-solid fa-lock"></i>
                <p>All products are 100% authentic original brand names. 
                    We guarantee your security and will not share your data 
                    with anyone.</p>
            </div>
            <div className="second label" >
                <h3> contact us </h3>
                <div className="brands">
                <a href="https://www.facebook.com">
                <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com">
                <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="https://www.twitter.com">
                <i class="fa-brands fa-twitter"></i>
                </a>
                </div>
                
            
            </div>
        </div>
    </div>
    )
}

export default Footer;