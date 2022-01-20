import React, { useState } from "react";
//import projects from '../Portfolio/projects';


function Project(props) {

  const {
    id,
    url,
    github,
    title,
    tech
  } = props.project;

    return (
        <div className="flex-row">
            {/* {currentProject.map((project) => {
                <div key={currentProject.title}>
                    <h1 data-testid='h1tag'>{project.title}</h1>
                    <p>{currentProject.deployed}</p>
                    <p>{currentProject.github}</p>
                    <img
                        src={require(currentProject.screenshot)}
                        alt="project screenshot"
                    />
                </div>
                })
            } */}

            <a className="project" id={id} target="_blank"
                href={url}>
                    <h3>{title}</h3>
                    <p>{tech}</p>
                    <a href={github} target="_blank">View GitHub Repo</a>
            </a>
             
        </div>
    )
}

export default Project;