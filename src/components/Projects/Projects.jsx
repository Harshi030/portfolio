import React from 'react'
import "./Projects.css"
import data from "./data.json"
const Projects = () => {
  return (
    <div id='project' className='project--container'>
    <h1>PROJECTS</h1>
    <section className='project-cards'>
      {data.map((project)=>{
        return(
          <a href={project.source} target={'_blank'}>
            <div className='project-card'>
              <img src={project.imageSrc} className='project-image' alt="" />
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </a>
        )
      })}
    </section>
     
    </div>
  )
}

export default Projects