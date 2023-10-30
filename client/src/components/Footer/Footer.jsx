import React from "react";
import { Link } from "react-scroll";

import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__title">Мой Дневничок</div>
            {/* <a href="" className="footer__btn">
                Наверх
            </a> */}
            <Link
                // ctiveClass="active"
                to="content"
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}
                className="footer__btn"
            >
                Наверх
            </Link>
        </footer>
    );
};

export default Footer;
