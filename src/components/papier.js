import React, {useState} from "react";
import imgpapier from "../design/images/icon-paper.svg";

// const Example = props =><div className={props.shouldHide? 'hidden' : undefined}>Hello</div>

export default class Papier extends React.Component {
    render(){
        return(
            <div className="papier">
                <img src={imgpapier}/>
            </div>
        )}
}