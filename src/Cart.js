import React from "react";
import {useEffect, useState,useRef} from "react";


function Cart () {
    const [item, setItem] = useState([])
  // get list of products from database
  useEffect(() => {
    fetch("http://localhost/php/controller/Contact")
      .then(res => res.json())
      .then(
        (result) => {
          setItem(result);
          console.log(result)
        })
  }, []);

  return(
    <div>
<h1>hjgjgh</h1>                
    </div>

  );
}
export default Cart;
