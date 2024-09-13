import React, { useState } from "react";

const MarkAttendance = () => {
  const [attendance, setAttendance] = useState(false);

  const handleAttendance = () => {
    setAttendance(!attendance);
    alert(attendance ? "Attendance Marked!" : "Attendance Removed!");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Mark Attendance</h2>
        <div className="flex justify-center">
          <button
            onClick={handleAttendance}
            className={`p-4 rounded-lg ${
              attendance ? "bg-green-500" : "bg-red-500"
            } text-white`}
          >
            {attendance ? "Attendance Marked" : "Mark Attendance"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarkAttendance;
