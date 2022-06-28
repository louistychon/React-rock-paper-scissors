import React from "react";
import "./options.css"
import imgciseau from "../design/images/icon-scissors.svg";


export default class Ciseau extends React.Component {
    hidePaperScissors(){
        document.getElementsByClassName("pierre")[0].style.display = "none";
        document.getElementsByClassName("papier")[0].style.display = "none";
        document.getElementsByClassName("container-mainun")[0].style.backgroundImage = "none";
        document.getElementsByClassName("youpicked")[1].style.display = "block";
        document.getElementsByClassName("container-maindeux")[0].style.display = "block"
        document.getElementsByClassName("vs")[0].style.display = "block"
    }
    render(){
        return(
            <div>
            <p className="youpicked">You picked</p>
            <div className="ciseau" onClick={()=>{this.hidePaperScissors()}}>
                <img src={imgciseau}/>
            </div>
            </div>
        )
    }
}