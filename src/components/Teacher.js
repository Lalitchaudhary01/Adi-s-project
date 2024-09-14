import React, { useState } from "react";

const Teacher = () => {
  // Sample data for students, you can fetch this from an API in a real-world app
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", status: "Present" },
    { id: 2, name: "Jane Smith", status: "Absent" },
    { id: 3, name: "Alice Johnson", status: "Present" },
    { id: 4, name: "Bob Brown", status: "Absent" },
    { id: 5, name: "Charlie Lee", status: "Present" },
  ]);

  const [selectedDate, setSelectedDate] = useState(
    new Date().toLocaleDateString()
  );

  const handleAttendanceChange = (id, status) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id ? { ...student, status } : student
      )
    );
  };

  const handleSubmit = () => {
    const absentStudents = students.filter(
      (student) => student.status === "Absent"
    );
    const absentNames = absentStudents
      .map((student) => student.name)
      .join(", ");

    alert(
      absentStudents.length > 0
        ? `These students are absent: ${absentNames}`
        : "All students are present"
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Teacher's Dashboard</h2>

        {/* Display Date, Teacher, and Subject */}
        <div className="mb-6">
          <p>
            <strong>Date:</strong> {selectedDate}
          </p>
          <p>
            <strong>Teacher:</strong> John Smith
          </p>
          <p>
            <strong>Subject:</strong> Mathematics
          </p>
        </div>

        {/* Attendance Table */}
        <table className="min-w-full bg-white border rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Student Name</th>
              <th className="py-2 px-4 border-b">Attendance</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-t">
                <td className="py-2 px-4">{student.name}</td>
                <td className="py-2 px-4">
                  <button
                    className={`mr-2 py-1 px-3 rounded-lg ${
                      student.status === "Present"
                        ? "bg-green-500 text-white"
                        : "bg-gray-300"
                    }`}
                    onClick={() =>
                      handleAttendanceChange(student.id, "Present")
                    }
                  >
                    Present
                  </button>
                  <button
                    className={`py-1 px-3 rounded-lg ${
                      student.status === "Absent"
                        ? "bg-red-500 text-white"
                        : "bg-gray-300"
                    }`}
                    onClick={() => handleAttendanceChange(student.id, "Absent")}
                  >
                    Absent
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Submit Button */}
        <div className="mt-6 text-center">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
