import React from 'react'
import './Navbar.Styles.css'
import {Nav, Navbar} from 'rsuite';

function Navigation() {
return(
    <div className="navbar">
        <Navbar>
            <Navbar.Header>
                <a href="#" className="navbar-brand logo">
                    RSUITE
                </a>
            </Navbar.Header>
            <Navbar.Body>
                <Nav >
                    <Nav.Item>
                        Latest
                    </Nav.Item>
                    <Nav.Item>Fixtures & Results</Nav.Item>
                    <Nav.Item>Groups</Nav.Item>
                    <Nav.Item>Teams & Players</Nav.Item>
                    <Nav.Item>Top Players</Nav.Item>
                    <Nav.Item>Stats</Nav.Item>
                    <Nav.Item>Live TV</Nav.Item>
                </Nav>
            </Navbar.Body>
        </Navbar>
    </div>
)
}

export default Navigation