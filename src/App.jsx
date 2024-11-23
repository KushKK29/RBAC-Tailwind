import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Login from "./pages/Requests";
import Dashboard from "./pages/Dashboard";
import AdminPanel from "./pages/AdminPanel";
import Users from "./pages/Users";
import AdminLogin from "./pages/AdminLogin";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [users, setUsers] = useState([]);
  const [login, setLogin] = useState(false);
  const admin = [
    {
      email: "admin@gmail.com",
      password: "admin@123",
    },
  ];
  const [roles, setRoles] = useState([]);

  return (
    <>
      <Header login={login} setLogin={setLogin} />
      <Routes>
        <Route
          path="/"
          element={
            <AdminLogin admin={admin} login={login} setLogin={setLogin} />
          }
        />
        <Route
          path="dashboard"
          element={<Dashboard roles={roles} users={users} />}
        />
        <Route
          path="admin"
          element={<AdminPanel roles={roles} setRoles={setRoles} />}
        />
        <Route
          path="users"
          element={<Users users={users} setUsers={setUsers} roles={roles} />}
        />
      </Routes>
    </>
  );
}

export default App;
