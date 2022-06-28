import React from "react";
import "./options.css"
import imgpierre from "../design/images/icon-rock.svg";

export default class Pierre extends React.Component {
    hidePaperScissors(){
        document.getElementsByClassName("papier")[0].style.display = "none";
        document.getElementsByClassName("ciseau")[0].style.display = "none";
        document.getElementsByClassName("container-mainun")[0].style.backgroundImage = "none";
        document.getElementsByClassName("youpicked")[2].style.display = "block";
        document.getElementsByClassName("container-maindeux")[0].style.display = "block";
        document.getElementsByClassName("vs")[0].style.display = "block";

    }
    render(){
        return(
            <div>
                <p className="youpicked">You picked</p>
                    <div className="pierre" onClick={()=>{this.hidePaperScissors()}}>
                    <img src={imgpierre}/>
            </div>
            </div>
        )}
}