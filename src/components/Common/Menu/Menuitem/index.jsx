import React from 'react';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartItemsCount } from '../../../../redux/cart/cart.selector';
import ButtonAddRemoveItem from '../../ButtonAddRemoveItem';
import "./styles.css";
import { connect } from 'react-redux';
import { cartAddItem } from '../../../../redux/cart/cart.action';
import { cartRemoveItem } from '../../../../redux/cart/cart.action';

const Menuitem = ({item, cartCount , cartList, cartAddItem, cartRemoveItem}) => {
    const {id,name,info,price,img}= item;

    const handleItemQuantity=()=>{
      let quantity=0;
      if (cartCount!==0)
      {
        const findItemInCart= cartList.find(item=>item.id===id);

        if(findItemInCart){
          quantity=findItemInCart.quantity;
        }
      }
      return quantity;

    };


  return (
    <div className='item'>
        <img src={img} alt="img" />
        <div className="item-head">
            <p className='head-name'>{name}</p>
            <p className='head-info'><small>{info}</small></p>
        </div>
        <div className="item-foot">
            <span className='foot-price'>${price}</span>
            <ButtonAddRemoveItem quantity={handleItemQuantity()}
            handleadditem={()=>cartAddItem(item)}
            handleremoveitem={()=>cartRemoveItem(item)} />
        </div>
    </div>
  )
}

const mapStateToProps= createStructuredSelector({
  cartCount:selectCartItemsCount,
  cartList:selectCartItems,
});

const mapDispatchToProps=(dispatch)=>
({
  cartAddItem:item=>dispatch(cartAddItem(item)),
  cartRemoveItem:item=>dispatch(cartRemoveItem(item)),
}
)

export default connect(mapStateToProps,mapDispatchToProps)(Menuitem)