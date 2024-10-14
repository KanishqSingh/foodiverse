import React, { useState } from 'react'
import './Header.css'

const Header = () => {

   const [menu, setMenu] = useState("menu");
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order Your Favourite Food </h2>
            <p>choose from a diverse menu featuring a delectavle array of dishes lab lab lab lab </p>
            <button onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>View Menu</button>
        </div>
    </div>
  )
}

export default Header