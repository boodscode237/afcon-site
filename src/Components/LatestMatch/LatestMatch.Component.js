import React from 'react'
import './LatetMatch.Styles.css'
import Match from "../Match/Match.Component";

function LatestMatch() {
    return (
        <div className="latestMatch">
            <h1 className="latestMatch__title">
                Latest Match
            </h1>
            <h2 className="latestMatch__date">
                    Date
                <div className="latestMatch__date__lines">
                    <div className="latestMatch__date--bigSquare">
                    </div>
                    <div className="latestMatch__date--smallSquare">
                    </div>
                </div>
            </h2>
            <Match />
        </div>
    )
}

export default LatestMatch