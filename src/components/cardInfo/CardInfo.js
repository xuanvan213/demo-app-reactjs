import React from "react";
import './CardInfo.css';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import 'bootstrap/dist/css/bootstrap.min.css';
import DetailsIcon from '@material-ui/icons/Details';



function CardInfo(props){
    return(
        <div className="Card-Info" onClick={props.closeClick}>
            <DetailsIcon className="Close-Icon"/>
            <div className="Name">
                {props.name}
                <span> {props.age} </span>
            </div>
            <div className="Located">
                <LocationOnIcon /> {props.location} kilometers away
            </div>
            <div className="CountView">
                <p>view: {props.view}</p>
            </div>
           
        </div>
    );
};
export default CardInfo;