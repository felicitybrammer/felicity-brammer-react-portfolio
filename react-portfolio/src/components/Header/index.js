import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons'; 
import { capitalizeFirstLetter } from "../../utils/helpers";
// import About from '../About';
// import Portfolio from '../Portfolio';



// export class NavBar extends React.Component {
//   render() {
//     const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
//     const navLinks = pages.map(page => {
//       return (
//         <a href={'/' + page}>
//           {page}
//         </a>
//       )
//     });

//     return <nav>{navLinks}</nav>;
//   }
// }

function Header(props) {
 
  const {
      navElements = [],
      setCurrentNavEl,
      currentNavEl,
    } = props;

    // useEffect(() => {
    //     document.title = currentNavEl.name;
    // }, [currentNavEl]);

  return (
    <header className='flex-row px-1' >
        {/* <h1>Felicity Brammer</h1> */}
        <h2>
            <a data-testid='link' href='/'>
                <span role='img' aria-label='code'>
                    {' '}
                    <FontAwesomeIcon icon={faCode} />
                </span>
            </a>
        </h2>
        <nav>
            <ul className='flex-row'>
                {navElements.map ((navElement) => (
                    <li
                        className={`mx-2 ${
                        currentNavEl.name === navElement.name && 'navActive'
                        }`} key={navElement.name}
                        >
                            <span onClick={() => {
                                setCurrentNavEl(navElement)
                            }} 
                            >
                                <a href={navElement.href}>
                                    <span>{capitalizeFirstLetter(navElement.name)}</span>
                                </a>
                            </span>
                        </li>
                ))}
                {/* <li className='mx-2'>
                    <a href='#about'>
                        About Me
                    </a>
                </li>
                <li className='mx-2'>
                    <a href='#portfolio'>
                        Portfolio
                    </a>
                </li>
                <li className='mx-2'>
                    <a href='#resume'>
                        Resume
                    </a>
                </li> */}
                {/* <li>
                    <span>Contact</span>
                </li> */}

            </ul>
        </nav>
    </header>
  );
}

export default Header;