import React from "react";
import Pierre from "./pierre";
import Ciseau from "./ciseau";
import Papier from "./papier";
import prock from "../design/images/icon-rock.svg";
import ppaper from "../design/images/icon-paper.svg";
import pscissors from "../design/images/icon-scissors.svg";

let componentPierre = <Pierre/>;
let componentPapier = <Papier/>;
let componentCiseau = < Ciseau/>;
let possibilite = [componentPierre, componentPapier, componentCiseau]

function randomsign() {
    let signe = possibilite[Math.floor(Math.random(possibilite)*3)]
    return signe
}
export default class Maindeux extends React.Component{
    render() {
        return(
    <div>
      {randomsign()}
    </div>)
    }
}