import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header({ login, setLogin }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling mobile menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-600  shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand */}
        <NavLink
          to="/dashboard"
          className="text-3xl font-bold text-white hover:text-yellow-300 transition-colors"
        >
          VRV
        </NavLink>

        {/* Hamburger Button (for mobile) */}
        <div className="lg:hidden">
          <button
            aria-controls="basic-navbar-nav"
            onClick={toggleMenu} // Toggle mobile menu
            className="text-white focus:outline-none"
          >
            {/* Hamburger icon */}
            <svg
              className="w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navbar Links for Desktop */}
        <div className="hidden lg:flex space-x-8">
          {login && (
            <NavLink
              to="/dashboard"
              className="text-lg text-white hover:text-yellow-300 transition-all duration-300 ease-in-out"
            >
              Home
            </NavLink>
          )}
          {login && (
            <NavLink
              to="/admin"
              className="text-lg text-white hover:text-yellow-300 transition-all duration-300 ease-in-out"
            >
              Admin Panel
            </NavLink>
          )}
          {login && (
            <NavLink
              to="/users"
              className="text-lg text-white hover:text-yellow-300 transition-all duration-300 ease-in-out"
            >
              Users
            </NavLink>
          )}

          {login && (
            <NavLink
              to="/requestpanel"
              className="text-lg text-white hover:text-yellow-300 transition-all duration-300 ease-in-out"
            >
              Request Panel
            </NavLink>
          )}
        </div>

        {/* Admin Login Button */}
        <div className="hidden lg:block">
          {login === false ? (
            <NavLink
              to="/"
              className="bg-yellow-500 text-white py-2 px-6 rounded-full hover:bg-yellow-400 transition-all duration-300 ease-in-out"
            >
              Admin Login
            </NavLink>
          ) : (
            <button
              className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
              onClick={() => {
                setLogin(false);
              }}
            >
              Sign Out
            </button>
          )}
        </div>
      </div>

      {/* Mobile Navbar (hidden on large screens) */}
      <div className={`lg:hidden mt-4 ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="flex flex-col space-y-6 bg-teal-600 p-4 rounded-lg shadow-xl">
          {login && (
            <NavLink
              to="/dashboard"
              className="text-xl text-white hover:text-yellow-300 transition-all duration-300 ease-in-out"
            >
              Home
            </NavLink>
          )}
          {login && (
            <NavLink
              to="/admin"
              className="text-xl text-white hover:text-yellow-300 transition-all duration-300 ease-in-out"
            >
              Admin Panel
            </NavLink>
          )}
          {login && (
            <NavLink
              to="/users"
              className="text-xl text-white hover:text-yellow-300 transition-all duration-300 ease-in-out"
            >
              Users
            </NavLink>
          )}
          {login && (
            <NavLink
              to="/requestpanel"
              className="text-xl text-white hover:text-yellow-300 transition-all duration-300 ease-in-out"
            >
              Request Panel
            </NavLink>
          )}
          {login === false ? (
            <NavLink
              to="/"
              className="bg-yellow-500 text-white py-2 px-6 rounded-full hover:bg-yellow-400 transition-all duration-300 ease-in-out"
            >
              Admin Login
            </NavLink>
          ) : (
            <button
              className="w-full sm:w-auto px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
              onClick={() => {
                setLogin(false);
              }}
            >
              Sign Out
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
