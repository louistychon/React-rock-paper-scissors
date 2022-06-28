import React, {useState} from "react";
import imgpapier from "../design/images/icon-paper.svg";

// const Example = props =><div className={props.shouldHide? 'hidden' : undefined}>Hello</div>

export default class Papier extends React.Component {
    hidePaperScissors(){
        document.getElementsByClassName("pierre")[0].style.display = "none";
        document.getElementsByClassName("ciseau")[0].style.display = "none";
        document.getElementsByClassName("container-mainun")[0].style.backgroundImage = "none";
    }
    render(){
        return(
            <div className="papier" onClick={()=>{this.hidePaperScissors()}}>
                <img src={imgpapier}/>
            </div>
        )}
}