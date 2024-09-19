import React from "react";
import { useNavigate } from "react-router-dom";
import background2 from "../assets/back.png"; 
import Logo from "../assets/logo.png"; 
import Why from "../assets/Why.png"; 

const BudgetReason = () => {
  const navigate = useNavigate(); 

  const handleButtonClick = () => {
    navigate("/business-idea"); 
  };

  return (
    <div
  className="flex flex-col items-center justify-center min-h-screen bg-cover bg-no-repeat"
  style={{
    backgroundImage: `url(${Logo})`,
    marginTop: "40px", // Prevent the logo from repeating
    backgroundSize: "200px 150px",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
  }}
>
<div
    className="bg-white rounded-lg shadow-md w-full max-w-md p-4 md:p-6 space-y-4 mx-auto"
    style={{
      backgroundImage: `url(${background2})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "500px",
      marginTop: "150px",
    }}
  >
        <h1 className="text-2xl font-bold text-blue-900 mb-6">
          Select your Budget
        </h1>

        <div className="bg-blue-900 text-white p-6 mt-5 rounded-md shadow-md">
          <h2
            className="flex items-center justify-center rounded-md p-4"
            style={{
              backgroundImage: `url(${Why})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%", 
              height: "80px", 
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          ></h2>

          <div className="mt-4 text-left">
            <label className="block text-white text-sm font-bold mb-2">Select your Budget:</label>
            <div className="space-y-2">
              <div>
                <input
                  type="radio"
                  id="option1"
                  name="budget"
                  value="50L-1Cr"
                  className="mr-2"
                />
                <label htmlFor="option1">Passion-Driven</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="option2"
                  name="budget"
                  value="1Cr-1.5Cr"
                  className="mr-2"
                />
                <label htmlFor="option2">Financial Gain</label>
              </div>
              
              
            </div>
          </div>

          <div className="mt-4">
            
          </div>
          
        </div>
        <button
              onClick={handleButtonClick}
              className="w-full p-2 mt-10 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md font-bold transition duration-300"
            >
              Submit
            </button>
      </div>
    </div>
  );
};

export default BudgetReason;
