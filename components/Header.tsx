import { useEffect, useState } from "react";
import Nav from "./Nav";

import Image from 'next/image';
import logo from '../public/logo.svg'
import search from '../public/search.svg';

export default function Header() {
    const [navToggled, setNavToggled] = useState(false);
    const [searchToggled, setSearchToggled] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);

    function closeNav() {
        if (windowWidth > 900) return;
        setNavToggled(false);
    }
    function toggleNav() {
        setNavToggled((prev) => !prev);
    }
    function toggleSearch() {
        setSearchToggled((prev) => !prev);
    }


    function resizeListener() {
        setWindowWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", resizeListener);

        return () => window.removeEventListener("resize", resizeListener);
    });

    return (
        <header className={navToggled && windowWidth < 900 ? "nav-open" : ""}>
            <div className="header-left-links">
                <a className='header-left-link logo-svg' href=""><Image src={logo} alt="Abstract Logo" /></a>
                <a className='header-left-link header-left-link--second border-left' href=""> Help Center</a>
            </div>
            <div className="header-button-group">
                <button
                    className="search-toggle"
                    aria-expanded={searchToggled}
                    onClick={toggleSearch}
                    aria-controls="nav-search">
                    {/* <Image className="search-svg" src={search} alt="search icon" /> */}
                </button>
                <button
                    className="nav-toggle"
                    aria-expanded={navToggled}
                    onClick={toggleNav}
                    aria-controls="primary-navigation"
                >
                    <span className="hamburger"></span>
                    {/* <span className="sr-only">Menu</span> */}
                </button>
            </div>
            <Nav closeNav={closeNav} />
        </header>
    );
}
