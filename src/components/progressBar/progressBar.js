import React from 'react';
import './progressBar.css';

const ProgressBar = (props) => {
  const arr=[1,2,3,4];
  const { currentValue } = props;
  return (
     <ul>
       { arr.map((item,i) => {
         return(
           <li className={currentValue===i+1? "active": ""}>{i+1}</li>
         )
       })}
      </ul> 
  );
};

export default ProgressBar;