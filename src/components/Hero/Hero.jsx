import React from "react";
import "./Hero.css";
import CryptImg from '../../assets/hero-img.png'; 

const Hero = () => {
  return (      

    <div className="hero">
        <div className="container">
        {/* left side */}
        <div className="left">
          <p>Buy & Sell Crypto 24/7 using your retirement account</p>
          <h1>Invest in Cryptocurrency with your IRA</h1>
          <p>Buy, Sell, and store hundreds of cryptocurrencies</p>
          <div className="input-container">
            <input type="email"placeholder="Enter your email" />
            <button className="btn">Learn More</button>
          </div>
        </div>
        {/* right side */}
        <div className="right">
            <div className="image-container">
                <img src={CryptImg} alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;