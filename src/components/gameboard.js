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

let scoreuser = 0;
export class Countvictories extends React.Component{
        whoWins(pickuser, pickcomputer){
        if(pickuser === pickcomputer){
            return "Tie game"
        }
        else if(pickuser === "Rock" && pickcomputer === "Scissors"){
            scoreuser +=1
            return "You win"
        }
        else if(pickuser === "Scissors" && pickcomputer === "Paper"){
            scoreuser +=1
            return "You win"
        }
        else if(pickuser === "Paper" && pickcomputer === "Rock"){
            scoreuser +=1
            return "You win"
        }
        else if(pickuser === "Paper" && pickcomputer === "Scissors"){
            scoreuser > 0 ? scoreuser -= 1 : scoreuser = 0;
            return "You lose"
        }
        else if(pickuser === "Rock" && pickcomputer === "Paper"){
            scoreuser > 0 ? scoreuser -= 1 : scoreuser = 0;
            return "You lose"
        }
        else if(pickuser === "Scissors" && pickcomputer === "Rock"){
            scoreuser > 0 ? scoreuser -= 1 : scoreuser = 0;
            return "You lose"
        }
    }
    render(){
        return(
            <div className="comptevictoires">
                <div>
                    <h2>Rock</h2>
                    <h2>Paper</h2>
                    <h2>Scissors</h2>
                </div>
                <div className="buttonvictoires">
                    <button>Score <br/><span className="score">{scoreuser}</span></button>
                </div>
            </div>
        )
    }
}

