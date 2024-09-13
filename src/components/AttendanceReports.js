import React from "react";

const AttendanceReports = () => {
  const reports = [
    { month: "August", presentDays: 22, absentDays: 2 },
    { month: "July", presentDays: 20, absentDays: 5 },
    // More dummy reports
  ];

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Monthly Attendance Reports
        </h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 text-left">Month</th>
              <th className="py-2 text-left">Present Days</th>
              <th className="py-2 text-left">Absent Days</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, index) => (
              <tr key={index} className="border-t">
                <td className="py-2">{report.month}</td>
                <td className="py-2">{report.presentDays}</td>
                <td className="py-2">{report.absentDays}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceReports;
