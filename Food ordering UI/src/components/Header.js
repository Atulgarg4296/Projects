import { useState } from "react";
import logo from "../utils/logo.jpg";
import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
const Header = ()=>{
    // const logBtn = "LOGIN";
    const[logBtn,setLogBtn] = useState("LOGIN"); 
    return (<div id="header-container">

        <div id="logo-container">
            <Link to="/"><img id="logo" src={logo} alt="app-logo"></img></Link>
        </div>

    <div id="nav-items">
        <ul>
            <li><Link to="/" className="link">HOME</Link></li>
            <li><Link to="/cart" className="link">CART</Link></li>
            <li><Link to="/about"className="link">ABOUT US</Link></li>
            <button id="login-btn" onClick={()=>{logBtn=="LOGIN"?setLogBtn("LOGOUT"):setLogBtn("LOGIN")}}>{logBtn}</button>
        </ul>
    </div>

    </div>)
}
export default Header;