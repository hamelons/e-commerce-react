import React from 'react'
import './Header.css'
import { IconName } from "react-icons/fa";

export default function Header() {
    return (
        <header>
            <div className='header'>
                <span className="header__logo">Kalen</span>
                <ul className="header__nav">
                    <li>About</li>
                    <li>Contacts</li>
                </ul>
            </div>
            <div className='header__images'></div>
        </header>
    )
}