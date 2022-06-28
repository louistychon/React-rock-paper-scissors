import React from "react";
import imgciseau from "../design/images/icon-scissors.svg";


export default class Ciseau extends React.Component {
    render(){
    return(
        <div className="ciseau">
            <img src={imgciseau}/>
        </div>
    )
    }
}