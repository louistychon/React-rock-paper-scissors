import React from "react";
import "./options.css"
import imgpierre from "../design/images/icon-rock.svg";

export default class Pierre extends React.Component {
    hidePaperScissors(){
        document.getElementsByClassName("papier")[0].style.display = "none";
        document.getElementsByClassName("ciseau")[0].style.display = "none";
        document.getElementsByClassName("container-mainun")[0].style.backgroundImage = "none";
    }
    render(){
        return(
            <div className="pierre" onClick={()=>{this.hidePaperScissors()}}>
                <img src={imgpierre}/>
            </div>
        )}
}