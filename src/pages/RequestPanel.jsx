import React, { useState } from "react";

const RequestPanel = ({ requests, setRequests }) => {
  // Initial user requests

  // Handle Accept Button
  const handleAccept = (id) => {
    setRequests(requests.filter((request) => request.id !== id));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">User Requests</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left">Username</th>
              <th className="px-4 py-2 text-left">Email ID</th>
              <th className="px-4 py-2 text-left">Request for Role</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.length > 0 ? (
              requests.map((user) => (
                <tr key={user.id} className="border-b">
                  <td className="px-4 py-2">{user.username}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">{user.role}</td>
                  <td className="px-4 py-2 text-center">
                    <button
                      onClick={() => handleAccept(user.id)}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                      Accept
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  No pending requests.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestPanel;
