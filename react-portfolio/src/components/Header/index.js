import React from 'react';

function Header() {

  const navElements = [
    { name: 'About Me', href: '#about'},
    { name: 'Portfolio', href: '#portfolio'},
    { name: 'Resume', href: '#resume'}
  ];

  return (
    <header>
        <h2>
            <a href='/'>
                <span role='img' aria-label='code'><i class="fas fa-code fa-2x"></i></span>
            </a>
        </h2>
        <nav>
            <ul className='flex-row'>
                {navElements.map ((navElement) => (
                    <li
                        className='mx-2'
                        key={navElement.name}
                        >
                            <a href={navElement.href}>
                                <span>{navElement.name}</span>
                            </a>
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