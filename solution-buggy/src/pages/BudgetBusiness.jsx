import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import IndustryImage from "../assets/industry.png";
import Background from "../assets/back.png";
import Select from 'react-select';

const industryOptions = [
  { value: 'beverage', label: 'Beverage' },
  { value: 'chemical', label: 'Chemical Industry' },
  { value: 'electronics & semiconductor', label: 'Electronic & Semiconductor' },
  { value: 'food', label: 'Food Industry' },
  { value: 'packaging', label: 'Packaging Industry' },
  { value: 'energy', label: 'Energy' },
  { value: 'pharma', label: 'Pharma Industry' },
  { value: 'textile', label: 'Textile Industry' }
];

const budgetOptions = [
  { value: 'low', label: 'Less than $10k' },
  { value: 'medium', label: '$10k - $50k' },
  { value: 'high', label: 'More than $50k' }
];

const Options = [
  { value: 'andhra-pradesh', label: 'Andhra Pradesh' },
  { value: 'arunachal-pradesh', label: 'Arunachal Pradesh' },
  { value: 'assam', label: 'Assam' },
  { value: 'bihar', label: 'Bihar' },
  { value: 'chhattisgarh', label: 'Chhattisgarh' },
  { value: 'goa', label: 'Goa' },
  { value: 'gujarat', label: 'Gujarat' },
  { value: 'haryana', label: 'Haryana' },
  { value: 'himachal-pradesh', label: 'Himachal Pradesh' },
  { value: 'jharkhand', label: 'Jharkhand' },
  { value: 'karnataka', label: 'Karnataka' },
  { value: 'kerala', label: 'Kerala' },
  { value: 'madhya-pradesh', label: 'Madhya Pradesh' },
  { value: 'maharashtra', label: 'Maharashtra' },
  { value: 'manipur', label: 'Manipur' },
  { value: 'meghalaya', label: 'Meghalaya' },
  { value: 'mizoram', label: 'Mizoram' },
  { value: 'nagaland', label: 'Nagaland' },
  { value: 'odisha', label: 'Odisha' },
  { value: 'punjab', label: 'Punjab' },
  { value: 'rajasthan', label: 'Rajasthan' },
  { value: 'sikkim', label: 'Sikkim' },
  { value: 'tamil-nadu', label: 'Tamil Nadu' },
  { value: 'telangana', label: 'Telangana' },
  { value: 'tripura', label: 'Tripura' },
  { value: 'uttar-pradesh', label: 'Uttar Pradesh' },
  { value: 'uttarakhand', label: 'Uttarakhand' },
  { value: 'west-bengal', label: 'West Bengal' },
  { value: 'andaman-nicobar', label: 'Andaman and Nicobar Islands' },
  { value: 'chandigarh', label: 'Chandigarh' },
  { value: 'dadar-nagar-haveli', label: 'Dadra and Nagar Haveli' },
  { value: 'daman-diu', label: 'Daman and Diu' },
  { value: 'lakshadweep', label: 'Lakshadweep' },
  { value: 'delhi', label: 'Delhi' },
  { value: 'puducherry', label: 'Puducherry' },
  { value: 'ladakh', label: 'Ladakh' },
  { value: 'jammu-kashmir', label: 'Jammu and Kashmir' },
];

const BusinessIdeas = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [industryData, setIndustryData] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSBExpertClick = () => {
    navigate("/contact");
  };

  const handleETBClick = () => {
    navigate("/buy");
  };

  const handleFilterClick = () => {
    setShowFilters(!showFilters);
  };

  const fetchIndustryData = async () => {
    try {
      setLoading(true);
      const response = await fetch('/industriesData.json');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setLoading(false);
      return data;
    } catch (error) {
      console.error('Error fetching industry data:', error);
      setLoading(false);
      return [];
    }
  };

  useEffect(() => {
    if (selectedIndustry) {
      fetchIndustryData().then((data) => {
        const selectedData = data.find(ind => ind.id === selectedIndustry.value);
        setIndustryData(selectedData || null);
      });
    }
  }, [selectedIndustry]);

  const PlanningComponent = ({ plan }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    return (
      <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
        <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
        <p>
          {showFullDescription
            ? plan.description
            : `${plan.description.slice(0, 100)}...`}
        </p>
        <button
          onClick={() => setShowFullDescription(!showFullDescription)}
          className="mt-2 text-blue-600 underline"
        >
          {showFullDescription ? "Read Less" : "Read More"}
        </button>
        <div className="mt-4 flex justify-between">
          <button
            onClick={handleSBExpertClick}
            className="bg-blue-600 text-white p-2 rounded-md shadow-md"
          >
            SB Expert
          </button>
          {showFullDescription && (
          <button
            onClick={handleETBClick}
            className="bg-green-600 text-white p-2 rounded-md shadow-md"
          >
            ETB
          </button>
        )}
        </div>
      </div>
    );
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
      backgroundImage: `url(${Background})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "500px",
      marginTop: "150px",
    }}
  >
        {/* Header with Logo */}
      

        {/* Industry Section */}
        <section className="w-full max-w-sm p-4 mt-4 rounded-lg shadow-md">
          <div className="flex flex-col items-center justify-center rounded-md p-2">
            <img
              src={IndustryImage}
              alt="Industry"
              className="h-15 w-15 rounded-md mb-4"
            />
            <Select 
              value={selectedIndustry}
              onChange={setSelectedIndustry}
              options={industryOptions}
              placeholder="Select Your Industry"
              className="w-full mb-4"
            />
          </div>
        </section>

        {/* Business Ideas Section */}
        <section className="w-full max-w-sm p-4 mt-4">
          <h1 className="text-2xl font-bold text-blue-900 mb-4">
            Business Ideas
          </h1>
          <button
            onClick={handleFilterClick}
            className="mb-4 flex items-center space-x-2 bg-white p-2 rounded-md shadow-sm"
          >
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

          {showFilters && (
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="mb-4">
                <h2 className="text-lg font-bold text-blue-900 mb-2">Budget</h2>
                <Select
                  value={selectedBudget}
                  onChange={setSelectedBudget}
                  options={budgetOptions}
                  placeholder="Select Budget"
                />
              </div>

              <div className="mb-4">
                <h2 className="text-lg font-bold text-blue-900 mb-2">Location</h2>
                <Select
                  isMulti
                  value={selectedLocation}
                  onChange={setSelectedLocation}
                  options={Options}
                  placeholder="Select Location(s)"
                />
              </div>
            </div>
          )}

          {/* Display industry data or loading */}
          <div className="mt-4">
            {loading ? (
              <p className="text-blue-900 font-semibold">Loading...</p>
            ) : industryData ? (
              <div>
                <h2 className="text-2xl font-bold mb-4">{industryData.name}</h2>
                {industryData.plans.map((plan, index) => (
                  <PlanningComponent key={index} plan={plan} />
                ))}
              </div>
            ) : (
              <p className="text-gray-600">Please select an industry to view details.</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BusinessIdeas;
