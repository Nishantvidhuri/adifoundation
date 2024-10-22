/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I’m Nishant Vidhuri, currently honing my skills as a front-end developer at Abdul Kalam University. My focus is on building visually appealing interfaces that offer a smooth user experience. I enjoy experimenting with creative design solutions, ensuring every project reflects both innovation and usability. With a strong foundation in modern web technologies, I strive to create interfaces that are not just beautiful but also highly functional.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Front-end development",
  "UI/UX design",
  "Responsive web design",
  "User experience",
  "React.js",
  "Tailwind CSS",
  "Creative problem-solving",
  "Prototyping and wireframing",
];


/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about crafting seamless user experiences through innovative front-end development. By leveraging my expertise in React.js and UI/UX design, I constantly seek new and creative ways to build responsive, user-friendly interfaces that make technology more intuitive and accessible to everyone.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
