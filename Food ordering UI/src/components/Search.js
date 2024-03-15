import { useState } from "react";

const Search = (props)=>{
    const{resData,resList,setResList} = props;
    const[searchText,setSearchText]= useState("");
    const note = "Sorry! Not found";

    return (<div id="search-container">
        <div id="search-bar-container">

        <input id="search-bar" type="text" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value)}}></input>
        </div>
        
        <div id="search-btn-container">
        <button id="search-btn" onClick={()=>{
            //searched_data
            const searched_data = resData.filter((restaurant)=>{
                return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
            })

            setResList(searched_data);

        }}>Search</button>
        </div>

    </div>)
}
export default Search;