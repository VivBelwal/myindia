import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link to="/">My India E-Commerce</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link
            to="/"
            className="text-white hover:text-gray-200 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-white hover:text-gray-200 transition duration-300"
          >
            Products
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link
            to="/"
            className="block text-white px-2 py-1 hover:bg-blue-700 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="block text-white px-2 py-1 hover:bg-blue-700 transition duration-300"
          >
            Products
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
