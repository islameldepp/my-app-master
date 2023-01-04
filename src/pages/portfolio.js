import React from 'react';

const Portfolio = () => {
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
        {/*start design*/}
        <div className="design">
          <div className="image">
            <img src="image/mobile.png" alt="" />
          </div>
          <div className="text">
            <div className="inertext">
              <h2>OUR DESIGN COMES WITH...</h2>
              <div className="rows">
                <div className="row">
                  <i className="fa-solid fa-desktop" />
                  <p>Responsive Design</p>
                </div>
                <div className="row">
                  <i className="fa-solid fa-desktop" />
                  <p>Responsive Design</p>
                </div>
                <div className="row">
                  <i className="fa-solid fa-desktop" />
                  <p>Responsive Design</p>
                </div>
                <div className="row">
                  <i className="fa-solid fa-desktop" />
                  <p>Responsive Design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*end design*/}
        {/*start main-heading*/}
        <div className="portfolio">
          <div className="container">
            <h2>portfolio</h2>
            <p>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Mauris blandit aliquet elit, eget tincidunt.
            </p>
          </div>
        </div>
        {/*end main-heading*/}
        {/*start shuffle*/}
        <div className="shuffle">
          <div className="container">
            <ul>
              <li className="active">All</li>
              <li>App</li>
              <li>Photo</li>
              <li>Web</li>
              <li>Print</li>
            </ul>
          </div>
        </div>
        {/*end shuffle*/}
        {/*start portpic*/}
        <div className="portpic">
          <div className="card">
            <img src="image/basket.jpg" alt="" />
            <div className="caption">
              <h4>Awesome Image</h4>
              <p>Photography</p>
            </div>
          </div>
          <div className="card">
            <img src="image/basket.jpg" alt="" />
            <div className="caption">
              <h4>Awesome Image</h4>
              <p>Photography</p>
            </div>
          </div>
          <div className="card">
            <img src="image/basket.jpg" alt="" />
            <div className="caption">
              <h4>Awesome Image</h4>
              <p>Photography</p>
            </div>
          </div>
          <div className="card">
            <img src="image/basket.jpg" alt="" />
            <div className="caption">
              <h4>Awesome Image</h4>
              <p>Photography</p>
            </div>
          </div>
          <div className="card">
            <img src="image/basket.jpg" alt="" />
            <div className="caption">
              <h4>Awesome Image</h4>
              <p>Photography</p>
            </div>
          </div>
          <div className="card">
            <img src="image/basket.jpg" alt="" />
            <div className="caption">
              <h4>Awesome Image</h4>
              <p>Photography</p>
            </div>
          </div>
          <div className="card">
            <img src="image/basket.jpg" alt="" />
            <div className="caption">
              <h4>Awesome Image</h4>
              <p>Photography</p>
            </div>
          </div>
          <div className="card">
            <img src="image/basket.jpg" alt="" />
            <div className="caption">
              <h4>Awesome Image</h4>
              <p>Photography</p>
            </div>
          </div>
          <a href="www" className="more">
            more
          </a>
        </div>
        {/*end portpic*/}

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
}

export default Portfolio;
