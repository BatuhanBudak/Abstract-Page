import Nav from "./Nav";
import Image from "next/image";
import logo from "../public/logo.svg";
import useChangeClassName from "../hooks/useChangeClassName";

export default function Header() {
  const {
    headerClassName,
    searchToggled,
    navToggled,
    toggleSearch,
    closeNav,
    toggleNav,
  } = useChangeClassName();

  return (
    <header className={headerClassName}>
      <div className="header-left-links">
        <a
          className="header-left-link header-left-link--first  logo-svg"
          href=""
        >
          <Image src={logo} alt="Abstract Logo" />
        </a>
        <a
          className="header-left-link header-left-link--second border-left"
          href=""
        >
          {" "}
          Help Center
        </a>
      </div>
      <div className="header-button-group">
        <button
          className="search-toggle"
          aria-expanded={searchToggled}
          onClick={(e) => toggleSearch(e)}
          aria-controls="mobile-search"
        ></button>
        <button
          className="nav-toggle"
          aria-expanded={navToggled}
          onClick={(e) => toggleNav(e)}
        >
          <span className="hamburger"></span>
        </button>
      </div>
      <div className="mobile-search-container" id="mobile-search">
        <div className="mobile-search-container-inner">
          <form className="mobile-search-form">
            <input
              className="mobile-search-input"
              type="search"
              name="mobile-search"
              placeholder="Search"
            />
            <button
              onClick={(e) => toggleSearch(e)}
              className="search-close-button btn"
            >
              {" "}
              <Image
                className="close-svg"
                src="/close.svg"
                width={24}
                height={24}
                alt="search icon"
              />
            </button>
          </form>
        </div>
      </div>
      <Nav closeNav={(e) => closeNav(e)} />
    </header>
  );
}
