import { useState } from "react";

const Filter = (props)=>{
    const{resData,resList,setResList} = props;
    // const[resData,setResList] = useState(resData);

    return(<div id="filter-btn">
     <button id="all-restro-btn" onClick={()=>{setResList(resData)}} >All Restaurants</button>   

    <button onClick={()=>{
       const top_restro = resData.filter((restaurant)=>{
            return restaurant.info.avgRating>4;
        })
        setResList(top_restro);
   }}>Top Rated Restaurants</button>   



    </div>   
)}
export default Filter;