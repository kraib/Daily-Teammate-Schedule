import * as React from "react";
import logo from "./logo.png";

export default class Header extends React.Component<{}, any> {
  public render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
            Daily Teammate Schedule
          </a>
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Help
          </a>
        </div>
      </nav>
    );
  }
}
