import React from "react";
import Pierre from "./pierre";
import Ciseau from "./ciseau";
import Papier from "./papier";
import prock from "../design/images/icon-rock.svg";
import ppaper from "../design/images/icon-paper.svg";
import pscissors from "../design/images/icon-scissors.svg";
import rules from "../design/images/image-rules.svg";


export let possibilite = [prock, ppaper, pscissors]


export default class Mainun extends React.Component{
    render() {
        return(
            <div className="container-mainun">
                <div className="row2choices">
                    <Papier/>
                    <Ciseau/>
                </div>
                <div className="row1choices">
                    <Pierre/>
                </div>
            </div>
            )
    }
}