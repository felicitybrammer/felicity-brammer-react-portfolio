import React, { useEffect } from 'react';
// import About from '../About';
// import Portfolio from '../Portfolio';

function Header(props) {
 
  const {
      navElements = [],
      setCurrentNavEl,
      currentNavEl,
    } = props;

    useEffect(() => {
        document.title = currentNavEl.name;
    }, [currentNavEl]);

  return (
    <header className='flex-row px-1'>
        <h2>
            <a data-testid='link' href='/'>
                <span role='img' aria-label='code'>
                    {' '}
                    <i className="fas fa-code fa-2x"></i>
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
                                    <span>{navElement.name}</span>
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
                <li>
                    <span>Contact</span>
                </li>

            </ul>
        </nav>
    </header>
  );
}

export default Header;