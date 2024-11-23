import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";

const Dashboard = ({ roles, users, requests }) => {
  // Settings for the slick carousel
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable auto movement
    autoplaySpeed: 2000, // Slide will change every 3 seconds
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
        <div className="group relative bg-blue-500  p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-lg transition"></div>
          <h3 className="text-2xl font-semibold text-white">Total Users</h3>
          <p className="text-lg text-white mt-2">{users.length}</p>
        </div>

        <div className="group relative bg-blue-500 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-lg transition"></div>
          <h3 className="text-2xl font-semibold text-white">Active Roles</h3>
          <p className="text-lg text-white mt-2">{roles.length}</p>
        </div>

        <div className="group relative bg-blue-500 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-lg transition"></div>
          <h3 className="text-2xl font-semibold text-white">
            Pending Requests
          </h3>
          <p className="text-lg text-white mt-2">{requests.length}</p>
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
                src={image1}
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
                src={image2}
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
                src={image3}
                alt="Highlight 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-medium text-gray-800">Feature 3</h4>
                <p className="text-gray-600 mt-2">Description of feature 3.</p>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={image3}
                alt="Highlight 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-medium text-gray-800">Feature 4</h4>
                <p className="text-gray-600 mt-2">Description of feature 4.</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Dashboard;
