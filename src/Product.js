import React, { useState }  from "react";
import { useNavigate } from "react-router-dom";
import $ from "jquery";
import "./Apps.css";
import img1 from "./assets/images/men/1.jpg";




function Kids(){
    

    return(
        <div className="Register">
        <h1> Register to Getting Your Favorite Perfme </h1>
        <div class="parent">
            <div class="segment eight"><img className="product-img" src={img1} alt="an image" /></div>
            <div class="segment four">span 4</div>
            
        </div>

        <h1>You May Also Like</h1>
        <h3> reviews</h3>
        
     
    </div>
    )

}

 export default Kids;