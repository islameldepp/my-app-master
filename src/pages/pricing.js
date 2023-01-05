import Header from "../comp/header";

const Pricing = () => {
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

export default Pricing;
