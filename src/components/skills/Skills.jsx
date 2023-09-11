import React from 'react'
import Backend from './Backend'
import Frontend from './Frontend'
import Others from './Others'
import "./skill.css"

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My Technical Level</span>

        <div className="skills__container container grid">
            <Frontend />
            <Backend />
            
        </div>
        <div className="skills__container_others container grid">
        <Others />
        </div>
    </section>
  )
}

export default Skills