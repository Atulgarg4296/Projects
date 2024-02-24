// import CardContainer from "./CardContainer";
import { card_img } from "../utils/constants";
const Card = (props)=>{
    // console.log(props);
    //NOtE: useState gives you array while props is giving you an object.
    const{restaurant} = props;
    return (<div id="card">
        <div id="card-logo-container">
        <img id="card-logo" alt="restro-logo" src={card_img+restaurant.cloudinaryImageId}/>
        </div>
        <div id="card-details">
        <h2 className="restro-name">{restaurant.name}</h2>
        <h5 className="restro-addres">{restaurant.locality}</h5>
        <h3 className="restro-cost">{restaurant.costForTwo}</h3>
        <p className="restro-cuisine">{restaurant.cuisines.join(",")}</p>
        <p className="restro-rating">{"avg-rating : "+ restaurant.avgRating}</p>
        <p className="restro-delivery-time">{restaurant.sla.deliveryTime+" mins"}</p>
        
        </div>
    </div>)
}
export default Card;
