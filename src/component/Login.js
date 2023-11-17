import React, { useState }  from "react";
import { useNavigate } from "react-router-dom";
import $ from "jquery";
import "./component/register.css";


function Kids(){
    let history = useNavigate();
    const[data, setData]= useState({
        
    })

    const handleChange=(e)=>{
        setData({ ...data, [e.target.name]: e.target.value});
        
    }

    const submitForm=(e)=>{
        e.preventDefault();
		const form = $(e.target);
		$.ajax({
			type: "POST",
			url: form.attr("action"),
			data: form.serialize(),
			success(data) {
				setData(data);
                console.log (data)

			},
            
		});
        console.log (data)
        
    }

    return(
        <div className="Register">
        <h1> Register to Getting Your Favorite Perfme </h1>
        <form action="http://localhost/php/register.php"
				method="post" onSubmit={submitForm}>
                    <div className="flex">
  <label className="label">
   Email:
   </label>
   
    <input className="in" type="text" name="first_name" onChange={handleChange} required />
  
     <br></br>
     <label className="label">
   Password:
   </label>
    <input className="in" type="text" name="last_name" onChange={handleChange}  required/>
     <br></br>
     
    <input  className="submit" type="submit" name="Login"  />
    </div>
    </form>
    </div>
    )

}

 export default Kids;