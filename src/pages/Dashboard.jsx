import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Dashboard = () => {
  // Settings for the slick carousel
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="container mx-auto mt-10 px-4">
      {/* Header */}
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
        Dashboard
      </h2>

      {/* 3D Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="group relative bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-lg transition"></div>
          <h3 className="text-2xl font-semibold text-white">Total Users</h3>
          <p className="text-lg text-white mt-2">50 Users</p>
        </div>

        <div className="group relative bg-gradient-to-r from-green-400 via-teal-500 to-blue-400 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-lg transition"></div>
          <h3 className="text-2xl font-semibold text-white">Active Roles</h3>
          <p className="text-lg text-white mt-2">5 Roles</p>
        </div>

        <div className="group relative bg-gradient-to-r from-yellow-400 via-orange-500 to-red-400 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-lg transition"></div>
          <h3 className="text-2xl font-semibold text-white">
            Pending Requests
          </h3>
          <p className="text-lg text-white mt-2">10 Requests</p>
        </div>
      </div>

      {/* Slick Slider Section */}
      <div className="mt-16">
        <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Highlights
        </h3>
        <Slider {...sliderSettings}>
          <div className="p-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/300"
                alt="Highlight 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-medium text-gray-800">Feature 1</h4>
                <p className="text-gray-600 mt-2">Description of feature 1.</p>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/300"
                alt="Highlight 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-medium text-gray-800">Feature 2</h4>
                <p className="text-gray-600 mt-2">Description of feature 2.</p>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/300"
                alt="Highlight 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-medium text-gray-800">Feature 3</h4>
                <p className="text-gray-600 mt-2">Description of feature 3.</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Dashboard;
