import React from "react";


// import '../../assets/images/portfolio-item-images/project-ranter.png';
// import '../../assets/images/portfolio-item-images/project-activity-music.png';
// import '../../assets/images/portfolio-item-images/project-notetaker.png';
// import '../../assets/images/portfolio-item-images/project-team-generator.png';
// import '../../assets/images/portfolio-item-images/project-password-generator.png';
// import '../../assets/images/portfolio-item-images/project-js-quiz.png';
// import '../../assets/images/portfolio-item-images/project-budget-tracker.png';

function Project(props) {

  const {
    id,
    url,
    github,
    title,
    tech,
    image
  } = props.project;

    return (
        <div className="flex-row card">

            <a className="project" id={id} target="_blank" rel="noreferrer" href={url}>
                 {/* <img 
                    src={require('../../assets/images/portfolio-item-images/' + {image} + '.png')}
                    alt={title}
                />  */}
              <img src={image} alt={title}/> 
            </a>
            <h3>{title}</h3>
            <p>{tech}</p>
            <a href={github} target="_blank" rel="noreferrer">View GitHub Repo</a>   
        </div>
    )
}

export default Project;