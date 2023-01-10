import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ id, name, description, externalUrl,snapshotImg }) => {
  return (
    <Link to={`/projects/:${id}`}>
      <div className='project-card'
      style={{
            backgroundImage: `linear-gradient(
              rgba(22, 34, 60, 0.85), 
              rgba(10, 10, 10, 0.45)
            ),url(${snapshotImg})`,

          }}>
      
        <div className='project-card--info'>
          <span>{name}</span>
          <span>{description}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
