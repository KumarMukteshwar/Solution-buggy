import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png"; // Import the logo image
import IndustryImage from "../assets/industry.png"; // Image used in the industry section
import JuiceImage from "../assets/idea.png"; // Image used in the Cold Pressed Juice Manufacturing section
import Background from "../assets/back.png"; // Import the background image

const BusinessIdeas = () => {
  const navigate = useNavigate();

  const handleSBExpertClick = () => {
    navigate("/contact"); // Navigate to SB Expert page
  };

  const handleETBClick = () => {
    navigate("/buy"); // Navigate to ETB page
  };

  return (
    <div
      className="flex flex-col items-center min-h-screen bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        minHeight: "500px", 
          maxWidth:"300px", // Add this line to limit the width
        margin: "0 auto", // Center the container
        marginBottom: "9%",
        
        borderRadius: "10px",
      }}
    >
      {/* Header with Logo */}
      <header className="w-full flex justify-center py-4 bg-white shadow-sm">
        <img src={Logo} alt="Solution Buggy" className="h-12" />
      </header>

      {/* Industry Section */}
      <section className="w-full max-w-sm p-4 mt-4 rounded-lg shadow-md">
        <div className="flex items-center justify-between rounded-md p-2">
          {/* <h2 className="text-white font-bold">INDUSTRY</h2> */}
          <img
            src={IndustryImage}
            alt="Industry"
            className="h-15 w-15 rounded-md "
          />
        </div>
      </section>

      {/* Business Ideas Section */}
      <section className="w-full max-w-sm p-4 mt-4">
        <h1 className="text-2xl font-bold text-blue-900 mb-4">
          Business Ideas
        </h1>
        <button className="mb-4 flex items-center space-x-2 bg-white p-2 rounded-md shadow-sm">
          <span className="text-blue-900 font-semibold">Filters</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-blue-900"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 12.414V19a1 1 0 01-.553.894l-3 1.5A1 1 0 018 20.5V12.414L3.293 6.707A1 1 0 013 6V4z"
            />
          </svg>
        </button>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={JuiceImage}
            alt="Cold Pressed Juice"
            className="w-full h-40 object-cover"
          />
          <div className="p-4 bg-blue-900 text-white">
            <h2 className="font-bold text-lg">
              Cold Pressed Juice Manufacturing
            </h2>
            <p className="text-sm mt-2">
              Boost your brand with our nutrient-rich, cold pressed juices,
              crafted using advanced technology for maximum freshness and health
              benefits. Attract health-conscious consumers with our premium,
              high-quality juice solutions.{" "}
              <span className="underline">Read more...</span>
            </p>
            <div className="mt-4 flex space-x-4">
              <button
                onClick={handleSBExpertClick}
                className="w-1/2 p-2 border-2 border-orange-500 hover:border-orange-600 text-orange-500 hover:text-orange-600 font-bold rounded-md transition duration-300"
              >
                SB Expert
              </button>

              <button
                onClick={handleETBClick}
                className="w-1/2 p-2 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-md"
              >
                ETB
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessIdeas;
