import logo from "../assets/MomLife_Script_Logo.svg";
import React from "react";
import Cart from "../assets/shopping-cart.png"
import Search from "../assets/search.png"


const Nav = () => {
    return (
        <div class="topnav">
            <a href="/#" class="active"><img src={logo} className='logo' /> </a>
            <div id="myLinks">
                <div className="myLinksOne">
                    <a href="/#/news">News</a>
                    <a href="/#/shopify">Shopify</a>
                    <a href="/#/contact">Contact</a>
                    <a href="/#/about">About</a>
                </div>
                <div className="myLinksTwo"></div>
            </div>
            <div className="shopifyHdr">

                <a href="/#/shopify"><img src={Cart} width="25" /></a>
                <a href="/#/shopify"><img src={Search} width="25" /></a>

            </div>
            <a className="navHamburger" href="javascript:void(0);" class="icon" onClick={() => navTransition()}>
                <i class="fa fa-bars"></i>
            </a>
        </div>
    );



    function navTransition() {
        var x = document.getElementById("myLinks");
        if (x.style.display === "flex") {
            x.style.display = "none";
        } else {
            x.style.display = "flex";
        }
    }
};

export default Nav;