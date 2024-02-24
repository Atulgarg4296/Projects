import Card from "./Card";
import Search from "./Search";
// import resData from "../utils/mockData";
// import {card_img} from "../utils/constants";
import { useEffect, useState } from "react";
import Filter from "./Filter";
import Shimmer from "./Shimmer";


const CardContainer = ()=>{
    const[resList,setResList] = useState([]);
    const[resData,setResData] = useState([]);
    console.log(resData);

   useEffect(()=>{
    getData();
   },[]);
  
    async function getData(){
        const respo = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const data = await respo.json();
        const API_data = data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        setResList(API_data);
        setResData(API_data);
    
        
    }
    if(resData.length==0){
        return <Shimmer/>
    }

   

    return (<div id="card-box">
        <Search resData={resData} resList={resList} setResList={setResList} />
        <Filter resData={resData} resList={resList} setResList={setResList}/>
        <div id="card-container">

         
        {
     resList.map((restaurant)=>(
        <Card key={restaurant.info.id} restaurant={restaurant.info}/>
    ))
    }
    </div>
    </div>

)}
export default CardContainer;