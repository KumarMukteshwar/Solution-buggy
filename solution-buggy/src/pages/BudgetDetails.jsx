import React from "react";
// import { Link } from "react-router-dom";
import background2 from "../assets/back.png"; // Import the background image
import Logo from "../assets/logo.png"; // Import the logo image
import Location from "../assets/location.png"; // Import the location image
import { useNavigate } from "react-router-dom";

const BudgetDetails = () => {
  const navigate = useNavigate(); // Use the useNavigate hook for navigation

  const handleButtonClick = () => {
    navigate("/budgetReason"); // Navigate to the next page when button is clicked
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${Logo})`,
        marginTop: "40px", 
        backgroundSize: "100px 100px", 
        backgroundPosition: "top", 
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="text-center p-6 rounded-md shadow-lg"
        style={{
          backgroundImage: `url(${background2})`,
          backgroundSize: "cover", 
          backgroundPosition: "center", 
          height: "100%", 
          minHeight: "500px", 
          marginBottom: "9%",
          backgroundColor: "rgba(255, 255, 255, 0.9)", 
          borderRadius: "10px", 
        }}
      >
        <h1 className="text-2xl font-bold text-blue-900 mb-6">
          Select your Budget
        </h1>

        <div className="bg-blue-900 text-white p-5 mt-5 rounded-md shadow-md">
          <h2
            className="flex items-center justify-center rounded-md p-4"
            style={{
              backgroundImage: `url(${Location})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%", // Width of the h2 container to take up full space
              height: "80px", // Height of the image container
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          ></h2>

          <div className="mt-4">
            
            <select className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500">
              <option>Select your State</option>
              {/* Add options here */}
              <option value="Karnataka">Karnataka</option>
              <option value="Maharastra">Maharastra</option>
              <option value="bihar">Bihar</option>
            </select>
          </div>

          <div className="mt-4">
            <button
              onClick={handleButtonClick}
              className="w-full p-2 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md font-bold transition duration-300"
            >
              Want to Explore New Geographic?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetDetails;
