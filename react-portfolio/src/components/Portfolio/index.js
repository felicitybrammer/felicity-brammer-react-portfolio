import React from 'react';
import Project from '../Project';


import image from '../../assets/css/images-links.css'
import projects from './projects';

//no state needed here
function Portfolio(props) {
  
    return (
        <section>
            <h1 id='portfolio'>My Work</h1>
            
            <div className="flex-row">
              {projects.map((project) => (
                <Project project={project} key={project.id} />
              ))}
            </div>
        </section>
    );
}

export default Portfolio;