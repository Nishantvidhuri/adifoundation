/**
 * Portfolio component
 *
 * Highlights some of your creations. These can be websites, UI/UX designs,
 * open source contributions, articles you've written, and more.
 *
 * This is a great area for you to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/project.png";

const imageAltText = "A vibrant and creative workspace filled with design elements, featuring a collage of diverse project snapshots. At the center of the workspace, a laptop sits as the hub of creativity, surrounded by projects that demonstrate innovation in front-end development, from sleek UIs to interactive applications. Each image in the collage represents unique challenges solved, reflecting the developer's journey through various tools and technologies, all brought together in this dynamic display of craftsmanship";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "CineChronicle - Movie Rating Platform",
    description:
      "A React-based movie rating platform with sections for trending movies, TV shows, and more. Styled using Tailwind CSS.",
    url: "https://cinemachronicle.netlify.app/",
  },
  {
    title: "Dev Detective",
    description: "A developer profile search tool that allows you to search and explore GitHub profiles. Built with JavaScript, it provides insights into repositories, followers, and more.",
    url: "https://nishantvidhuri.github.io/Dev-Detective/"
  },
  
 {
    title: "Password Generator",
    description:
      "A simple password generator application created using JavaScript and hosted on GitHub Pages.",
    url: "https://nishantvidhuri.github.io/Password-Generator/",
  },
  {
    title: "ExoApe Landing Page Clone",
    description:
      "A clone of the ExoApe landing page built using Vite and Tailwind CSS, demonstrating my front-end development skills.",
    url: "https://exoape-landing-clone.vercel.app/",
  }
  
  
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
      <div style={{ maxWidth: "50%", alignSelf: "center" }}>
    <img
      src={image}
      style={{ height: "auto", width: "100%", objectFit: "cover" }}
      alt={imageAltText}
    />
</div>

        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
