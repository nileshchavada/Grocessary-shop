import React from 'react'
import './CartItem.css';
import {Link} from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';

const CartItem =({item, qtyChangeHandler, removeHandler  }) => {
  return (
    <div className="cartitem">
      <div className="cartitem_image">
        <img src={item.imageUrl} alt= {item.name}/>

      </div>
 <Link to={`/product/€
{item.id}`} className='cartitem_name'>
   <p>{item.name}</p>
   </Link>
   <p className ="cartitem_price">€{item.price}</p>
   <select className="cartitem_select"  value={item.qty}
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}>
        {[...Array(item.countInStock).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
     </select> 
     <button className ="cartitem_deletebtn"  onClick={() => removeHandler(item.product)}>
<DeleteIcon/>
       </button>    
    </div>
  )
}

export default CartItem