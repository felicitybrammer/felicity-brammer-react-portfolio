import React from 'react';

function Header() {
    //these links don't go anywhere yet
    
  const navElements = [
    { name: 'About Me', href: '#about'},
    { name: 'Portfolio', href: '#portfolio'},
    { name: 'Resume', href: '#resume'}
  ];

  function navElSelected(name) {
      console.log(`${name} clicked`) //works!
  }

  return (
    <header>
        <h2>
            <a href='/'>
                <span role='img' aria-label='code'><i className="fas fa-code fa-2x"></i></span>
            </a>
        </h2>
        <nav>
            <ul className='flex-row'>
                {navElements.map ((navElement) => (
                    <li
                        className='mx-2'
                        key={navElement.name}
                        >
                            <span onClick={navElSelected(navElement.name)} >
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