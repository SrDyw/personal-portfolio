import React from 'react';
// components
import Banner from './components/Banner';
import Nav from './components/Nav';
import About from './components/About';
import Settings from './components/Settings';
import Skills from './components/Skills';

const App = () => {
  return (
    <div>
      <Banner />
      <About/>
      <Skills/>
      <Nav />
      <Settings/>
    </div>
  );
};

export default App;
