import React from 'react'
import Footer from '../../components/Common/Footer';
import Logo from '../../components/Common/Logo'
import Menu from '../../components/Common/Menu' 
import Emptycart from "../../components/Cart/Emptycart"
import "./styles.css";
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartItemsCount, selectCartTotal } from '../../redux/cart/cart.selector';
import { connect } from 'react-redux';

const Cart = ({cartCount,cartList,cartTotal}) => {
  return (
    <>
        <div className="cart-header">
            <Logo/>
        </div>
        {cartCount===0?<Emptycart/>:(<div className="orders">
            <h1 className='orders-heading'> Your Orders</h1>
            <div className="orders-menu">
                <Menu list= {cartList}/>
            </div>
            <h3 className='orders-total'>Your Total ${cartTotal}</h3>
        </div>)
}
        
        <Footer/>
    </>
  )
}

const mapStateToProps= createStructuredSelector({
  cartCount:selectCartItemsCount,
  cartList:selectCartItems,
  cartTotal:selectCartTotal,
});

export default connect(mapStateToProps)(Cart)