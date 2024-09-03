import React from 'react'
import background2 from "../assets/back.png"; // Import the background image
import Logo from "../assets/logo.png"; // Import the logo image

const Buy = () => {
    return (
        <div className=" flex justify-center items-center h-screen"
        style={{
            backgroundImage: `url(${Logo})`,
            marginTop: "40px",
            backgroundSize: "100px 100px",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
          }}


       
        >
        
          <div className="bg-white rounded-lg shadow-md w-80"
           style={{
            backgroundImage: `url(${background2})`,
           
          }}
          >
            
            <div className="bg-blue-600 text-white text-center rounded-t-lg py-4">
              
              <h1 className="text-xl font-semibold">Easy to Buy</h1>
            </div>
            <div className="p-6 space-y-4">
              <div className="bg-blue-800 text-white rounded-lg p-4">
                <h2 className="font-semibold">Webinar Summit</h2>
                <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <h2 className="font-semibold mt-4">Toolkit Description</h2>
                <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <h2 className="font-semibold mt-4">SB Expert Session Description</h2>
                <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="flex justify-between mt-4">
                  <button className="border border-orange-500 text-white rounded-xl py-2 px-4 mr-4">June 07, 2024</button>
                  <button className="border border-orange-500 text-white rounded-xl py-2 px-4">June 09, 2024</button>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg p-4">
                <h3 className="font-semibold text-gray-700">Download Idea Kit</h3>
                <div className="mt-4">
                  <div className="flex items-center">
                    <input type="radio" name="industry" id="selected" className="form-radio text-orange-500" />
                    <label htmlFor="selected" className="ml-2 text-sm  border-orange-500 rounded-xl p-2">Selected Industry - ₹ 259/-</label>
                  </div>
                  <div className="flex items-center mt-2">
                    <input type="radio" name="industry" id="all" className="form-radio text-orange-500" />
                    <label htmlFor="all" className="ml-2 text-sm border border-orange-500 rounded-xl p-2">All Industry - ₹ 475/-</label>
                  </div>
                </div>
              </div>
              <button className="bg-orange-500 text-white rounded-lg w-full py-2 mt-4">Reserve Now!</button>
            </div>
          </div>
        </div>
      );
    };

export default Buy
