import React, { forwardRef } from 'react';
// import { menuItemsData } from './data';
import Menuitem from './Menuitem';
import "./styles.css";

const Menu = forwardRef(({list}, ref) => {
  return (
    <div>
      <main ref={ref}>
        {list.map((item)=>(
          
            <Menuitem key={item.id} item={item} />
        ))}
      </main>
    </div>
  )
})

export default Menu