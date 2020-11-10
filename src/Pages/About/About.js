import React from 'react';
import { AboutItem, TopNav } from '../../Components';

const About = () => {
  return (
    <section className="about-page">
      <TopNav title="About"/>
      <div className="container">
        <AboutItem 
          mute="App Name"
          title="Create Your Friend"
        />
        <AboutItem 
          mute="Author"
          title="Serlina Utami"
        />
        <AboutItem 
          mute="Version"
          title="1.0.0"
        />
      </div>
    </section>
  )
}

export default About;