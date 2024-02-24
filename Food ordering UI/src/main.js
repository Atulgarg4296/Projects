import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Search from "./components/Search";
import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";

const AppLayout = ()=>{
  


return (<div id="app-container">
    <Header/>
    {/* <Search/> */}
    <CardContainer/>
    <Footer/>
</div>)
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
