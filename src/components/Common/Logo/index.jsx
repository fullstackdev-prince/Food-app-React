import React from 'react';
import "./styles.css";
import logoimg from "./logo.png";

const Logo = () => {
  return (
    <div className='logo'>
        <div>
          <img src={logoimg} alt="logo" />
          {/* <span>
            <b>Taste</b>
          </span> */}
        </div>
        {/* <p>
          <b>
            Protein Corner
          </b>
        </p> */}
    </div>
  )
}

export default Logo