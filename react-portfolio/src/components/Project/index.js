import React from "react";
import Card from 'react-bootstrap/card';
import Button from 'react-bootstrap/button';

function Project() {

  const projects = [
    {
      id: 'project-okcreature',
      url: 'https://okcreature.herokuapp.com/',
      image: 'project-okcreature.jpeg',
      title: 'OkCreature',
      tech: 'React/MongoDB/GraphQL',
      github: 'https://github.com/felicitybrammer/pet-matcher'

    },
    {
        id: 'project-ranter',
        url: 'https://ranter2-0.herokuapp.com/login',
        image: 'project-ranter.png',
        title: 'Ranter',
        tech: 'SQL/MVC/JavaScript',
        github: 'https://github.com/felicitybrammer/Ranter'
    },
    {
        id: 'project-activity-music',
        url: 'https://felicitybrammer.github.io/activity-music/',
        image: 'project-activity-music.png',
        title: 'Train to the Beat',
        tech: 'JavaScript/Server-side APIs/CSS',
        github: 'https://github.com/felicitybrammer/activity-music',
    },
    {
        id: 'project-notetaker',
        url: 'https://never-forget-note-taker.herokuapp.com/',
        github: 'https://github.com/felicitybrammer/never-forget-note-taker',
        title: 'Never Forget! Note Taker',
        tech: 'Express/NodeJS/JavaScript',
        image: 'project-notetaker.png'
    },
    {
        id: 'project-team-generator',
        url: 'https://github.com/felicitybrammer/generate-my-team-profile',
        title: 'Generate My Team Profile',
        tech: 'NodeJS/OOP/TDD',
        image: 'project-team-generator.png'
    },
    {
        id: 'project-password-generator',
        url: 'https://felicitybrammer.github.io/supersecurity-password-generator/',
        github: 'https://felicitybrammer.github.io/supersecurity-password-generator/',
        title: 'SuperSecurity Password',
        tech: 'JavaScript/CSS/HTML',
        image: 'project-password-generator.png'
    },
    {
        id: 'project-js-quiz',
        url: 'https://felicitybrammer.github.io/challenge-yourself-js-quiz/',
        github: 'https://github.com/felicitybrammer/challenge-yourself-js-quiz',
        title: 'Challenge Yourself! JS Quiz',
        tech: 'JavaScript/HTML/CSS',
        image: 'project-js-quiz.png'
    },
    {
        id: 'project-budget-tracker',
        url: 'https://agile-gorge-53171.herokuapp.com/',
        github: 'https://github.com/felicitybrammer/my-finance-budget-tracker',
        title: 'MyFinance! Budget Tracker',
        tech: 'MongoDB/Express',
        image: 'project-budget-tracker.png'
    },
];

    return (
      <div className="flex-row card">
        {projects.map((info) => (
          <div>
            <Card className="text-center" bg="secondary">
                <Card.Img variant="top" src={require(`../../assets/images/${info.image}`)} alt={info.title}/>
                  <Card.Body>
                    <Card.Title>{info.title}</Card.Title>
                    <p>{info.tech}</p>
                      <div className="d-grid gap-2">
                        <Button variant="dark" size="lg" href={info.link}>Github Repository </Button>
                        <Button variant="dark" size="lg" href={info.deploy}>Deployed Site</Button>
                    </div>
                  </Card.Body>
              </Card>
          </div>
        ))}      
      </div>
    )
}

export default Project;