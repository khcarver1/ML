import './App.css';
import React from 'react';
import Footer from './components/footer';
import { Routes, Route, HashRouter, BrowserRouter } from "react-router-dom";
import Home from './components/home.js';
import Shop from './components/shop.js';
import Nav from './components/nav.js';
import News from './components/news.js';
import Contact from './components/contact.js';
import About from './components/about.js';
import Shopify from './components/shopify';

export default function App() {
  return (
      <HashRouter basename='/'>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/shopify" element={<Shopify />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </HashRouter>
  );
};