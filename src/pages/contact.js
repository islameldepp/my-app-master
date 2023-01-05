import Header from "../comp/header";

const Contact = () => {
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

export default Contact;
