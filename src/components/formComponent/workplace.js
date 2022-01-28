import React from 'react';
import './formComponent.css';

const WorkplaceFormComponent = ({handleChange}) => {
  return <div className="form-container">
            <h1>Let's set up a home for all your work</h1>
            <h5 style={{color: 'grey', marginTop: '0'}}>You can always create another workspace later.</h5>

            <div className="form">
                <label>Workplace Name</label>
                <input  type="text" name="workplaceName" placeholder="Eden" onChange={handleChange("workplaceName")}/> 

                <label>Workplace URL <span style={{color:'grey'}}>(optional)</span></label>
                <div className="row">
                    <span className="dropdown_btn">wwww.eden.com/</span>
                    <input className="url" type="text" name="workPlaceUrl" placeholder="Example" onChange={handleChange("workPlaceUrl")}/> 
                </div>
            </div>
        </div>
};

export default WorkplaceFormComponent;
