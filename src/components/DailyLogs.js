// src/components/DailyLogs.js
import React from "react";

const DailyLogs = ({ logs }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full">
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">
          Daily Logs
        </h2>
        <table className="w-full table-auto">
          <thead>
            <tr className="text-left text-gray-600 font-semibold">
              <th className="p-2">Email</th>
              <th className="p-2">Status</th>
              <th className="p-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => (
              <tr key={index} className="border-t">
                <td className="p-2">{log.email}</td>
                <td
                  className={`p-2 ${
                    log.status === "Present" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {log.status}
                </td>
                <td className="p-2">{log.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DailyLogs;
