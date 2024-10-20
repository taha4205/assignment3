import React from 'react';
import images from "./images/p.jpg"
const App = () => {
  return (
    <div>
      <nav className="bg-gray-800 p-4 flex items-center justify-between">
        <span className="text-white text-2xl font-bold mr-5">Portfolio</span>
        <ul className="list-none p-0 m-0 flex">
          <li className="mr-5">
            <a href="/" className="text-white hover:underline">Home</a>
          </li>
          <li className="mr-5">
            <a href="/about" className="text-white hover:underline">About</a>
          </li>
          <li className="mr-5">
            <a href="/contact" className="text-white hover:underline">Contact</a>
          </li>
          <li>
            <a href="/services" className="text-white hover:underline">Services</a>
          </li>
        </ul>
      </nav>

      <div className="hero text-center h-[550px] w-full px-[90px] flex items-center">
      <div className="w-1/2">
  <h1 className="text-gray-800 text-4xl pt-[100px] text-left">Welcome to My Portfolio</h1>
  <p className="text-gray-600 text-xl text-left mt-4">
    Let me help you build a digital presence with my coding skills <br />
    Take your business to another level
  </p>
  <button className="mt-6 bg-gray-800 text-white rounded-full px-4 py-2 text-lg">
    <a href="/services">Get Started</a>
  </button>
</div>
<img 
  src={images.src}  
  alt="Programming concept" 
  className="h-72 w-2/5 object-cover" 
/>

        
      </div>

      <div className="aboutUs text-center py-12">
        <h2 className="text-4xl mb-5">About Us</h2>
        <p className="text-lg mb-7">We are a team dedicated to providing the best services.</p>
        <button className="bg-gray-800 text-white px-5 py-2 rounded">Learn More</button>
      </div>

      <div className="services text-center py-12">
        <h2 className="text-4xl mb-5">Our Services</h2>
        <p className="text-lg mb-7">Explore the variety of services we offer.</p>
        <button className="bg-gray-800 text-white px-5 py-2 rounded">View Services</button>
      </div>

      <div className="contact text-center py-12">
        <h2 className="text-4xl mb-5">Contact Us</h2>
        <p className="text-lg mb-7">Get in touch with us for more information.</p>
        <button className="bg-gray-800 text-white px-5 py-2 rounded">Contact</button>
      </div>

      <footer className="footer bg-gray-800 text-white text-center p-4">
        © 2023 Your Company. All rights reserved.
      </footer>
    </div>
  );
};

export default App;