import React from "react";

export default function Nav({ closeNav }) {
    return (
        <nav className="nav" >
            <a href="/#services" className="nav__link nav__link-first" onClick={() => closeNav()}>
                Submit a request
            </a>
            <a href="/#services" className="nav__link" onClick={() => closeNav()}>
                Sign in
            </a>
            {/* <ul className="nav__list" id="primary-navigation">
                <li className="nav__item">
                    <a href="/#home" className="nav__link" onClick={() => closeNav()}>
                        Home
                    </a>
                </li>
                <li className="nav__item">
                    <a href="/#services" className="nav__link" onClick={() => closeNav()}>
                        Services
                    </a>
                </li>
                <li className="nav__item">
                    <a href="/#about" className="nav__link" onClick={() => closeNav()}>
                        About
                    </a>
                </li>
                <li className="nav__item">
                    <a href="/#work" className="nav__link" onClick={() => closeNav()}>
                        My Work
                    </a>
                </li>
            </ul> */}
        </nav>
    );
}
