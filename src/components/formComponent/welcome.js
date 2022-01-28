import React from 'react';
import './formComponent.css';

const WelcomeFormComponent = ({ handleChange }) => {
  return (
        <div className="form-container">
            <h1>Welcome! First things first...</h1>
            <h5 style={{color: 'grey', marginTop: '0'}}>You can always change them later.</h5>

            <div className="form">
                <label>Full Name</label>
                <input  type="text" name="fullName" placeholder="Steve Jobs" onChange={handleChange("fullName")}/> 

                <label>Display Name</label>
                <input className="displayName" type="text" name="displayName" placeholder="Steve" onChange={handleChange("displayName")}/> 
            </div>
        </div>
  );
};

export default WelcomeFormComponent;
