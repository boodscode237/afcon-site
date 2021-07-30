import React from "react";
import './FixturesAndResultMatches.Styles.css'

function FixturesAndResultMatches(){
    return(
        <div className="fixture">
            <div className="fixture__homeTeam">
                <div className="fixture__homeTeam__name">Team-Home</div>
                <div className="fixture__homeTeam__flag"></div>
                <div className="fixture__homeTeam__score">0</div>
            </div>
            <div className='fixture__separator'>:</div>
            <div className="fixture__awayTeam">
                <div className="fixture__awayTeam__score">0</div>
                <div className="fixture__awayTeam__flag"></div>
                <div className="fixture__awayTeam__name">Team Away</div>
            </div>

        </div>
    )
}

export default FixturesAndResultMatches