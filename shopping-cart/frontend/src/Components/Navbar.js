import Logo from "../Images/logo.png";
import {Link} from 'react-router-dom';
import React, {useContext, useState} from 'react'
import {GlobalState} from '../GlobalState'
import './Navbar.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useSelector } from "react-redux";
import axios from 'axios'

const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  //New
  const state = useContext(GlobalState)
  const [isLogged] = state.userAPI.isLogged
  const [isAdmin] = state.userAPI.isAdmin
  //const [cart] = state.userAPI.cart
  const [menu, setMenu] = useState(false)

  const logoutUser = async () =>{
    await axios.get('/user/logout')
        
    localStorage.removeItem('firstLogin')
        
    window.location.href = "/";
  }

  const adminRouter = () =>{
    return(
      <>
      <li><Link to="/create_product"><h3>Create Product</h3></Link></li>
      {/* <li><Link to="/category">Categories</Link></li> */}
      </>
      )
    }

    const loggedRouter = () =>{
    return(
      <>
      {/* <li><Link to="/history">History</Link></li> */}
      <li><Link to="/" onClick={logoutUser}><h3>Logout</h3></Link></li>
      </>
      )
    }

    const styleMenu = {
        left: menu ? 0 : "-100%"
    }

  //New
  
  return (
    <nav className="navbar">
      <div className="navbarlogo">
        <img src = {Logo} alt=""/>
         </div>
         <ul className="navbar_links">
         <li>
             <Link to ="/">
               <h3>Home</h3>
             </Link>
           </li>
      
               
               {/* <li><Link to="/">{isAdmin ? 'Products' : 'Shop'}</Link></li> */}

                {isAdmin && adminRouter()}

                {
                    isLogged ? loggedRouter() : <li><Link to="/login"><h3>Login</h3></Link></li>
                }

           <li>
             <Link to ="/cart" className="cart-link">
                 <ShoppingCartIcon/>
                 <span>
              <h3> Cart </h3>
               <span className ="cartlogo_badge">{getCartCount()}</span>
               </span>
             </Link>
           </li>
         </ul>
         
      </nav>
  )
};

export default Navbar