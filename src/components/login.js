import React, { useState } from "react";

const Login = () => {
  // States to store username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent immediate form submission
    
    // Simple validation check
    if (username === "" || password === "") {
      setError("Username and password are required.");
    } else {
      setError(""); // Clear error message if validation is successful
      console.log("Logging in with", username, password);
  
      // Implement your login logic here (e.g., API call)
  
      // Timeout of 10 seconds to reset the page
      setTimeout(() => {
        console.log("Timeout reached, resetting page");
        
        // Reset form fields and errors here
        setUsername("");  // Assuming you have a `username` state
        setPassword("");  // Assuming you have a `password` state
        setError("");     // Reset any error messages
        // If you want to reload the page, you can use:
        // window.location.reload(); // Uncomment to refresh the page
        alert("BKL Kitna time lega")
  
      }, 10000); // 10-second timeout
    }
  };
  
 return (
    <div className="flex justify-center items-center min-h-screen bg-[#282c34]">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg p-6 bg-[#EDF4FD] rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;