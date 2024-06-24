import React from 'react'
import "./About.css"
import image from './myimage.jpg'
import resume from "./Harshith Lavuluri Full Stack Developer.pdf"
const About = () => {
  return (
    <div id='about' className='about--container'>
      <img src={image} className='my-image' alt="" />
      <article>
      <h1>About Me</h1>
      <h2>Full Stack Developer</h2>
      <p>Recent graduate with a Bachelor's of Engineering in Electronics and Communication Engineering from Sathyabama Institute of Science and Technology, Chennai.I have developed a keen interest in full stack development and software development. My coursework and projects have equipped me with a strong understanding of frontend and backend technologies, making me a versatile and adaptable developer.</p>
      <p>Eager to apply my skills in a dynamic and challenging environment, I am looking forward to contributing to innovative projects and collaborating with experienced professionals to deliver high-quality software solutions. I am committed to continuous learning and staying updated with the latest industry trends to enhance my expertise as a Software developer.</p>
      <button><a href={resume} target={'_blank'} >Resume </a></button>
      </article>
    </div>
  )
}

export default About