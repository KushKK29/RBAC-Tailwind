import React, { useState, useEffect } from "react";

const UsersPage = ({ users, setUsers, roles }) => {
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "",
    status: "Active",
  });

  useEffect(() => {
    if (users && users.length) {
      const uniqueUsers = Array.from(
        new Map(
          users.map((user) => [
            user.id,
            {
              id: user.id,
              name: user.name,
              email: user.email,
              role: user.roleName || user.role,
              status: user.status || "Active",
            },
          ])
        ).values()
      );

      if (JSON.stringify(uniqueUsers) !== JSON.stringify(users)) {
        setUsers(uniqueUsers);
      }
    }
  }, [users, setUsers]);

  const handleViewUser = (user) => {
    setSelectedUser(user);
    setShowViewModal(true);
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setShowEditModal(true);
  };

  const handleDeleteUser = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    }
  };

  const handleSaveUser = (e) => {
    e.preventDefault();
    const updatedUsers = users.map((user) =>
      user.id === selectedUser.id ? selectedUser : user
    );
    setUsers(updatedUsers);
    setShowEditModal(false);
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const maxId = Math.max(...users.map((user) => user.id), 0);
    const newUserWithId = {
      ...newUser,
      id: maxId + 1,
    };
    setUsers((prevUsers) => [...prevUsers, newUserWithId]);
    setShowAddModal(false);
    setNewUser({
      name: "",
      email: "",
      role: "",
      status: "Active",
    });
  };
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-gray-800 mb-6">
          User Management
        </h3>
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
          onClick={() => setShowAddModal(true)}
        >
          Add User
        </button>
        <div className="mt-6">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow">
              <thead className="bg-blue-500 text-white">
                <tr>
                  <th className="text-left py-3 px-4">Name</th>
                  <th className="text-left py-3 px-4">Role</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b">
                    <td className="py-3 px-4">{user.name}</td>
                    <td className="py-3 px-4">{user.role}</td>
                    <td
                      className={`py-3 px-4 ${
                        user.status === "Active"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {user.status}
                    </td>
                    <td className="py-3 px-4 flex space-x-2">
                      <button
                        className="bg-green-500 text-white px-4 py-1 rounded-lg hover:bg-green-600 transition"
                        onClick={() => handleViewUser(user)}
                      >
                        View
                      </button>
                      <button
                        className="bg-yellow-500 text-white px-4 py-1 rounded-lg hover:bg-yellow-600 transition"
                        onClick={() => handleEditUser(user)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition"
                        onClick={() => handleDeleteUser(user.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* View User Modal */}
        {showViewModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg w-96 p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                View User Details
              </h3>
              {selectedUser && (
                <div>
                  <p className="mb-2">
                    <span className="font-semibold">Name:</span>{" "}
                    {selectedUser.name}
                  </p>
                  <p className="mb-2">
                    <span className="font-semibold">Email:</span>{" "}
                    {selectedUser.email}
                  </p>
                  <p className="mb-2">
                    <span className="font-semibold">Role:</span>{" "}
                    {selectedUser.role}
                  </p>
                  <p>
                    <span className="font-semibold">Status:</span>{" "}
                    {selectedUser.status}
                  </p>
                </div>
              )}
              <div className="mt-4 flex justify-end">
                <button
                  className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
                  onClick={() => setShowViewModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Edit User Modal */}
        {showEditModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg w-96 p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Edit User Details
              </h3>
              {selectedUser && (
                <form onSubmit={handleSaveUser}>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">
                      Name
                    </label>
                    <input
                      type="text"
                      value={selectedUser.name}
                      onChange={(e) =>
                        setSelectedUser({
                          ...selectedUser,
                          name: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">
                      Email
                    </label>
                    <input
                      type="email"
                      value={selectedUser.email}
                      onChange={(e) =>
                        setSelectedUser({
                          ...selectedUser,
                          email: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  {/* yaha change karna hai */}
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">
                      Role
                    </label>
                    <select
                      type="text"
                      value={selectedUser.role}
                      onChange={(e) =>
                        setSelectedUser({
                          ...selectedUser,
                          role: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="" disabled>
                        Select a role
                      </option>
                      {roles.map((role) => (
                        <option key={role.id} value={role.name}>
                          {role.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">
                      Status
                    </label>
                    <select
                      value={selectedUser.status}
                      onChange={(e) =>
                        setSelectedUser({
                          ...selectedUser,
                          status: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                  <div className="flex justify-end space-x-2">
                    <button
                      type="button"
                      className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
                      onClick={() => setShowEditModal(false)}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                      Save
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

        {/* Add User Modal */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg w-96 p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Add New User
              </h3>
              <form onSubmit={handleAddUser}>
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    value={newUser.name}
                    onChange={(e) =>
                      setNewUser({ ...newUser, name: e.target.value })
                    }
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    value={newUser.email}
                    onChange={(e) =>
                      setNewUser({ ...newUser, email: e.target.value })
                    }
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold">
                    Role
                  </label>
                  <select
                    value={newUser.role}
                    onChange={(e) =>
                      setNewUser({ ...newUser, role: e.target.value })
                    }
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="" disabled>
                      Select a role
                    </option>
                    {roles.map((role) => (
                      <option key={role.id} value={role.name}>
                        {role.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex justify-end space-x-2">
                  <button
                    type="button"
                    className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
                    onClick={() => setShowAddModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                  >
                    Add User
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UsersPage;
