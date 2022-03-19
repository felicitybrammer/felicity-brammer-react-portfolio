import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons'; 


function Header(props) {
 
  const {
    //   navElements = [],
      setCurrentNavEl,
      currentNavEl,
    } = props;

    

  return (
    <header className='flex flex-row flex-wrap:wrap' >
        
            <span role='img' aria-label='code'>
                {' '}
                <FontAwesomeIcon icon={faCode} />
            </span>
        
        <nav>
            <ul className='flex flex-row flex-wrap:wrap '>
                
                <li className={currentNavEl === 'Home' ? 'mx-2 navActive' : 'mx-2'}>
                    <span onClick={() => setCurrentNavEl('Home')}>Home</span>
                </li>
                <li className={currentNavEl === 'About Me' ? 'mx-2 navActive' : 'mx-2'}>
                    <span onClick={() => setCurrentNavEl('About Me')}>About Me</span>
                </li>
                <li className={currentNavEl === 'Portfolio' ? 'mx-2 navActive' : 'mx-2'}>
                    <span onClick={() => setCurrentNavEl('Portfolio')}>Portfolio</span>
                </li>
                <li className={currentNavEl === 'Resume' ? 'mx-2 navActive' : 'mx-2'}>
                <span onClick={() => setCurrentNavEl('Resume')}>Resume</span>
                </li>
                <li className={currentNavEl === 'Contact Me' ? 'mx-2 navActive' : 'mx-2'}>
                <span onClick={() => setCurrentNavEl('Contact Me')}>Contact Me</span>
                </li>

            </ul>
        </nav>
    </header>
  );
}

export default Header;