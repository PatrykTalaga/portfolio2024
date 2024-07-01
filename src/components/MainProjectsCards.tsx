import "./mainProjectsCards.css";

import projects from "../assets/projects";

export default function MainProjectsCards() {
  return (
    <div className="cards-container">
      {projects.map((project) => (
        <div className="card" key={project.title}>
          {/* <div className="card"> */}
          <h1>{project.title}</h1>
          <div className="video-containter">
            <iframe
              width="95%"
              height="100%"
              src={`https://www.youtube.com/embed/${project.embedId}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
              className="yt-embed"
            />
          </div>
          {project.tools !== "" && (
            <p className="subtitle">
              <b>{project.tools}</b>
            </p>
          )}
          <p>{project.text}</p>
          <a href={project.github}>
            <b>Github: {project.github}</b>
          </a>
        </div>
        /*  </div> */
      ))}
    </div>
  );
}
