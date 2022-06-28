import React, {useState} from "react";
import "./options.css"
import imgpapier from "../design/images/icon-paper.svg";


export default class Papier extends React.Component {
    hidePaperScissors(){
        document.getElementsByClassName("pierre")[0].style.display = "none";
        document.getElementsByClassName("ciseau")[0].style.display = "none";
        document.getElementsByClassName("container-mainun")[0].style.backgroundImage = "none";
        document.getElementsByClassName("youpicked")[0].style.display = "block";
        document.getElementsByClassName("container-maindeux")[0].style.display = "block";
        document.getElementsByClassName("vs")[0].style.display = "block";
        document.getElementsByClassName("row2choices").style.display = "block";
        document.getElementsByClassName("row2choices").style.margin = "auto";
        document.getElementsByClassName("row2choices").style.width = "150px";

    }
    render(){
        return(<div>
            <p className="youpicked">You picked</p>
            <div className="papier" onClick={()=>{this.hidePaperScissors()}}>
                <img src={imgpapier}/>
            </div>
            </div>
        )}
}