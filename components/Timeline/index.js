import React from 'react'
import FadeIn from '../FadeIn';

const Timeline = ({ text }) => {
  return (
    <div className="timeline" id="timeline">
      <FadeIn divClass="timeline__center" fadeFrom={"bottom"}>
        <h2>{text.title}</h2>
        {
          text.experiences.map(exp => (
            <div className='timeline__group' key={exp.date}>
              <h3>{exp.company}</h3>
            <div className="timeline__group__info">
              <time>{exp.date}</time>
              <h4 className="timeline__group__info--title">{exp.role}</h4>
            </div>
            <ul style={{ marginLeft: '1.5rem' }}>
              {exp.tasks.map(task => (<li key={task}>{task}</li>))}
            </ul>
          </div>            
          ))
        }
        </FadeIn>
      </div>
  )
}

export default Timeline