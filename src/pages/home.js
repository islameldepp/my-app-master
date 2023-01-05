import Header from "../comp/header";

const Home = () => {
  return (
    <>
      <Header />
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
      {/*start video*/}
      <div className="video">
        <video autoPlay="" muted="" loop="">
          <source src="image/video.mp4" type="video/mp4" />
        </video>
        <div className="text">
          <h2>SUPER AWESOME VIDEO HERE</h2>
          <p>Its All You Need</p>
          <button>see more</button>
        </div>
      </div>
      {/*end video*/}
      {/*start about*/}
      <div className="about">
        <div className="container">
          <h2>about us</h2>
          <p>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Mauris blandit aliquet elit, eget tincidunt.
          </p>
          <img src="image/about.png" alt="" />
        </div>
      </div>
      {/*end about*/}
      {/*start status*/}
      <div className="status">
        <div className="container">
          <div className="box">
            <i className="fas fa-mug-hot" />
            <div className="number">1.236</div>
            <p>Coffee Drinks</p>
          </div>
          <div className="box">
            <i className="far fa-folder" />
            <div className="number">256</div>
            <p>Completed Projects</p>
          </div>
          <div className="box">
            <i className="far fa-envelope" />
            <div className="number">1.743</div>
            <p>Mail Sent</p>
          </div>
          <div className="box">
            <i className="fas fa-trophy" />
            <div className="number">17</div>
            <p>Awards Received</p>
          </div>
        </div>
      </div>
      {/*end status*/}
      {/*start skils*/}
      <div className="our-skils">
        <div className="container">
          <div className="testimonials">
            <h3>testimonials</h3>
            <p>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Mauris blandit aliquet elit, eget tincidunt.
            </p>
            <div className="card">
              <img src="image/skills-01.jpg" alt="" />
              <div className="text">
                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                Mauris blandit aliquet elit, eget tincidunt.
                <p>John Doe, CEO</p>
              </div>
            </div>
            <div className="card">
              <img src="image/skills-02.jpg" alt="" />
              <div className="text">
                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                Mauris blandit aliquet elit, eget tincidunt.
                <p>John Doe, CEO</p>
              </div>
            </div>
            <ul className="bullets">
              <li />
              <li className="active" />
              <li />
            </ul>
          </div>
          <div className="skils">
            <h3>skils</h3>
            <p>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Mauris blandit aliquet elit, eget tincidunt.
            </p>
            <div className="prog-holder">
              <h4>adope</h4>
              <div className="prog">
                <span style={{ width: "90%" }} data-progress="90%" />
              </div>
            </div>
            <div className="prog-holder">
              <h4>html &amp; css</h4>
              <div className="prog">
                <span style={{ width: "85%" }} data-progress="85%" />
              </div>
            </div>
            <div className="prog-holder">
              <h4>javascript</h4>
              <div className="prog">
                <span style={{ width: "80%" }} data-progress="80%" />
              </div>
            </div>
            <div className="prog-holder">
              <h4>php</h4>
              <div className="prog">
                <span style={{ width: "90%" }} data-progress="90%" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*end skils*/}
      {/*start quote*/}
      <div className="quote">
        <div className="container">
          <q>
            accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet
            elit, eget tincidunt.
          </q>
          <span>John Doe</span>
        </div>
      </div>
      {/*end quote*/}
      {/*start pricing*/}
      <div className="pricing">
        <div className="container">
          <h2>pricing</h2>
          <p className="pri">
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Mauris blandit aliquet elit, eget tincidunt.
          </p>
          <div className="plans">
            <div className="plan">
              <div className="head-price">
                <h3>basic</h3>
                <span>19</span>
              </div>
              <ul>
                <li>Feature No 1</li>
                <li>Extra Feature</li>
                <li>Extra Feature No 2</li>
                <li>Feature</li>
              </ul>
              <div className="foot-price">
                <a href="www">Buy Now</a>
              </div>
            </div>
            <div className="plan">
              <div className="head-price">
                <h3>premium</h3>
                <span>29</span>
              </div>
              <ul>
                <li>Feature No 1</li>
                <li>Extra Feature</li>
                <li>Extra Feature No 2</li>
                <li>Feature</li>
              </ul>
              <div className="foot-price">
                <a href="www">Buy Now</a>
              </div>
            </div>
            <div className="plan">
              <div className="head-price">
                <h3>pro</h3>
                <span>39</span>
              </div>
              <ul>
                <li>Feature No 1</li>
                <li>Extra Feature</li>
                <li>Extra Feature No 2</li>
                <li>Feature</li>
              </ul>
              <div className="foot-price">
                <a href="www">Buy Now</a>
              </div>
            </div>
            <div className="plan">
              <div className="head-price">
                <h3>platinum</h3>
                <span>49</span>
              </div>
              <ul>
                <li>Feature No 1</li>
                <li>Extra Feature</li>
                <li>Extra Feature No 2</li>
                <li>Feature</li>
              </ul>
              <div className="foot-price">
                <a href="www">Buy Now</a>
              </div>
            </div>
          </div>
          <p className="contact-text">contact us if you have special request</p>
          <a href="www" className="contact-link">
            Contact Us
          </a>
        </div>
      </div>
      {/*end pricing*/}
      {/*start subscribe*/}
      <div className="subscribe">
        <div className="container">
          <form action="">
            <i className="far fa-envelope fa-lg" />
            <input type="email" name="mail" placeholder="Your Email" />
            <input type="submit" defaultValue="subscribe" />
          </form>
          <p>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Mauris blan dit aliquet elit, eget tincidunt.
          </p>
        </div>
      </div>
      {/*end subscribe*/}
      {/*start contact*/}
      <div className="contact">
        <div className="container">
          <h2>contact us</h2>
          <p>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Mauris blandit aliquet elit, eget tincidunt.
          </p>
          <div className="content">
            <form action="">
              <input
                className="main-input"
                type="text"
                name="name"
                placeholder="Your Name"
              />
              <input
                className="main-input"
                type="email"
                name="mail"
                placeholder="Your Email"
              />
              <textarea
                className="main-input"
                name="message"
                placeholder="Your Message"
                defaultValue={""}
              />
              <input type="submit" defaultValue="Send Message" />
            </form>
            <div className="info">
              <h4>Get In Touch</h4>
              <span className="phone">+00 123.456.789</span>
              <span className="phone">+00 123.456.789</span>
              <h4>Where We Are</h4>
              <address>
                Awesome Address 17
                <br />
                New York, NYC
                <br />
                123-4567-890
                <br />
                USA
              </address>
            </div>
          </div>
        </div>
      </div>
      {/*end contact*/}
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

export default Home;
