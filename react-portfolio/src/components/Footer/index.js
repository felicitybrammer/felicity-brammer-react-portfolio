import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; 

function Footer() {

    return (
        <footer>
            <ul className="social-list">
             <li className="social-list__item">
                 <a className="social-list__link" href="https://www.linkedin.com/in/felicitybrammer/">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </li>
            <li className="social-list__item">
                 <a className="social-list__link" href="https://github.com/felicitybrammer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </li>
             
         </ul>
        </footer>
    );
}

export default Footer;