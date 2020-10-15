import React from "react";
import './CardInfo.css';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import 'bootstrap/dist/css/bootstrap.min.css';



function CardInfo(props){
    return(
        <div className="card-info">
            {/* <img src={props.avatar} className="Avatar"/> */}
            <div className="name">
                {props.name}
                <span> {props.age} </span>
            </div>
            <div className="located">
                <LocationOnIcon /> 39 kilometers away
            </div>
           
        </div>
    );
};
export default CardInfo;