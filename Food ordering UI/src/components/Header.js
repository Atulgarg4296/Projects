import { useState } from "react";
import logo from "../utils/logo.jpg";
const Header = ()=>{
    // const logBtn = "LOGIN";
    const[logBtn,setLogBtn] = useState("LOGIN"); 
    return (<div id="header-container">

        <div id="logo-container">
            <img id="logo" src={logo} alt="app-logo"></img>
        </div>

    <div id="nav-items">
        <ul>
            <li>HOME</li>
            <li>CART</li>
            <li>ABOUT US</li>
            <button id="login-btn" onClick={()=>{logBtn=="LOGIN"?setLogBtn("LOGOUT"):setLogBtn("LOGIN")}}>{logBtn}</button>
        </ul>
    </div>

    </div>)
}
export default Header;