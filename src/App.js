import React from 'react';

// Import Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import Newslatter from './components/Newslatter';
import Cards from './components/Cards';


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Analytics/>
      <Newslatter/>
      <Cards/>
    </div>
  );
}

export default App;
