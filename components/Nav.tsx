import React from "react";
import { SyntheticEvent } from "react";

export default function Nav({
  closeNav,
}: {
  closeNav: (e: SyntheticEvent) => void;
}) {
  return (
    <nav className="nav" id="primary-navigation">
      <a
        href=""
        className="nav__link nav__link-first"
        onClick={(e) => closeNav(e)}
      >
        Submit a request
      </a>
      <a
        href=""
        className="nav__link nav__link-second"
        onClick={(e) => closeNav(e)}
      >
        Sign in
      </a>
    </nav>
  );
}
