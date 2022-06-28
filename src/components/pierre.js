import React from "react";
import "./options.css"
import imgpierre from "../design/images/icon-rock.svg";

export default class Pierre extends React.Component {
    render(){
        return(
            <div className="pierre">
                <img src={imgpierre}/>
            </div>
        )}
}