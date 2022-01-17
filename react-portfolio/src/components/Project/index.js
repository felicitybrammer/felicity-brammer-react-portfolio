import React from 'react';
import screenshot from '../../assets/images/portfolio-item-images/Ranter.png';

function Project(props) {
    const currentProject = {
        title: "Ranter",
        link1: 'link',
        link2: 'link'
    };

    return (
        <section>
            <h1>{currentProject.title}</h1>
            <p>{currentProject.link1}</p>
            <p>{currentProject.link2}</p>
            <div className="flex-row">
          <img
            src={screenshot}
            alt=""
            className="img-thumbnail mx-1"
          />
      </div>
        </section>
    );
}

export default Project;