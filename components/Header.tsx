import { useState } from "react";
import Nav from "./Nav";

import Image from 'next/image';
import logo from '../public/logo.svg'
import useResize from "../hooks/useResize";
// import close from '../public/close.svg';

export default function Header() {
    const [navToggled, setNavToggled] = useState(false);
    const [searchToggled, setSearchToggled] = useState(false);
    const windowWidth = useResize();
    const desktopScreen = 1200;

    function closeNav() {
        if (windowWidth > desktopScreen) return;
        setNavToggled(false);
    }
    function toggleNav() {
        setNavToggled((prev) => !prev);
    }

    function toggleSearch(e: { preventDefault: () => void; }) {
        e.preventDefault();
        setSearchToggled((prev) => !prev);
    }

    function checkHeaderClassName() {
        if (navToggled && windowWidth < desktopScreen) {
            return "nav-open";
        } else if (searchToggled && windowWidth < desktopScreen) {
            return "search-open";
        } else {
            return "";
        }
    }

    return (
        <header className={checkHeaderClassName()}>
            <div className="header-left-links">
                <a className='header-left-link header-left-link--first  logo-svg' href=""><Image src={logo} alt="Abstract Logo" /></a>
                <a className='header-left-link header-left-link--second border-left' href=""> Help Center</a>
            </div>
            <div className="header-button-group">
                <button
                    className="search-toggle"
                    aria-expanded={searchToggled}
                    onClick={toggleSearch}
                    aria-controls="mobile-search">

                </button>
                <button
                    className="nav-toggle"
                    aria-expanded={navToggled}
                    onClick={toggleNav}
                    aria-controls="primary-navigation"
                >
                    <span className="hamburger"></span>
                </button>
            </div>
            <div className='mobile-search-container' id="mobile-search" >
                <div className='mobile-search-container-inner'>
                    <form className="mobile-search-form">
                        <input className="mobile-search-input" type="search" name="mobile-search" placeholder="Search" />
                        <button onClick={toggleSearch} className="search-close-button btn"> <Image className="close-svg" src='/close.svg' width={24} height={24} alt="search icon" /></button>
                    </form>
                </div>
            </div>
            <Nav closeNav={closeNav} />
        </header>
    );
}
