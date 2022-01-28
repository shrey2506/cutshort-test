import React, { useEffect, useState } from 'react';
import User from '../../img/user.svg';
import HighlightedUser from '../../img/highlightedUser.svg';
import HighlightedGroup from '../../img/highlightedGroup.svg';
import Group from '../../img/group.svg';
import './selectPlanComponent.css';

const SelectPlanComponent = ({handleChange}) => {
  const [toggle,setToggle]=useState(0);

  useEffect(()=>{
       handleChange("singlePlan")
  },[])

  //intinially single plan will be selected as the default.
  const ToggleCards=()=>{
       if(toggle===0){
          setToggle(1);
          handleChange("groupPlan")
       }else if(toggle===1){
          setToggle(0);
          handleChange("singlePlan")
          
       }
  }

  return <div className="plan-container">
            <h1>How are you planning to use Eden?</h1>
            <h5 style={{color: 'grey', marginTop: '0'}}>We'll streamline your setup experience accordingly.</h5>
            <div className="card-grid" >
                <div className={toggle===0? "plan-card plan-card-active":"plan-card"} onClick={ToggleCards}>
                     <img className="card-img" alt="logo" src={toggle===0? HighlightedUser: User} />
                     <div className="card-heading">For Myself</div>
                     <div className="card-description">Write better. Think more clearly. Stay organized.</div>
                </div>
                <div className={toggle===1? "plan-card plan-card-active":"plan-card"} onClick={ToggleCards}>
                     <img className="card-img" alt="logo" src={toggle===1? HighlightedGroup: Group} />
                     <div className="card-heading">With my team</div>
                     <div className="card-description">Wikis, docs, tasks and projects, all in one place</div>
                </div>
            </div>

        </div>


};

export default SelectPlanComponent;