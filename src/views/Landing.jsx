import { Layout } from "../layout";
import { Container } from "../components";
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
              <p className="line2">I like to make web sites into web <span className="standout">experiences.</span></p>
            </div>
            <div className="hero-right">
              <img src="./keith-profile.jpg" className="hero-pic" alt="keith sitting in a peaceful pose next to a statue" title="me and a dear friend"/>
            </div>
          </div>
          <hr />
        </Container>
      </div>
    </Layout>
  );
};

export default Landing;
