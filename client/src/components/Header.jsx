import '../styles/header.css'
import React from "react";
import { Link } from "react-router-dom";
import ToggleTheme from './ToggleTheme';

function Header (){


    return (
        <nav>
        <img src="../src/assets/rick_logo.png" alt="logo Rick & Morty"/>
        <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/login">Connexion</Link></li>
            <ToggleTheme/>
        </ul>
        </nav>
    )
}

export default Header;