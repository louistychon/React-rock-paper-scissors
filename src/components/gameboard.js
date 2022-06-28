import React from "react"
import Mainun from "./mainun"
import Maindeux from "./maindeux"
import Resultat from "./resultat"

export default class Gameboard extends React.Component{
    render(){
    return (
        <div className="flex-gameboard">
            <Mainun/>
            <Resultat/>
            <Maindeux/>
        </div>
        )
    }
}

export class Countvictories extends React.Component{
    render(){
        return(
            <div className="comptevictoires">
                <div>
                    <h2>Rock</h2>
                    <h2>Paper</h2>
                    <h2>Scissors</h2>
                </div>
                <div className="buttonvictoires">
                    <button>Score <br/><span className="score">12</span></button>
                </div>
            </div>
        )
    }
}

