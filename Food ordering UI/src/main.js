import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import About from "./components/About";
import Cart from "./components/Cart";
import { Outlet } from "react-router-dom";
import Card from "./components/Card";
import Error from "./components/Error";

const AppLayout = ()=>{
  
return (<div id="app-container">
    <Header/>
    <Outlet/>
    <Footer/>
</div>)
}


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children:[
            {
                path:"/",
                element:<CardContainer/>
                
            },
            {
                path:"/about",
                element:<About/>
        
            },
            {
                path:"/cart",
                element:<Cart/>
            }
        ],
        errorElement:<Error/>
    },
    
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
