import React from "react";

const Services = () => {
  return (
    <>
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
                  <a className="active" href="#Home">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#Services">Services</a>
                </li>
                <li>
                  <a href="#Portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#About">About</a>
                </li>
                <li>
                  <a href="#Pricing">Pricing</a>
                </li>
                <li>
                  <a href="#Contact">Contact</a>
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
      {/* start landing */}
      <div className="landing">
        <div className="overlay" />
        <div className="text">
          <div className="intext">
            <h2>
              Hello World! <br />
              We Are Kasper We Make Art.
            </h2>
            <p>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
              Curabitur aliquet quam. Accumsan id imperdiet et, porttitor at
              sem. Mauris blandit aliquet elit, eget tincidunt.
            </p>
          </div>
        </div>
        <i className="fas fa-angle-left change-background fa-2x" />
        <i className="fas fa-angle-right change-background fa-2x" />
        <ul className="bullets">
          <li />
          <li className="active" />
          <li />
        </ul>
      </div>
      {/* end landing */}
      {/*start services*/}
      <div className="services">
        <div className="container">
          <h2>services</h2>
          <p className="spe">
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Mauris blandit aliquet elit, eget tincidunt.
          </p>
          <div className="allService">
            <div className="columOne">
              <div className="one serv">
                <i className="fas fa-desktop fa-3x" />
                <div className="text">
                  <h3>Vorem amet intuitive</h3>
                  <p>
                    Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                    sem. Mauris blandit aliquet elit, eget tincidunt nibh
                    pulvinar a. Curabitur aliquet quam.
                  </p>
                </div>
              </div>
              <div className="tow serv">
                <i className="fas fa-cog fa-3x" />
                <div className="text">
                  <h3>Vorem amet intuitive</h3>
                  <p>
                    Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                    sem. Mauris blandit aliquet elit, eget tincidunt nibh
                    pulvinar a. Curabitur aliquet quam.
                  </p>
                </div>
              </div>
            </div>
            <div className="columOne">
              <div className="three serv">
                <i className="fas fa-pencil-ruler fa-3x" />
                <div className="text">
                  <h3>Vorem amet intuitive</h3>
                  <p>
                    Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                    sem. Mauris blandit aliquet elit, eget tincidunt nibh
                    pulvinar a. Curabitur aliquet quam.
                  </p>
                </div>
              </div>
              <div className="four serv">
                <i className="fas fa-camera fa-3x" />
                <div className="text">
                  <h3>Vorem amet intuitive</h3>
                  <p>
                    Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                    sem. Mauris blandit aliquet elit, eget tincidunt nibh
                    pulvinar a. Curabitur aliquet quam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*end services*/}
      {/*start footer*/}
      <div className="footer">
        <div className="container">
          <img src="image/logo.png" alt="Logo" />
          <p>We Are Social</p>
          <div className="social-icons">
            <i className="fab fa-facebook-f" />
            <i className="fab fa-twitter" />
            <i className="fas fa-home" />
            <i className="fab fa-linkedin" />
          </div>
          <p className="copyright">
            © 2022 <span>Kasper</span> All Right Reserved
          </p>
        </div>
      </div>
      {/*end footer*/}
    </>
  );
};

export default Services;
