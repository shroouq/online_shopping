import React, { useState }  from "react";
import { Link } from 'react-router-dom';
import "./login.css";
import 'https://kit.fontawesome.com/fdbf8305d1.js';




function Register(){
    

    return(
        <div className="body">
        <div className="wrapper1">
            <span className="icon">
            <i class="fa-solid fa-xmark"></i>
            </span>
       <div className="login">
        <h2>Register</h2>
        <form >

        <div className="input-box">
  
   
  <input className="in" type="text" name="email" required />
  <label className="label2">
 Username:
 </label>
 </div>

            <div className="input-box">
  
   
    <input className="in" type="text" name="email" required />
    <label className="label2">
   Email:
   </label>
   </div>
  
     <div className="input-box">
    
    <input className="in" type="password" name="password"   required/>
    <label className="label2">
   Password:
   </label>
     <div>
     <Link className="forget" to="/product">forget password</Link> 
     </div>
     </div>

    <button  className="login-button" type="submit" name="Login"  >Login </button>
    <div className="register">
        <p> already have an account ? 
               <Link className="register-link" to="/bages"> Login</Link> 

        </p>

    </div>
    </form>
    </div>
    </div>
    </div>
    )

}

 export default Register;