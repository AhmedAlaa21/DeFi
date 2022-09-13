import React from "react";
import "./Subscribe.css";
import IMG1 from "../../assets/trade.png";
const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="container">
        {/* left side */}
        <div className="left">
          <img src= {IMG1} alt="" />
        </div>
        {/* right side */}
        <div className="right">
          <h2>Earn passive income with crypto.</h2>
          <p>
            Earn up to 12% annual rewards on 30+ digital assets. Simply hold
            your assets in the app to automatically earn rewards at the end of
            each month with no lockups and no limits.
          </p>
          <div className="input-container">
            <input type="email" placeholder="Enter your email" />
            <button className="btn">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
