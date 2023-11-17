import React, { useState }  from "react";
import { Link } from 'react-router-dom';
import "./login.css";
import $ from "jquery";
import { useNavigate } from "react-router-dom";


import 'https://kit.fontawesome.com/fdbf8305d1.js';




function Kids(){

    const navigate = useNavigate();
    const [error, setError]= useState({});
    const [ msg, setMsg] = useState({});
    const [data, setData] = useState({
        email: "",
        password: "",
      });

      const handleChang = (e) => {
        const { name, value, type, checked } = e.target;
        setData({ ...data, [e.target.name]: e.target.value });
        console.log(data);
      };

      const submitForm = (e) => {
        e.preventDefault();


        var headers = {
          "Accept": "application/json",
          "content-type": "application/json"
        };
        
        fetch("http://localhost/yy/controller/ContactLogin",{
         method: "POST",
         headers:headers,
         body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(
        (result) => {
       
            setMsg("kkk");
            console.log("K");

          }
          
        )
      };
      console.log(msg);
    
    

    return(
        <div className="body">
        <div className="wrapper">
            <span className="icon">
            <i class="fa-solid fa-xmark"></i>
            </span>
       <div className="login">
        <h2>Login</h2>
        <form action=""
        id="product_form"
        method="POST"
        onSubmit={submitForm}>
           <div className="input-box">
  
   
    <input className="in" type="text" name="email" onChange={handleChang} required />
    <label className="label2">
   Email:
   </label>
   </div>
  
     <div className="input-box">
    
    <input className="in" type="password" name="password"  onChange={handleChang}  required/>
    <label className="label2">
   Password:
   </label>
     <div>
     <Link className="forget" to="/product">forget password</Link> 
     </div>
     </div>

    <button  className="login-button" type="submit" name="Login"  >Login </button>
    <div className="register">
        <p> Don't have an account ? 
               <Link className="register-link" to="/product"> Register</Link> 

        </p>

    </div>
    </form>
    </div>
    </div>
    </div>
    )

}

 export default Kids;