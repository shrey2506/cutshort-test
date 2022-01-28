import React from 'react';
import './finalPageComponent.css';

const FinalPageComponent = ({name}) => {
  return <div className="final-container">
      <div className="behind">
        <div className="check">
        </div>
      </div>    

      <h1>Congratulations, {name}!</h1>
      <h5 style={{color: 'grey', marginTop: '0'}}>You have completed onboarding, you can start using the Eden!</h5>

  </div>;
};

export default FinalPageComponent;
