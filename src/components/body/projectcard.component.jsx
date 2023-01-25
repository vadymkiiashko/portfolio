import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ id, name, description }) => {
  console.log(name)
  return (
    <Link to={`/projects/:${id}`} style={{textDecoration:'none'}}>
      <div className='project-card'
      style={{
            backgroundImage: `linear-gradient(
              rgba(22, 34, 60, 0.85), 
              rgba(10, 10, 10, 0.45)
            ),url(../assets/img/${name.replaceAll(' ','').replace(name[0] , name[0].toLowerCase())}/snapshotImg.png)`,
            backgroundSize: 'cover',

          }}>
      
        <div className='project-card--info'>
          <span className="card-info--name">{name}</span>
          <span>{description}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
