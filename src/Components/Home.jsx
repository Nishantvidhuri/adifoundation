import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";
import image from "../images/home-wallpaper.jpg";

const imageAltText = "The image depicts a minimalist design featuring a laptop placed in the center. The laptop screen displays a simple function, show_love(), which echoes the word 'LOVE'. This clever design symbolizes a developer's passion for coding, with the laptop serving as the heart of the expression. To complete the message, the phrase 'I ❤️ CODING' is visually represented, blending creativity with simplicity in the world of software development.";

const Home = ({ name, title }) => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt="" />
      <div style={{ position: "absolute", top: "5rem", left: "2rem", width: "17rem" }}>
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
      <div
        style={{ position: "absolute", bottom: "3rem", left: "50%", transform: "translateX(-50%)" }}
        onClick={scrollToAbout}
      >
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem", cursor: "pointer" }} alt={imageAltText} />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
