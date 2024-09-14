import React from "react";

const ParentDashboard = () => {
  const attendancePercentage = 85.5; // Fetch from student's attendance data

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Parent Attendance Dashboard</h2>
        <p className="text-xl mb-4">Your child's attendance percentage is:</p>
        <p className="text-3xl font-bold text-green-500">
          {attendancePercentage}%
        </p>
      </div>
    </div>
  );
};

export default ParentDashboard;
