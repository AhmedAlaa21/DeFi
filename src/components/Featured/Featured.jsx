import React, { useState, useEffect } from "react";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import "./Featured.css";
import axios from "axios";

const Featured = () => {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false";
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="featured">
      <div className="container">
        {/* left side */}
        <div className="left">
          <h2>Explore top Crypto`s Like Bitcoin, Ethereum, and Dogecoin</h2>
          <p>See all available assets: Cryptocurrencies and NFT`s</p>
          <button className="btn">See More Coins</button>
        </div>
        {/* right */}
        <div className="right">
          {data.map((item) => {
            return (
              <div className="card" key={item.id}>
                <div className="top">
                  <img src={item.image} alt="/" />
                </div>
                <div>
                  <h5>{item.name}</h5>
                  <p>${item.current_price.toLocaleString()}</p>
                </div>
                {item.price_change_percentage_24h > 0 ? (
                  <span className="green">
                    <FiArrowUpRight className="icon"/>
                    {item.price_change_percentage_24h.toFixed(2)}%
                  </span>
                ) : (
                  <span className="red">
                    <FiArrowDown className="icon"/>
                    {item.price_change_percentage_24h.toFixed(2)}%
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Featured;
