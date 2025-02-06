import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faSearch, faBars, faTimes, faHeart } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="py-4 px-4 lg:px-6 bg-white shadow-sm">
      <div className="container mx-auto">
        <div className="hidden md:flex items-center justify-between flex-wrap lg:flex-nowrap gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <img src="/logo.png" alt="FoodGO" className="h-10" />
            <div className="flex items-center font-poppins">
              <span className="text-2xl font-bold">Food</span>
              <span className="text-2xl font-bold text-green-600">GO</span>
            </div>
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-4 lg:gap-8 flex-wrap justify-end flex-1">
            {/* Donate Button */}
            <div className="order-2 lg:order-1">
              <Link to="/donate"
                className="whitespace-nowrap border-2 border-yellow-400 rounded-md px-3 lg:px-4 py-2 text-green-600 text-sm lg:text-base font-semibold hover:bg-green-600/25 hover:border-2 hover:border-green-600"
              >
                Donate Food Now!
              </Link>
            </div>

            {/* Search Bar */}
            <div className="relative order-1 lg:order-2 w-full lg:w-auto flex-1 max-w-[500px]">
              <input
                type="text"
                placeholder="Search for more than 20,000 products"
                className="w-full py-2 px-4 border rounded-lg focus:outline-none focus:border-green-500"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2">
                <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
              </button>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4 lg:gap-6 order-3">
              <Link to="/profile" className="relative">
                <FontAwesomeIcon icon={faUser} className="text-green-600 text-xl lg:text-2xl" />
              </Link>
              <Link to="/mycart" className="flex items-center gap-2">
                <button className="relative">
                  <FontAwesomeIcon icon={faShoppingCart} className="text-green-600 text-xl lg:text-2xl" />
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {JSON.parse(localStorage.getItem('cart'))?.length || 0}
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="FoodGO" className="h-8" />
              <div className="flex items-center">
                <span className="text-xl font-bold">Food</span>
                <span className="text-xl font-bold text-[#9FE870]">GO</span>
              </div>
            </Link>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600"
            >
              <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} className="text-2xl" />
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="mt-4 space-y-4">
              {/* Donate Button Mobile */}
              <div className="text-center">
                <Link to="/donate"
                  className="inline-block border-2 border-yellow-400 rounded-md px-4 py-2 text-green-600 font-semibold hover:bg-green-600/25 hover:border-2 hover:border-green-600"
                >
                  Donate Food Now!
                </Link>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products"
                  className="w-full py-2 px-4 border rounded-lg focus:outline-none focus:border-green-500"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2">
                  <FontAwesomeIcon icon={faSearch} className="text-green-400" />
                </button>
              </div>

              {/* Mobile Navigation */}
              <div className="flex justify-between items-center py-2">
                <Link to="/profile" className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faUser} className="text-green-400" />
                  <span>Account</span>
                </Link>
              </div>

              {/* Cart Summary */}
              <div className="flex items-center justify-between py-2 border-t">
                <Link to="/mycart" className="flex items-center gap-2">
                  <div className="relative">
                    <FontAwesomeIcon
                      icon={faShoppingCart}
                      className="text-green-400"
                    />
                    <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                      {JSON.parse(localStorage.getItem('cart'))?.length || 0}
                    </span>
                  </div>
                  <span>Cart</span>
                </Link>
                <div className="font-semibold">₱0</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
