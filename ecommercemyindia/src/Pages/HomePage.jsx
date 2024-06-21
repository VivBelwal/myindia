import React from 'react';
import electronics from "../assests/electronics.avif";
import clothing from "../assests/clothing.jpeg";
import jwellery from "../assests/jewllery.avif"
import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-200">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">Discover Our Collection</h1>
        <p className="text-xl text-gray-600 mb-8">Quality products at unbeatable prices</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <img src={electronics} alt="Product 1" className="w-32 h-32 mb-4 rounded-full"/>
            <h3 className="text-lg font-semibold text-gray-800">Electronics</h3>
          </div>
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <img src={clothing} alt="Product 2" className="w-32 h-32 mb-4 rounded-full"/>
            <h3 className="text-lg font-semibold text-gray-800">Clothing</h3>
          </div>
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <img src={jwellery} alt="Product 3" className="w-32 h-32 mb-4 rounded-full"/>
            <h3 className="text-lg font-semibold text-gray-800">Jewelery</h3>
          </div>
        </div>
        <div className="mt-12 flex space-x-4">
          <Link to="/products" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-500 transition duration-300">Shop Now</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
