import React from 'react'
import './Navbar.Styles.css'

function Navbar() {
    return (<div className = "navbar">
            <div className = "navbar__logo"> Logo </div>
            <div className = "navbar__links">
                <div className = "navbar__links__latest">Latest</div>
                <div className = "navbar__links__fixtures"> Fixtures & Result</div>
                <div className = "navbar__links__groups"> Groups</div>
                <div className = "navbar__links__teams"> Teams & Players</div>
                <div className = "navbar__links__stats"> Stats</div>
                <div className = "navbar__links__liveTv"> Live TV</div>
            </div>
        </div>
    )
}

export default Navbar