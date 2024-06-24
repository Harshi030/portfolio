import React from 'react'
import "./Skills.css"
import tick from "./tick.svg"
const Skills = () => {
  return (
    <div id='skill' className='skill--container'>
     
      <h1>SKILLS</h1>
      
      <section className='all-skills'>
      <div className='frontend'>
        <section>
          <img src={tick} alt="" className='tick-svg' />
          <p>HTML</p>
        </section>
        <section>
          <img src={tick} alt="" className='tick-svg' />
          <p>CSS</p>
        </section>
        <section>
          <img src={tick} alt="" className='tick-svg' />
          <p>JavaScript</p>
        </section>
      </div>
      <div className='framework'>
        <section>
          <img src={tick} alt="" className='tick-svg' />
          <p>ReactJS</p>
        </section>
        <section>
          <img src={tick} alt="" className='tick-svg' />
          <p>Django Framework</p>
        </section>
      </div>
      <div className='backend'>
        <section>
          <img src={tick} alt="" className='tick-svg' />
          <p>Python Programming</p>
        </section>
        <section>
          <img src={tick} alt="" className='tick-svg' />
          <p>SQL Database</p>
        </section>
      </div>
      </section>
    </div>
  )
}

export default Skills