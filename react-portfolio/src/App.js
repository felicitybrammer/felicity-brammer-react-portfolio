import React from 'react';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import Project from './components/Project';
import './App.css';

function App() {
  return (
    <div>
      <Header></Header>
      <main>  
        <Home></Home>
        <About></About>
        <Project></Project>
      </main>
    </div>
  );
}

export default App;
