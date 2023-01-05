import Header from '../comp/header';

const About = () => {
  return (
    <>
     <Header />

      {/* start landing */}
      <div className="landing">
        <div className="overlay" />
        <div className="text">
          <div className="intext">
            <h2>
              tray new branch <br />
              We Are Kasper We Make Art.
            </h2>
            <p>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
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

export default About;
