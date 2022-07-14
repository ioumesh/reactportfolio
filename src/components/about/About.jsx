import "./about.css";
import Award from "../../img/award.png";
import AboutMe from "../../img/about.svg";
const About = () => {
  return (
    <div className="a" id="About">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card" style={{ border: "1px solid #05a081" }}>
          <img
            style={{ objectFit: "cover" }}
            src={AboutMe}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        {/* <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p> */}
        <p className="a-desc">
          Hello 👋 I am Umesh Kumar, a <b>software developer</b> based in Delhi,
          India. I develop full blown web applications using the MERN Stack, but
          I mostly love working on the <b>frontend </b>using CSS and{" "}
          <b>React</b>.
        </p>
        {/* <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
