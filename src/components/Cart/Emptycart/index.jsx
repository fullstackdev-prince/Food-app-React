import React from 'react';
import "./styles.css";
import emptycartimg from "./Emptycart.png";
import {useNavigate} from 'react-router-dom';

const Emptycart = () => {
    const navigate = useNavigate();
   
    const handleClick = () => {
      // 👇️ navigate programmatically
      navigate('/');
    };
  return (
    <div className="emptycart">
        <img src={emptycartimg} alt="Empty" />
        <button onClick={(handleClick)}>
            <i className='fas fa-long-arrow-alt-left'></i>Shop Now
        </button>
    </div>
  )
}

export default Emptycart