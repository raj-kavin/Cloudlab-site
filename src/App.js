import React, { useEffect } from 'react';
import './App.css';
import './components/Home';
import Projects from './components/Projects'
import Labcard from './components/Labcard';
import RewardsWhole from './components/RewardsWhole';
import Home from './components/Home';
import Objective from './components/Objective';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Faculty from './components/Faculty';
import Consultancy from './components/Consultancy';


import { useState } from 'react';

import Slider from "react-slick";



const images = [
  { url: "" },
  { url: "" },
  { url: "" },
  { url: "" },
  { url: "" },
]
function App() {

  const [data, setdata] = React.useState({});


  useEffect(() => {
    fetch('/response')
      .then((res) => res.json)
      .then((data) => setdata(data));
  }, [])



  return (
    <div className='parent'>

      <Navbar />
      <Home />
      <Objective />
      <Labcard />
      <Projects />
      <RewardsWhole />
      <section className="services-section" id="services-section">
        <Services />
      </section>
      <Consultancy />
      <Gallery />
      <section className='faculty-section' id='faculty-section'>
        <div className='main-faculty'>
          <div className="faculty-header"><h2>Faculty</h2></div>
          <Faculty />
        </div>
      </section>


      <Footer />
    </div>

  );
}

export default App;
