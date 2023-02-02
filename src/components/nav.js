import logo from "../assets/logo.jpg";
import React from "react";


const Nav = () => {
    return (
        <div class="topnav">
            <a href="/#" class="active"><img src={logo} className='logo' /> </a>
            <div id="myLinks">
                <a href="/#/news">News</a>
                <a href="/#/shopify">Shopify</a>
                <a href="/#/contact">Contact</a>
                <a href="/#/about">About</a>
            </div>
            <a href="javascript:void(0);" class="icon" onClick={() => myFunction()}>
                <i class="fa fa-bars"></i>
            </a>
        </div>
    );


    function myFunction() {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }
};

export default Nav;