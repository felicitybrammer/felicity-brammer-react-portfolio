import React from "react";
// import image from '../../assets/css/images-links.css'


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
                <img src={image}/>
            </a>
            <h3>{title}</h3>
            <p>{tech}</p>
            <a href={github} target="_blank" rel="noreferrer">View GitHub Repo</a>   
        </div>
    )
}

export default Project;