import React from 'react';

function Resume() {
    return (
        <div id='resume'>
            <h2>Technical Skills</h2>
            <ul className='skills center'>
                <li>✦ JavaScript, Node.js, MySQL, Express, MondoDB, JSON, GraphQL</li>
                <li>✦ React, AJAX, jQuery, HTML5, CSS3, Bootstrap, Responsive Design</li>
                <li>✦ Agile Development, MERN stack, Rest, Object-Oriented Design, Git</li>
                <li>✦ Fan of unit tests, functional programming, ES6</li>
                <li>✦ Open to evolving in: Java, Python and many more</li>
            </ul>
            <br /><br /><br /><br />
            <a href={require('../../assets/tech-resume.pdf')}>Take a look at my Resume</a>
        </div>
    )

}

export default Resume;