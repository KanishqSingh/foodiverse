import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/frontend_assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  return (
    <div className='Navbar'>
      <Link to='/'><h3 className='logo-title'>FoodiVerse</h3></Link>
      <ul className='navbar-menu'>
        <Link to='/' onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</a>
        <a href='#app-download' onClick={() => setMenu("Mobile-app")} className={menu === "Mobile-app" ? "active" : ""}>Mobile-app</a>
        <a href='#footer' onClick={() => setMenu("Contact us")} className={menu === "Contact us" ? "active" : ""}>Contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search icon" className="navbarsearchicon" />
        <div className="navbarsearchicon">
          <Link to='/cart'>
            <Link to='/cart'><img src={assets.basket_icon} alt="basket icon" /></Link>
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : 'dot'}></div>
        </div>
        {!token ? <button onClick={() => setShowLogin(true)}>Sign In</button> 
        :<div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul className='nav-profile-dropdown'>
              <li><img src={assets.bag_icon} alt=""></img><p>Orders</p></li>
              <hr />
              <li><img src={assets.logout_icon} alt=""></img><p>LogOut</p></li>
            </ul>
          </div>}

      </div>
    </div>
  );
}

export default Navbar;
