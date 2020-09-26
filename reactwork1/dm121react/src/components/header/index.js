import React from 'react';
import './styles.css';

const Header = (props) => {

    return (
        <header className="flex-container">
            <h1><span className="highlight">Inatel</span>DM121</h1>
            <nav>
                <ul>
                    <li><a href="home" className="highlight">Home</a></li>
                    <li><a href="services">Serviços</a></li>
                    <li><a href="sobre">Sobre</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header