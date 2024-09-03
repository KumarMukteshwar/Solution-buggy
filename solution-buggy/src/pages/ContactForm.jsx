import React, { useState } from "react";
import Logo from "../assets/logo.png"; // Import the logo image
import Background from "../assets/back2.png"; // Import the background image
import { useNavigate } from "react-router-dom";

const ConnectForm = () => {
    const navigate = useNavigate();
  // State to store form input values
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("+91");
  const [file, setFile] = useState(null);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation or other logic here
    if (!email || !name || !mobile) {
      alert("Please fill in all required fields.");
      return;
    }

    // Placeholder for form submission logic
    alert(
      `Form submitted!\nEmail: ${email}\nName: ${name}\nMobile: ${mobile}\nFile: ${
        file ? file.name : "No file uploaded"
      }`
    );
    navigate("/buy");
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        minHeight: "500px", 
          maxWidth:"300px", // Add this line to limit the width
        margin: "0 auto", // Center the container
        // marginBottom: "19%",
        marginTop: "20px",
        borderRadius: "10px",
      }}
    >
      {/* Header with Logo */}
      <header className="w-full flex justify-center py-4 shadow-sm">
        <img src={Logo} alt="Solution Buggy" className="h-12" />
      </header>

      {/* Form Section */}
      <section className="w-full max-w-xs p-4 mt-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-blue-900 text-center mb-2">
          Let's Connect
        </h2>
        <p className="text-sm text-center text-gray-600 mb-6">
          Streamlining Efficiency for Tomorrow's Success
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="mobile"
              className="block text-sm font-medium text-gray-700"
            >
              Mobile number
            </label>
            <input
              type="tel"
              id="mobile"
              defaultValue="+91"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="upload"
              className="block text-sm font-medium text-gray-700"
            >
              Upload voice recorded audio
            </label>
            <label
              htmlFor="upload"
              className="mt-1 flex justify-center items-center w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-400 cursor-pointer hover:text-gray-600 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            >
              <input
                type="file"
                id="upload"
                className="hidden"
                onChange={(e) => setFile(e.target.files[0])}
              />
              <span className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15v4m0 0v-4m0 0a3 3 0 01-3-3V9a3 3 0 016 0v3a3 3 0 01-3 3z"
                  />
                </svg>
                <span>{file ? file.name : "Click to upload"}</span>
              </span>
            </label>
          </div>

          <div className="flex justify-center">
            <button
              onSubmit={handleSubmit}
              className="w-1/2 py-2 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-md shadow-md transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ConnectForm;
