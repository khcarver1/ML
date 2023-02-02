import logo from "../assets/logo.jpg";
import React from "react";
import Cart from "../assets/shopping-cart.png"
import Search from "../assets/search.png"



const Shop = (props) => {
  return (
    <>
      <div className="App">
        <div className='mainContent'>
          <div className="shopHdr">

            <a href="/#/shop"><img src={Cart} width="25" /></a>
            <a href="/#/shop"><img src={Search} width="25" /></a>

          </div>

          <div>
            <p>Welcome to our shop.</p>
            <p>One day you'll see things for sale here</p>
          </div>
        </div>
      </div>

    </>
  );
};


// shopify dev //
// var express = require('sys')
//   , shopify = require('shopify');

// var session = new shopify.Session(
//     API_KEY
//   , SHARED_SECRET
// );

export default Shop;
