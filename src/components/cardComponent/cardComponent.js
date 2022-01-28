import React, { useState } from 'react';
import './cardComponent.css';
import Progressbar from '../progressBar/progressBar'
import WorkplaceComponent from '../formComponent/workplace';
import WelcomeComponent from '../formComponent/welcome';
import SelectPlanComponent from '../selectPlanComponent/selectPlanComponent';
import FinalPageComponent from '../finalPageComponent/finalPageComponent';
import logo from '../../img/logo.png'


const CardComponent = () => {
  const [message,setMessage]=useState('');
  const [count,setCount]=useState(1);
  const [buttonText,setButtonText]=useState("Create Workspace");
  const [values,setValues]=useState({
    fullName: '',
    displayName: '',
    workplaceName: '',
    workPlaceUrl: '',
    selectedPlan: '',
  })

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const selectedPlan=(plan)=>{
    setValues({ ...values, selectedPlan: plan });
  }

  const updateCounter=()=>{
    console.log( values.displayName.length)
    if(count<=3){
      if(count===1){
        if(values.fullName==='' || values.fullName.length<10){
          setMessage('Please enter your full name (and should be atleast 10 characters long)');
        }else if(values.displayName===''|| values.displayName.length<4){
          setMessage('Please enter your display name(and should be atleast 4 characters long)');
        }
        else{
          setMessage('');
          setCount(count+1);
        }
      }
      if(count===2){
        if(values.workplaceName==='' ||values.workplaceName.length<4){
          setMessage('Please enter a Workplace name (and should be atleast 4 characters long)');
        }else{
          setMessage('');
          setCount(count+1);
        }
      }
      if(count===3){
        setCount(count+1);
      }
    }
    if(count===3){
      setButtonText("Launch Eden");
    }
  }

  return (
    <div className="container">
      <div className="card">
        <img className="logo-img" alt="logo" src={logo} />
        <Progressbar currentValue={count}/>
        {message!==''? <div className="error-message">{message}</div>:''}
        {count===1? <WelcomeComponent handleChange={handleChange}/>: ''}
        {count===2? <WorkplaceComponent handleChange={handleChange}/>:''}
        {count===3? <SelectPlanComponent handleChange={selectedPlan}/>:''}
        {count===4? <FinalPageComponent name={values.displayName}/>:''}
        <button className="card-button"  onClick={updateCounter}>{buttonText}</button>
      </div>
    </div>
    );
};

export default CardComponent;
