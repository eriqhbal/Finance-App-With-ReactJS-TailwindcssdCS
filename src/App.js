import React from 'react';

// Import Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import Newslatter from './components/Newslatter';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Analytics/>
      <Newslatter/>
    </div>
  );
}

export default App;
