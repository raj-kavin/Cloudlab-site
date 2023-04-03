import React from 'react';
import '../css/rewards.css';

const Rewards = (props) => {
  return (
    <div className='main-rewards'>
      <div className='rewards-card'>

        <img className="rewards-image" src={props.image} alt="" />
        <div className='rewards-content'>
          <h2>{props.comp_name}</h2>
          <p>{props.description}</p>
          
        </div>


      </div>
    </div>

  )
}

export default Rewards  