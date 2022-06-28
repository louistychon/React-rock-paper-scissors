import React from 'react';



let resultat = "cc"
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