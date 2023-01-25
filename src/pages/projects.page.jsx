import React from "react";
import "../sass/components/projects.styles.scss";
import projects from "../utils/data.js";
import ProjectCard from "../components/body/projectcard.component";
import { useSelector, useDispatch } from "react-redux";

const Projects = () => {
  // const { projects } = useSelector((state) => state.project);
  //const dispatch = useDispatch();

  return (
    <div className="projects">
      <div className="body-conttainer">
        {projects.map((project, id) => (
          <ProjectCard key={id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
