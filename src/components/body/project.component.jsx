import React from "react";
import { useParams } from "react-router-dom";
import projects from "../../utils/data.js";

const Project = () => {
  const { id } = useParams();
  const { name, description, snapshotImg, externalUrl } = projects.find(proj => proj.id === Number(id.slice(1)))
  return (
    <a href={externalUrl} target='blank'>
      <div>
        <span>{name}</span>
      </div>
    </a>
  );
};

export default Project;
