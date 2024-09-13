// src/App.js
import React, { useState } from "react";
import Login from "./components/Login";
import MarkAttendance from "./components/MarkAttendance";
import DailyLogs from "./components/DailyLogs";
import AttendanceReports from "./components/AttendanceReports";

function App() {
  const [user, setUser] = useState(null);
  const [logs, setLogs] = useState([]);

  const addLog = (status) => {
    const newLog = {
      email: user.email,
      status: status,
      date: new Date().toLocaleDateString(),
    };
    setLogs([...logs, newLog]);
  };

  return (
    <div className="App">
      {!user ? (
        <Login setUser={setUser} />
      ) : (
        <div>
          <MarkAttendance user={user} />
          <button onClick={() => addLog("Present")}>Mark Present</button>
          <button onClick={() => addLog("Absent")}>Mark Absent</button>

          <h2>Navigation</h2>
          <DailyLogs logs={logs} />
          <AttendanceReports />
        </div>
      )}
    </div>
  );
}

export default App;
