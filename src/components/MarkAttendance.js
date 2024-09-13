// src/components/MarkAttendance.js
import React, { useState } from "react";

const MarkAttendance = ({ user }) => {
  const [attendanceStatus, setAttendanceStatus] = useState(null);

  const markAttendance = (status) => {
    setAttendanceStatus(status);
    alert(`You have marked yourself as ${status}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">
          Mark Attendance
        </h2>
        <p className="text-lg text-gray-700 mb-4">Welcome, {user.email}</p>
        <div className="flex justify-between mb-6">
          <button
            onClick={() => markAttendance("Present")}
            className="w-1/2 mr-2 py-3 bg-green-500 text-white rounded-lg font-semibold shadow-md hover:bg-green-600 transition"
          >
            Present
          </button>
          <button
            onClick={() => markAttendance("Absent")}
            className="w-1/2 ml-2 py-3 bg-red-500 text-white rounded-lg font-semibold shadow-md hover:bg-red-600 transition"
          >
            Absent
          </button>
        </div>
        {attendanceStatus && (
          <div className="text-center">
            <p
              className={`text-lg font-semibold ${
                attendanceStatus === "Present"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              Status: {attendanceStatus}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MarkAttendance;
