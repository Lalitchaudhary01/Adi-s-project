import React from "react";
import AttendanceTable from "./AttendaceTable.js";

const attendanceData = [
  { date: "2024-09-01", status: "Present" },
  { date: "2024-09-02", status: "Absent" },
  { date: "2024-09-03", status: "Present" },
  // More records...
];

const StudentDashboard = () => {
  const totalClasses = attendanceData.length;
  const presentCount = attendanceData.filter(
    (record) => record.status === "Present"
  ).length;
  const absentCount = totalClasses - presentCount;
  const attendancePercentage = (presentCount / totalClasses) * 100;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">
          Student Attendance Dashboard
        </h2>
        <p className="mb-4">Total Classes: {totalClasses}</p>
        <p className="mb-4">Classes Attended: {presentCount}</p>
        <p className="mb-4">Classes Missed: {absentCount}</p>
        <p className="mb-4">
          Attendance Percentage: {attendancePercentage.toFixed(2)}%
        </p>

        {/* Reusable Attendance Table */}
        <AttendanceTable data={attendanceData} />
      </div>
    </div>
  );
};

export default StudentDashboard;
