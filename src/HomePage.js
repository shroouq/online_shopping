import {useEffect, useState,useRef} from "react";
import {Card, CardText, CardBody, CardTitle, CardSubtitle, CardImg} from 'reactstrap';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; 

import "./Apps.css";
import Product from "./Product";
import header from "./assets/images/header.jpg";
//import 'https://kit.fontawesome.com/fdbf8305d1.js';
import images from "./images";
import img1 from "./assets/images/men/1.jpg";
import img2 from "./assets/images/men/2.jpg";
import img3 from "./assets/images/men/3.jpeg";
import img4 from "./assets/images/men/4.jpeg";
import img5 from "./assets/images/women/1.jpg";
import img6 from "./assets/images/women/2.jpg";
import img7 from "./assets/images/women/3.jpg";
import img8 from "./assets/images/women/4.jpg";

function HomePage(){

    const arrivalRef= useRef();
    const [width, setWidth ] = useState(0);
    useEffect(()=> {
        console.log(arrivalRef.current.scrollWidth - arrivalRef.current.offsetWidth);
        setWidth(arrivalRef.current.scrollWidth - arrivalRef.current.offsetWidth);
    },[])

    tippy('#myButton', {
        content: "I'm a Tippy tooltip!",
      });

      const numberFormat = (value) =>
      new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'USD'
      }).format(value);

      const quantity=1;
    
    return(
        <div className="Home">
        <img
        className="image"
        src={header}
        alt="an image"
        />;
        <h1 className="ani"> New Arrival</h1>
        <motion.div ref={arrivalRef} className="last">
        
            <motion.div  drag="x" dragConstraints={{right:0 , left: -width}}  className="arrival">
                {images.map((image)=> (
                    <motion.div className="item"  key={image}>
                        <img src={image} alt="img"></img>
                        </motion.div>
                    
                ))}
            </motion.div>
        </motion.div>
        <Popup trigger={<button> Trigger</button>} position="right center">
        <div className="popup">Popup content here !!</div>
        </Popup>  
        <button id="myButton">My Button</button>

        <h1 className="seller"> Best Seller For Men 
        <i class="fa-solid fa-child"></i>
        </h1>
        <div className="men">
        <div className="best">
        
        <div>
        <Popup trigger={<img className="image1" src={img1} alt="an image" />} position="right center">
        <div className="popup">
            Bath & Body Works <br/>
            MIDNIGHT <br/>
            AMBER GLOWShower Gel<br/>
            EGP 545.00<br/>
            </div>
            <div>
            <button className="order">add to bage</button> 
            </div>
        </Popup>  
         
        <h4><Link className="nav_name" to="/product">Product List</Link> </h4></div>

        <div>
        <img className="image1" src={img2} alt="an image" />;
        <h4>hgghvhgvg</h4></div>
        <div>
        <img className="image1" src={img3} alt="an image" />;</div>
        <div>
        <img className="image1" src={img4} alt="an image" />;</div>
        </div>
        </div>

        <h1 className="seller"> Best Seller For Women 
        <i class="fa-solid fa-child-dress"></i>
        </h1>
        <div className="seller">
        <div className="best">
        <Card >
            <CardImg className="image1" src={img5}>
            </CardImg>
            <CardBody>
                <CardTitle className="title">
                    <span> name</span>
                    <span> {numberFormat (88)}</span>
                </CardTitle>
                <div>
                    {quantity === 0  ? (<button  className="addcart"> + Add to cart</button>) :
                     <div className="addbutton">

                        <div className="addbutton2">
                           <button>-</button>
                           <div className="quan">
                           <span className="quan"> {quantity}</span>
                            in Cart
                           </div>
                           <button>+</button>
                        </div>
                        <button className="remove"> Remove </button>
                     </div>}
                </div>
            </CardBody>
        </Card>
        <Card >
            <CardImg className="image1" src={img6}>
            </CardImg>
            <CardBody>
                <CardTitle className="title">
                    <span>
                        name
                    </span>
                    <span> price</span>
                </CardTitle>
            </CardBody>
        </Card>
        <Card >
            <CardImg className="image1" src={img7}>
            </CardImg>
            <CardBody>
                <CardTitle>
                    <span>
                        name
                    </span>
                    <span> price</span>
                </CardTitle>
            </CardBody>
        </Card>
        <Card >
            <CardImg className="image1" src={img8}>
            </CardImg>
            <CardBody>
                <CardTitle>
                    <span>
                        name
                    </span>
                    <span> price</span>
                </CardTitle>
            </CardBody>
        </Card>
        
        </div>
        </div>
    
</div>
    );
}

 export default HomePage;