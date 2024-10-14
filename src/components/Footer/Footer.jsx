import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    {/* <img src={assets.logo} alt="" /> */}
                    <h3 className='logo-title'>FoodiVerse</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus maxime dolore aliquid nisi, voluptates eum similique consequuntur sapiente minima voluptatem voluptatum aspernatur debitis doloremque repellendus optio veritatis impedit eaque! Consectetur?
                    </p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.linkedin_icon_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                    </div>


                </div>

                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>Delivery</li>
                        <li>About Us</li>
                        <li>Privacy policy</li>
                    </ul>

                </div>
                <div className="footer-content-right">
                    <h2>Get In Touch</h2>
                    <ul>
                        <li>955954566</li>
                        <li>yoyo@gmail.com</li>
                    </ul>

                </div>

            </div>
            <hr />
            <p className='copyright'>its copyrighed content dont jekjwkefjlj akfkhjeiurigmnxc jasdkfhkweitgwhjb</p>

        </div>
    )
}

export default Footer