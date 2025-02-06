import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-green-600">Dashboard</h1>
        <nav>
          <button
            onClick={toggleMenu}
            className="lg:hidden text-2xl text-green-600 focus:outline-none"
          >
            &#9776; 
          </button>
          <ul
            className={`lg:flex space-x-4 text-sm font-semibold transition-all duration-300 ease-in-out ${
              isMenuOpen ? "block" : "hidden"
            } lg:block`}
          >
            <li>
              <Link
                to="/customers"
                className="text-green-600 transition-all duration-300 ease-in-out"
              >
                Customers
              </Link>
            </li>
            <li>
              <Link
                to="/account"
                className="text-green-600 transition-all duration-300 ease-in-out"
              >
                Account
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
