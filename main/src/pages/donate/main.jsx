import React from "react";
import bannerImage from "../../assets/image.png";

const DonatePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex-col">
        <h1 className="text-3xl font-bold text-green-600"><span className="text-black">Food</span>GO</h1>
        <span className="font-bold text-green-600">Donate</span>
        </div>
        </div>
      </header>

      <section
        className="relative bg-gray-200 bg-center bg-cover bg-no-repeat h-80 flex items-center justify-center"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative max-w-4xl text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Donate Food, Spread Smiles
          </h1>
          <p className="text-lg md:text-xl">
            Help us transform surplus food into nourishing meals for those in
            need. Your involvement directly aids local hunger relief efforts and
            promotes sustainable food practices.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white flex-1">
        <div className="bg-gray-100 shadow-md rounded-lg border max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
              Join Our Cause &amp; Donate
            </h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              Become a partner in our mission to fight hunger. Your restaurant’s
              surplus food can make a big difference.
            </p>
          </div>

          <div className="p-6 max-w-xl w-full">
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="organizationName"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Establishment / Organization Name
                </label>
                <input
                  type="text"
                  id="organizationName"
                  placeholder="Type your organization name here..."
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>

              <div>
                <label
                  htmlFor="contactName"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Contact Name
                </label>
                <input
                  type="text"
                  id="contactName"
                  placeholder="Type your name here..."
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="yourname@gmail.com"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
              >
                Donate Now
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-gray-100 py-4 text-center text-gray-700 text-sm">
        &copy; {new Date().getFullYear()} FoodGO. All rights reserved.
      </footer>
    </div>
  );
};

export default DonatePage;