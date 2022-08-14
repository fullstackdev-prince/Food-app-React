import React from 'react';
import "./styles.css";

const ButtonAddRemoveItem = ({quantity,handleadditem,handleremoveitem}) => {
  return (
    <div className='btnaddremove'>
        {quantity!==0 ? 
        <div className='btnaddremove-positive'>
            <i className="fa fa-minus" onClick={handleremoveitem}></i>
            <span>{quantity}</span>
            <i className="fa fa-plus" onClick={handleadditem}></i>
        </div>
        :
        <div className='btnaddremove-negative' onClick={handleadditem}>
            <span>ADD</span>
            <i className="fa fa-plus" ></i>
        </div> }
    </div>
  )
}

export default ButtonAddRemoveItem