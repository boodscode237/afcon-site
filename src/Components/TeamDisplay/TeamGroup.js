import React from "react";
import './TeamGroup.css'
import TeamDisplay from "./TeamDisplay.Component";

function TeamGroup(){
    return(
        <div className="teamGroup">
            <div className="teamGroup__teams">
                <TeamDisplay/>
                <TeamDisplay/>
                <TeamDisplay/>
                <TeamDisplay/>
            </div>
        </div>
    )
}

export default TeamGroup