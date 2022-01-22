import React, { useState } from 'react';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';

import './App.css';

function App() {
  const [navElements] = useState([
    { name: 'About Me', href: '#about'},
    { name: 'Portfolio', href: '#portfolio'},
    { name: 'Resume', href:'#resume'},
    { name: 'Contact Me', href: '#contact'}
  ]);

  const [currentNavEl, setCurrentNavEl] = useState(navElements[0]);


  return (
    <div>
      <Header
        navElements={navElements}
        setCurrentNavEl={setCurrentNavEl}
        currentNavEl={currentNavEl}
      ></Header>
      <main>  
        <Home></Home>
        <About></About>
        <Resume></Resume>
        <Portfolio ></Portfolio>
        <Contact></Contact> 
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
