import './App.css';
import   Navbar  from "../src/components/Navbar/Navbar";
import  Home  from "../src/components/Home/Home";
import  About from '../src/components/About/About';
import  Collections  from '../src/components/Collections/Collections';
import  Testimonials  from '../src/components/Testimonials/Testimonials';
import  Subscribe  from '../src/components/Subscribe/Subscribe';
import  Footer  from '../src/components/Footer/Footer';
import  Error from "../src/components/Error/Error"
import  { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import React, { Component } from 'react';

function App() {
  return (
    <>
    {/* <React.Fragment> */}
      <Navbar />
      {/* <Router> */}
          {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/subscribe" element={<Subscribe />} />
            <Route path='/footer' element={<Footer />} />
            <Route path="*" element={<Error />} />
          </Routes>
          {/* <Footer /> */}
          
      {/* </Router>  */}
      <Home />
      <About />
      <Collections />
      <Testimonials />
      <Subscribe />
      <Footer />
      
     
    {/* </React.Fragment> */}
    </>
  );
}

export default App;
