import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Login from "./pages/Requests";
import Dashboard from "./pages/Dashboard";
import AdminPanel from "./pages/AdminPanel";
import Users from "./pages/Users";
import AdminLogin from "./pages/AdminLogin";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RequestPanel from "./pages/RequestPanel";
function App() {
  const admin = [
    {
      email: "admin@gmail.com",
      password: "admin@123",
    },
  ];
  const [login, setLogin] = useState(
    () => JSON.parse(localStorage.getItem("login")) || false
  );
  const [users, setUsers] = useState(
    () => JSON.parse(localStorage.getItem("users")) || []
  );
  const [roles, setRoles] = useState(
    () => JSON.parse(localStorage.getItem("roles")) || []
  );
  const [requests, setRequests] = useState([
    { id: 1, username: "Alice", email: "alice@example.com", role: "Admin" },
    { id: 2, username: "Bob", email: "bob@example.com", role: "Moderator" },
    { id: 3, username: "Charlie", email: "charlie@example.com", role: "User" },
  ]);

  // Save to localStorage whenever login, users, or roles change
  useEffect(() => {
    localStorage.setItem("login", JSON.stringify(login));
  }, [login]);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem("roles", JSON.stringify(roles));
  }, [roles]);
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
          element={
            <Dashboard roles={roles} users={users} requests={requests} />
          }
        />
        <Route
          path="admin"
          element={<AdminPanel roles={roles} setRoles={setRoles} />}
        />
        <Route
          path="users"
          element={<Users users={users} setUsers={setUsers} roles={roles} />}
        />
        <Route
          path="requestpanel"
          element={
            <RequestPanel requests={requests} setRequests={setRequests} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
