import React from "react";

const Header = () => {
  return (
    <div>
      {/*start header */}
      <header className="head">
        <div className="container">
          <div className="logo">
            <img src="image/logo.png" alt="" />
          </div>
          <div className="nav">
            <i className="fas fa-bars toggle" />
            <div className="links">
              <ul>
                <li>
                  <a className="active" href="/home">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/Services">Services</a>
                </li>
                <li>
                  <a href="/Portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="/About">About</a>
                </li>
                <li>
                  <a href="/Pricing">Pricing</a>
                </li>
                <li>
                  <a href="/Contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="form">
              <i className="fas fa-search" />
            </div>
          </div>
        </div>
      </header>
      {/* end header */}
    </div>
  );
};

export default Header;
