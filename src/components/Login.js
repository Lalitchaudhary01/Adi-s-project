import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Login = () => {
  const { role } = useParams(); // 'teacher', 'student', or 'parent'
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (role === "teacher") {
      navigate("/dashboard/teacher", { state: { teacher: username } });
    } else if (role === "student") {
      navigate("/dashboard/student", { state: { student: username } });
    } else if (role === "parent") {
      navigate("/dashboard/parent", { state: { parent: username } });
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 capitalize">{role} Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="block w-full mb-4 p-2 border rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full mb-4 p-2 border rounded-lg"
        />
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white w-full py-2 rounded-lg hover:bg-blue-600"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
