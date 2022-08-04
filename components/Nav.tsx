import React from "react";

export default function Nav({ closeNav }) {

    return (
        <nav className="nav" id="primary-navigation">
            <a href="/#services" className="nav__link nav__link-first" onClick={() => closeNav()}>
                Submit a request
            </a>
            <a href="/#services" className="nav__link nav__link-second" onClick={() => closeNav()}>
                Sign in
            </a>
        </nav>
    );
}
