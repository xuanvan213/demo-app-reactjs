import React from "react";
import "./card.css";
import CardInfoDetail from '../cardInfo/CardInfo';
import InfoIcon from '@material-ui/icons/Info';
import Clock from '../Clock/Clock';


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
    },
    description: "Nữ sinh An Giang phá đảo mạng xã hội với tấm hình chụp trộm hơn 100.000 like, soi trang cá nhân ai cũng tiếc hùi hụi.",
    location: 12,
    view: 0
}



class card extends React.Component{

    
    constructor(props) {
        super(props);
        this.state = {isToggleOn: false,
        name: '', age: 0, des:'', location: 0};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.closeCardInfo = this.closeCardInfo.bind(this);
        this.increment = this.increment.bind(this);   
      }
      
      handleClick() {
        this.setState(state => ({
          isToggleOn: !state.isToggleOn
        }));
        this.increment();
      }

      handleSubmit(event){
          this.setState({name: event.target.name.value, age:event.target.age.value,des:event.target.description.value, location: event.target.location.value });
          User.name = event.target.name.value;
          User.age = event.target.age.value;
          User.description = event.target.description.value;
          User.location = event.target.location.value;
          console.log(User);          
          event.preventDefault();
      }

      closeCardInfo(){
        this.setState(state => ({
            isToggleOn: false
          }));
      }

      increment(){
          var v = parseInt(User.view) + 1;
          User.view = v;
          return v;
      } 

    render() {
        return(
            <div>
                <div className="card" >
                    <div className="CardMask"></div>
                    <div className="CardBody" > 
                        <InfoIcon className="Icon-Info" onClick={this.handleClick}/>
                        <div className="CardInfo">
                        <div className="CardName">{User.name}</div>
                        <div className="CardAge">{User.age}</div>
                        </div>
                        <div className="CardDescription">
                            {User.description}                            
                        </div>                            
                    </div>
                    {this.state.isToggleOn ? <CardInfoDetail name={User.name} avatar={User.avatar} age={User.age} view={User.view} closeClick={this.closeCardInfo} location={User.location}/> : ''}               
                </div>
                <br></br>
                <Clock />

                <form onSubmit={this.handleSubmit}>
                    Name: <input type="text"  name="name" ></input> <br></br>
                    Age: <input type="text" name="age"></input> <br></br>
                    Description: <textarea type="text" name="description"></textarea><br></br>
                    location: <input type="text" name="location"></input><br></br>
                    <input type="submit" value="submit"></input>
                </form>

            </div>
    
        );
    }       
    
};
export default card;
