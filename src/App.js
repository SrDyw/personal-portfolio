import React from 'react';
// components
import Banner from './components/Banner';
import Nav from './components/Nav';
import About from './components/About';
import Settings from './components/Settings';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Banner />
      <About/>
      <Skills/>
      <Projects/>
      <Footer/>
      <Nav />
      <Settings/>
    </div>
  );
};

export default App;
