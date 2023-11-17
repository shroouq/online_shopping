import React, { useState }  from "react";
import { Link } from 'react-router-dom';
import $ from "jquery";
import { useNavigate } from "react-router-dom";
import "./login.css";
import 'https://kit.fontawesome.com/fdbf8305d1.js';




function Kids(){

    const navigate = useNavigate();
    const [error1, setError1] = useState("");
    const [error2, setError2] = useState("");



    const [data, setData] = useState({
        fullname: "",
        email: "",
        password: "",
        repeatpassword: "",
      });

      const handleChang = (e) => {
        const { name, value, type, checked } = e.target;
        setData({ ...data, [e.target.name]: e.target.value });
      };

      function validData() {
        let err = {}
        if (data.password !== data.repeatpassword) {
          err.password = 'please: enter the same password'
        }
        setError1({ ...err })
    return Object.keys(err).length < 1;
  }

    const submitForm = (e) => {
        e.preventDefault();

        let isvalid = validData()
    if (isvalid) {
        let ormData = $("#product_form").serializeArray();
      let postData = ormData.concat(data);
      console.log(postData);


      $.ajax({
        type: "POST",
        url: "http://localhost/yy/controller/Contact",
        // dataType: 'json',
        data: data,
        complete: function (data) {
          let value2 = $.trim(data.responseText)
          console.log(data.responseJSON)
          if ($.trim(data.responseText) == "?>false") {
            console.log(value2)
            setError2("name or email is exist");
            console.log(error2);
          }
          else {
            console.log(data.responseText)
            setError2("");
            navigate('/', { replace: true });
          }
        }
      });
    }
  };
    
    

    return(
        <div className="body">
        <div className="wrapper">
            <span className="icon">
            <i class="fa-solid fa-xmark"></i>
            </span>
       <div className="login">
        <h2>Register</h2>
        <form action=""
        id="product_form"
        method="POST"
        onSubmit={submitForm}>

           <div className="input-box">
     <span>{error2}</span>

    <input className="in" type="text" name="fullname" onChange={handleChang} required />
    <label className="label2">
   Full Name:
   </label>
   </div>
  
     <div className="input-box">
    
    
     <input className="in" type="text" name="email" onChange={handleChang} required />
    <label className="label2">
   Email:
   </label>
   </div>
  
     <div className="input-box">
    <input className="in" type="password" name="password" onChange={handleChang}  required/>
    <label className="label2">
   Password:
   </label>
   </div>
   <div className="input-box">
  
   
    <input className="in" type="text" name="repeatpassword" onChange={handleChang} required />
    <label className="label2">
   Repeat Password:
   </label>
   <span>{error1.password}</span>

   
     <div>
     <Link className="forget" to="/product">forget password</Link> 
     </div>
     </div>

    <button  className="login-button" type="submit" name="Login"  >Login </button>
    <div className="register">
        <p> Don't have an account ? 
               <Link className="register-link" to="/product">Login</Link> 

        </p>

    </div>
    </form>
    </div>
    </div>
    </div>
    )

}

 export default Kids;