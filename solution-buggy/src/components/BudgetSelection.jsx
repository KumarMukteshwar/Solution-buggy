import React from "react";
import { Link } from "react-router-dom";
import background from "../assets/Budget.png"; // Import the background image
import background2 from "../assets/back.png"; // Import the background image
import Logo from "../assets/logo.png"; // Import the background image

const BudgetSelection = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-no-repeat mt-10"
      style={{
        backgroundImage: `url(${Logo})`,
        marginTop: "40px", // Prevent the logo from repeating
        backgroundSize: "100px 100px", // Set the size of the Logo
        backgroundPosition: "top", // Position the logo at the top
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="text-center p-6 rounded-md bg-white bg-opacity-10"
        style={{
          backgroundImage: `url(${background2})`,
          backgroundSize: "cover", 
          backgroundPosition: "center",
          height: "100%", 
          minHeight: "500px", 
          maxWidth:"300px",
          marginBottom: "9%",
        }}
      >
        <h1 className="text-3xl font-bold mb-6">Select your Budget</h1>

        <div className="bg-blue-900 text-white p-6 mt-4 rounded-md">
          <h2
            className="flex items-center justify-center rounded-md p-4"
            style={{
              backgroundImage: `url(${background})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%", // Width of the h2 container to take up full space
              height: "80px", // Height of the image container
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          >
            {/* Budget Options */}
          </h2>
          <ul className="space-y-2">
            <li>
              <Link to="/budget/50lakhs-1crore">50 Lakhs - 1 Crore</Link>
            </li>
            <li>
              <Link to="/budget/1crore-1.5crores">1 Crore - 1.5 Crores</Link>
            </li>
            <li>
              <Link to="/budget/1.5crores-2crores">1.5 Crores - 2 Crores</Link>
            </li>
            <li>
              <Link to="/budget/2crores-3crores">2 Crores - 3 Crores</Link>
            </li>
            <li>
              <Link to="/budget/3crores-4crores">3 Crores - 4 Crores</Link>
            </li>
            <li>
              <Link to="/budget/above-5crores">Above 5 Crores</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BudgetSelection;
