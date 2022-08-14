import React from 'react'
import "./styles.css";
import BannerImg from "./banner.png";
import Logo from '../../Common/Logo';

const Banner = ({handleScrollMenu}) => {
  return (
    <header>
        <div className="header-content">
            <Logo/>
            <div className="content-main">
                <h1>Better you will feel if you eat a healthy meal</h1>
                <p>We make fresh and healthy meals with different recipes</p>
                <button onClick={handleScrollMenu}>View Menu
                    <i className="fas fa-long-arrow-alt-right"></i>
                </button>
            </div>
        </div>
        <img src={BannerImg} className='header-img' alt="couldn't load img" />
    </header>
  )
}

export default Banner