import React from "react";

const DailyLogs = () => {
  const logs = [
    { date: "2024-09-12", status: "Present" },
    { date: "2024-09-11", status: "Absent" },
    // More dummy logs
  ];

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Daily Attendance Logs
        </h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 text-left">Date</th>
              <th className="py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => (
              <tr key={index} className="border-t">
                <td className="py-2">{log.date}</td>
                <td className="py-2">{log.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DailyLogs;
