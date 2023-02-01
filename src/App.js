import './App.css';
import logo from './assets/logo.jpg';
import React from 'react';


function App() {
  return (
    <div className="App">
      <div class="topnav">
        <a href="#home" class="active"><img src={logo} className="logo" alt="cover" /></a>
        <div id="myLinks">
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
        <a href="javascript:void(0);" class="icon" onClick={() => myFunction()}>
          <i class="fa fa-bars"></i>
        </a>
      </div>
      <div className='mainContent'>
        <div className='aboutUsContainer'>
          <h2>Thank you for visiting!</h2>
        </div>
        <div>
          <p>Our website is currently under construction. Check back soon!</p>
        </div>
      </div>
    </div>
  );
}
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */


export default App;
