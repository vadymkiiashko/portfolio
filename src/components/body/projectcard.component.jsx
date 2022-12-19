import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({id , name , username , snapshotImg}) => {

  return (
    <Link to ={`/projects/:${id}`}>
    <div className='project-card'>
        <img className='project-car--image' src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`preview of the ${name} project`} />
        <div className='project-card--info'>
            <span>{name}</span>
            <span>{username}</span>
        </div>
    </div>
    </Link>
  )
}

export default ProjectCard
