import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p className="text-gray-400">
            We are a leading e-commerce platform providing the best products at the best prices. Customer satisfaction is our priority.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2"><Link to="/" className="text-gray-400 hover:text-white transition duration-300">Home</Link></li>
            <li className="mb-2"><Link to="/products" className="text-gray-400 hover:text-white transition duration-300">Products</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <ul className="text-gray-400">
            <li className="mb-2">Email: support@ecommerce.com</li>
            <li className="mb-2">Phone: +123 456 7890</li>
            <li className="mb-2">Address: 123 E-Commerce St, Shopping City, SC 12345</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
