import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const students = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Michael Johnson" },
  { id: 4, name: "Emily Davis" },
  { id: 5, name: "Chris Brown" },
];

const Dashboard = () => {
  const location = useLocation();
  const { teacher, subject } = location.state || {};
  const [attendance, setAttendance] = useState({});

  const handleAttendance = (id, status) => {
    setAttendance((prev) => ({ ...prev, [id]: status }));
  };

  const handleSubmit = () => {
    const presentStudents = students.filter(
      (student) => attendance[student.id] === "Present"
    );
    const absentStudents = students.filter(
      (student) => attendance[student.id] === "Absent"
    );
    const presentNames = presentStudents
      .map((student) => student.name)
      .join(", ");
    const absentNames = absentStudents
      .map((student) => student.name)
      .join(", ");

    alert(`Present: ${presentNames}\nAbsent: ${absentNames}`);
  };

  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
        <div className="flex justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold">Teacher: {teacher}</h2>
            <h3 className="text-xl text-gray-700">Subject: {subject}</h3>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold">{currentDate}</p>
          </div>
        </div>
        <table className="min-w-full bg-white border rounded-lg mb-6">
          <thead>
            <tr>
              <th className="py-2 text-left">Student</th>
              <th className="py-2 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-t">
                <td className="py-2 px-4">{student.name}</td>
                <td className="py-2 px-4 text-center">
                  <button
                    onClick={() => handleAttendance(student.id, "Present")}
                    className={`px-4 py-2 rounded-lg ${
                      attendance[student.id] === "Present"
                        ? "bg-green-500"
                        : "bg-green-300"
                    } text-white mr-2`}
                  >
                    Present
                  </button>
                  <button
                    onClick={() => handleAttendance(student.id, "Absent")}
                    className={`px-4 py-2 rounded-lg ${
                      attendance[student.id] === "Absent"
                        ? "bg-red-500"
                        : "bg-red-300"
                    } text-white`}
                  >
                    Absent
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
