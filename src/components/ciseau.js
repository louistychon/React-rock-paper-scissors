import React from "react";
import imgciseau from "../design/images/icon-scissors.svg";


export default class Ciseau extends React.Component {
    hidePaperScissors(){
        document.getElementsByClassName("pierre")[0].style.display = "none";
        document.getElementsByClassName("papier")[0].style.display = "none";
        document.getElementsByClassName("container-mainun")[0].style.backgroundImage = "none";
    }
    render(){
    return(
        <div className="ciseau" onClick={()=>{this.hidePaperScissors()}}>
            <img src={imgciseau}/>
        </div>
    )
    }
}