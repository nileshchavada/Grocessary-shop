import React from 'react'
import "./Footer.css";
import fblogo from "../Images/fb.png";
import instalogo from "../Images/insta.jpg";

function Footer() {
  return (
    <div>
       <div className="Footer">
      <p>© 2021 Online Grocery - App ! No rights reserved</p>
      <h1>Find us on</h1>
      <div className="Footer__logo">
        <div className="fb_logo">
          <img src={fblogo} alt="" />
        </div>
        <div className="insta_logo">
          <img src={instalogo} alt="" />
        </div>
        
      </div>
    </div>
      
    </div>
  )
}

export default Footer