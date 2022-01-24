import React from 'react';
import headshot from '../../assets/images/headshot-dots.png';

function About() {
    return (
        <section className='my-5'>
            <img src={headshot} className='my-2' alt='headshot' />
            <h1 id='about'>Who I am</h1>
            
            <p>I love math problems. I love them so much that I became a math teacher and taught teenagers to love math problems too. (Or, at least I taught them to laugh at my jokes)</p>
            <br/>
            <p>When I started to include coding skills in my curriculum, I realized that I wanted to be the one to find innovative and effective solutions to real-world problems.</p>
            <br/>
            <p>Now I'm looking to be part of something bigger, outside of the classroom. </p>
            <br/>
            <p>I currently work with JavaScript frameworks, and I'm hoping to grow and evolve by developing my skills using databases, back-end technologies, and many more.</p>   
            <br/>
            <p>I'm really excited to take the leap with the right organization and to start building!</p>
            <br/>
            <h1 id='what-I-do'>What I do</h1>
            <div class='row'>
                <div class='column'>
                    <h2>Code</h2>
                    <p>I love to code and and I love to solve problems.  I always seek to challenge myself and I can offer drive and commitment to building and maintaining high quality web applications.</p>
                </div>
                <div class='column'>
                    <h2>Refine</h2>
                    <p>I'm really interested in optimization for efficiency and scalability. I'm also a big fan of unit tests. I love to find ways to refactor and improve my code and to incorporate new ideas or technologies.</p>
                </div>
                <div class='column'>
                    <h2>Repeat</h2>
                    <p>Lifelong learning is my passion and I'm excited to keep growing and developing my skills and knowledge. I thrive in an environment dedicated to teamwork and cooperation.</p>
                </div>      
            </div>
        </section>
    );
}

export default About;