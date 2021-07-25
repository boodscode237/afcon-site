import React from 'react'
import './Header.Styles.css'

function Header() {
    return (
        <div className='header'>
            <div className="header__logo">
                AFCON-LIVE
            </div>
                <div className="header__livescore">
                    Livescores
                </div>
                <div className="header__login">
                    Login
                </div>
        </div>
    )
}

export default Header
