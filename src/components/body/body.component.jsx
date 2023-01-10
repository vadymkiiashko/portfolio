import React from "react";
import "../../sass/components/body.styles.scss";
import projects from "../../utils/data.js";
import ProjectCard from "./projectcard.component";
import { useSelector, useDispatch } from "react-redux";
import About from "./about.component";


const Body = () => {
 // const { projects } = useSelector((state) => state.project);
  //const dispatch = useDispatch();

  return (
    <div className='body-conttainer'>
      {projects.map((project, id) => (
        <ProjectCard key={id} {...project} />
      ))}
    
    </div>
  );
};

export default Body;
