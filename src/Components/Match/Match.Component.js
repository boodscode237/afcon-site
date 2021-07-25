import React from "react";
import './Match.Style.css'

function Match(){
    return(
        <div className="match">
            <div className="match__homeTeam">
                <div className="match__homeTeam__name">Team Home</div>
                <div className="match__homeTeam__flag"></div>
                <div className="match__homeTeam__score">0</div>
            </div>
            <div className='match__separator'>:</div>
            <div className="match__awayTeam">
                <div className="match__awayTeam__score">0</div>
                <div className="match__awayTeam__flag"></div>
                <div className="match__awayTeam__name">Team Home</div>
            </div>

        </div>
    )
}

export default Match