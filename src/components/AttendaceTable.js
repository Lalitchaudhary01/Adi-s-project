import React from "react";

const AttendanceTable = ({ data }) => {
  return (
    <table className="min-w-full bg-white border rounded-lg">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">Date</th>
          <th className="py-2 px-4 border-b">Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((record, index) => (
          <tr key={index} className="border-t">
            <td className="py-2 px-4">{record.date}</td>
            <td
              className={`py-2 px-4 ${
                record.status === "Present" ? "text-green-500" : "text-red-500"
              }`}
            >
              {record.status}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AttendanceTable;
