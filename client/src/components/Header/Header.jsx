import React from "react";
import './Header.scss'

const Header = ({setFlagModal}) => {
    return (
        <header className="header">
            <div className="header__logo">
                <img src="/img/logo-header.svg" alt="" />
            </div>
            <button onClick={() => setFlagModal(true)} className="header__btn">Написать</button>
            <button onClick={() => setFlagModal(true)} className="header__btn mobile"><img src="/img/mobile-write.svg" alt="" /></button>
        </header>
    );
};

export default Header;
