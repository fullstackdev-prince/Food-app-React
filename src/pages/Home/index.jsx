import React, { useRef } from 'react';
import CartCountButton from '../../components/Common/CartCountButton';
import Footer from '../../components/Common/Footer';
import Menu from '../../components/Common/Menu';
import { menuItemsData } from '../../components/Common/Menu/data';
import Banner from '../../components/Home/Banner';
import "./style.css";

const Home = () => {
  const menuRef= useRef();
 
  const handleScrollMenu=()=>menuRef.current.scrollIntoView({behaviour:"smooth"})

  return (
    <div>
        <Banner  handleScrollMenu={handleScrollMenu} />
        <Menu list={menuItemsData} ref={menuRef} />
        <CartCountButton/>
        <Footer/>
    </div>
  )
}

export default Home