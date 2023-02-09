import React from "react";

import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <div>
                <h1 className="header_title">React PLAYER</h1>
                <h2 className="header_subtitle">
                    Desenvolvido por: Fillipe Miguel
                </h2>
            </div>

            <ul className="header_menu">
                <li>
                    <a href="#">Sobre</a>
                </li>

                <li>
                    <a href="#">GitHub</a>
                </li>
            </ul>
        </div>
    );
};

export default Header;
