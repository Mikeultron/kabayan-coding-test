import React from 'react';
import './splash.scss';
import { useHistory } from 'react-router-dom';

// Components
import { Button } from '../../Components';
import { HomeIllustration } from '../../Assets';

const Splash = () => {
  const history = useHistory();
  return (
    <section className="home-page">
      <div className="container">
        <div className="content-title">
          <h1>Create Your Virtual Friend</h1>
        </div>
        <div className="illustration">
          <img src={HomeIllustration} alt="Illustration"/>
        </div>
        <Button title="Get Started" onClick={() => history.push('/onboard')}/>
      </div>
    </section>
  )
}

export default Splash