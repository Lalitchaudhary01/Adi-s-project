// src/components/AttendanceReports.js
import React from "react";

const AttendanceReports = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full">
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">
          Attendance Reports
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center">
            <p className="text-lg font-semibold text-blue-700">
              Total Days: 30
            </p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow-md text-center">
            <p className="text-lg font-semibold text-green-700">
              Present: 26 days
            </p>
          </div>
          <div className="bg-red-100 p-6 rounded-lg shadow-md text-center">
            <p className="text-lg font-semibold text-red-700">Absent: 4 days</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-lg font-semibold text-gray-700">
            Attendance Percentage: <span className="text-blue-600">85%</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AttendanceReports;
