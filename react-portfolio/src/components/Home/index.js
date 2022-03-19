import React from "react";
import headshot from '../../assets/images/headshot-none.png';

function Home() {
    return (
        <div>
            <h1>Hi, I'm Felicity Brammer</h1>
            <img src={headshot} className='my-2 center'  alt='headshot' />
            <h2>Full Stack Developer</h2>
        </div>


    );
};

export default Home;


// my skills and stack, button to see projects and resume