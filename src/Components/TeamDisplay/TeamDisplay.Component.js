import React from "react";
import './TeamDisplay.Styles.css'

function TeamDisplay() {
    return(
        <div className="teamDisplay">
                <div className="teamDisplay__position">
                    1
                </div>
                <div className="teamDisplay__details">
                    <p className="teamDisplay__details__flag">flag
                    </p>
                    <span className="teamDisplay__details__teamName">
                        Team Name
                    </span>
                    <span className="teamDisplay__details__matchesPlayed">
                        0
                    </span>
                    <span className="teamDisplay__details__goalAverage">
                        0
                    </span>
                    <span className="teamDisplay__details__pointsDisplay">
                        0
                    </span>
                </div>
        </div>
    )
}

export default TeamDisplay