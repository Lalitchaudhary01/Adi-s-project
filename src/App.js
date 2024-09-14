import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./components/Login.js";
import Teacher from "./components/Teacher.js";
import StudentDashboard from "./components/StudentDashBoard.js";

import ParentDashboard from "./components/ParentDashboard.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login/:role" element={<Login />} />
        <Route path="/dashboard/teacher" element={<Teacher />} />
        <Route path="/dashboard/student" element={<StudentDashboard />} />
        <Route path="/dashboard/parent" element={<ParentDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
