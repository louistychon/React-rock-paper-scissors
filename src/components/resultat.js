import React from 'react';

let resultat = "";
let scoreuser = 0;

function whoWins(pickuser, pickcomputer){
    if(pickuser === pickcomputer){
        return "Tie game"
    }
    else if(pickuser === "Rock" && pickcomputer === "Scissors"){
        scoreuser +=1
        return resultat = "You win"
    }
    else if(pickuser === "Scissors" && pickcomputer === "Paper"){
        scoreuser +=1
        return resultat = "You win"
    }
    else if(pickuser === "Paper" && pickcomputer === "Rock"){
        scoreuser +=1
        return resultat = "You win"
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
export default class Resultat extends React.Component {
    render(){
    return(
        <div className='vs'>
            <p className="presultat">{resultat}</p>
            <button className='replay'>Play again</button>
        </div>
    )

    }
}