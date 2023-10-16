import { Layout } from "../layout";
import { Container, SectionTitle } from "../components";
import "../styles/Landing.scss";

const Landing = () => {
  return (
    <Layout>
      <div className="content">
        <Container>
          <div className="hero">
            <div className="hero-left">
              <h1>Hello, World.</h1>
              <p className="line1">Nice to meet you. I&apos;m Keith.</p>
              <p className="line2">
                As a front-end developer, I like to make web sites
                <br /> into web <span className="standout">experiences.</span>
              </p>
              <div className="btn-wrapper">
                <button
                  className="pop-btn"
                  onClick={() =>
                    (window.location.href =
                      "mailto:keithjohnsdev@gmail.com?subject=Hello!")
                  }
                >
                  SAY HELLO!
                </button>
              </div>
            </div>
            <div className="hero-right">
              <img
                src="./keith-profile.jpg"
                className="hero-pic"
                alt="keith sitting in a peaceful pose next to a statue"
                title="me and a dear friend"
              />
            </div>
          </div>
          <div className="philosophy section">
            <SectionTitle title="MY PHILOSOPHY" />
            <div className="text">
              <p>
                I believe that every created thing - be it a tangible object, or
                text and images on a screen - carries the mark of its creator.{" "}
                <br />
                <br />
                It has a soul, if you will.
              </p>
              <img src="./pillar-gradient.png" className="pillar left" />
              <img src="./pillar-gradient.png" className="pillar right" />
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Landing;
