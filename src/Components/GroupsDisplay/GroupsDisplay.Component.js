import React from 'react'
import './GroupsDetails.Styles.css'
import TeamDisplay from "../TeamDisplay/TeamDisplay.Component";
import TeamGroup from "../TeamDisplay/TeamGroup";

function GroupsDisplay() {
    return (
        <div className="groupDisplay">
            <div className="groupDisplay__header">GROUPS</div>
            <div className="groupDisplay__lr">(------)</div>
            <div className="groupDisplay__hoverTables">
                <div className="groupDisplay__hoverTables__groups">
                    <h3 className="groupDisplay__hoverTables__groups__group">Group A</h3>
                    <div className="groupDisplay__points__details">
                        <span>P</span>
                        <span>+/-</span>
                        <span>Pts</span>
                    </div>
                    <TeamGroup className="team"/>
                </div>
                <div className="groupDisplay__hoverTables__groups">
                    <h3 className="groupDisplay__hoverTables__groups__group">Group B</h3>
                    <div className="groupDisplay__points__details">
                        <span>P</span>
                        <span>+/-</span>
                        <span>Pts</span>
                    </div>
                    <TeamGroup className="team"/>

                </div>
                <div className="groupDisplay__hoverTables__groups">
                    <h3 className="groupDisplay__hoverTables__groups__group">Group C</h3>
                    <div className="groupDisplay__points__details">
                        <span>P</span>
                        <span>+/-</span>
                        <span>Pts</span>
                    </div>
                    <TeamGroup className="team"/>
                </div>
            </div>
        </div>
    )
}

export default GroupsDisplay