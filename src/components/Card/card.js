import React from "react";
import "./card.css";
import { render } from "@testing-library/react";
import CardInfoDetail from '../cardInfo/CardInfo';


// function handleClick(){
//     alert("Hello world!");    
// }
const User = {
    name: "Minh Thu",
    age: 19,
    images: { 
        1: "https://kenh14cdn.com/2020/10/13/1211156841769437606901297783950716570725228n-1602580235620534701129.jpg",
        2: "https://kenh14cdn.com/2020/10/13/1211622501769438473567875320436520639140890n-1602580189071661804188.jpg",
        3: "https://kenh14cdn.com/2020/10/13/1212654571769437173568004355220754476477659n-2-16025802699482106541079.jpg",
    }
}


class card extends React.Component{
    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};
        this.handleClick = this.handleClick.bind(this);
      }
      handleClick() {
        this.setState(state => ({
          isToggleOn: !state.isToggleOn
        }));
      }

    render() {
        return(
            <div className="card" onClick={this.handleClick}>
                <div className="CardMask"></div>
                <div className="CardBody" > 
                    <div className="CardInfo">
                    <div className="CardName">Minh Thu</div>
                    <div className="CardAge">19</div>
                    </div>
                    <div className="CardDescription">
                    “I have studied many philosophers and many cats. The wisdom of cats is
                    infinitely superior.”
                    </div>                            
                </div>
                {this.state.isToggleOn ? <CardInfoDetail name={User.name} avatar={User.avatar} image1={User.images[1]} 
                image2={User.images[2]} 
                image3={User.images[3]}/> : ''}
            </div>
    
        );
    }       
    
};
export default card;
