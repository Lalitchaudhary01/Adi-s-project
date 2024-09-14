import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-8">Attendance Tracking System</h1>
        <div className="space-y-4">
          <Link to="/login/teacher">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg w-64">
              Teacher's Login
            </button>
          </Link>
          <Link to="/login/student">
            <button className="bg-green-500 text-white py-2 px-4 rounded-lg w-64">
              Student's Login
            </button>
          </Link>
          <Link to="/login/parent">
            <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg w-64">
              Parent's Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
