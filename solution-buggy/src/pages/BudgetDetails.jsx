import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import background2 from "../assets/back.png"; // Background image
import Logo from "../assets/logo.png"; // Logo image
import Select from 'react-select'; // Import react-select

const allStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
  "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim",
  "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand",
  "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Lakshadweep", "Delhi", "Puducherry"
];

const options = allStates.map(state => ({ value: state, label: state }));

const BudgetDetails = () => {
  const [selectedState, setSelectedState] = useState(null); // Single state selection
  const [selectedGeographicStates, setSelectedGeographicStates] = useState([]); // Multi-state selection

  const navigate = useNavigate(); // Use the useNavigate hook for navigation

  // Handle single state selection
  const handleStateChange = (selectedOption) => {
    setSelectedState(selectedOption);
  };

  // Handle multi-state selection
  const handleGeographicStateChange = (selectedOptions) => {
    setSelectedGeographicStates(selectedOptions);
  };

  // Handle the "Next" button click
  const handleNextClick = () => {
    navigate("/budgetReason"); // Navigate to the next page
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
        <h1 className="text-xl font-bold text-blue-900 mb-4">
          Select your Budget
        </h1>

        {/* Single State Selection with Select Dropdown */}
        <div className="bg-blue-900 text-white p-4 mt-4 rounded-md shadow-md">
          <h2 className="flex items-center justify-center rounded-md p-4 bg-white text-black text-xl">
            Select your State
          </h2>
          <div className="mt-4">
            <Select
              className="w-full"
              value={selectedState}
              onChange={handleStateChange}
              options={options}
              placeholder="Select a State"
              styles={{
                control: (base) => ({
                  ...base,
                  border: '1px solid #e2e8f0',
                  boxShadow: 'none',
                  '&:hover': {
                    border: '1px solid #4a90e2',
                  },
                }),
                menu: (base) => ({
                  ...base,
                  borderRadius: '8px',
                  marginTop: '4px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                }),
                option: (base, state) => ({
                  ...base,
                  backgroundColor: state.isSelected ? '#4a90e2' : '#fff',
                  color: state.isSelected ? '#fff' : '#333',
                  '&:hover': {
                    backgroundColor: '#e2e8f0',
                  },
                }),
                placeholder: (base) => ({
                  ...base,
                  color: '#999',
                }),
                singleValue: (base) => ({
                  ...base,
                  color: '#333',
                }),
              }}
            />
          </div>

          {/* Multi-State Selection with Select Dropdown */}
          <div className="mt-6">
            <h2 className="flex items-center justify-center rounded-md p-4 bg-white text-black text-xl">
              Want to Explore New Geographic?
            </h2>
            <div className="mt-4">
              <Select
                isMulti
                className="w-full"
                value={selectedGeographicStates}
                onChange={handleGeographicStateChange}
                options={options}
                placeholder="Select States"
                styles={{
                  control: (base) => ({
                    ...base,
                    border: '1px solid #e2e8f0',
                    boxShadow: 'none',
                    '&:hover': {
                      border: '1px solid #4a90e2',
                    },
                  }),
                  menu: (base) => ({
                    ...base,
                    borderRadius: '8px',
                    marginTop: '4px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                  }),
                  multiValue: (base) => ({
                    ...base,
                    backgroundColor: '#4a90e2',
                    color: '#fff',
                    borderRadius: '4px',
                    margin: '2px',
                  }),
                  multiValueLabel: (base) => ({
                    ...base,
                    color: '#fff',
                    fontWeight: 'bold',
                  }),
                  multiValueRemove: (base) => ({
                    ...base,
                    color: '#fff',
                    ':hover': {
                      backgroundColor: 'red',
                      color: '#fff',
                    },
                  }),
                  option: (base, state) => ({
                    ...base,
                    backgroundColor: state.isSelected ? '#4a90e2' : '#fff',
                    color: state.isSelected ? '#fff' : '#333',
                    '&:hover': {
                      backgroundColor: '#e2e8f0',
                    },
                  }),
                  placeholder: (base) => ({
                    ...base,
                    color: '#999',
                  }),
                }}
              />
            </div>
          </div>

          {/* Next Button */}
          <div className="mt-6">
            <button
              onClick={handleNextClick}
              className="w-full p-2 bg-green-500 hover:bg-green-600 text-white py-2 rounded-md font-bold transition duration-300"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetDetails;
