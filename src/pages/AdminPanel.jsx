import React, { useState } from "react";

const AdminPanel = ({ roles, setRoles }) => {
  const predefinedRoles = ["Admin", "User", "Finance", "Inventory", "Others"];
  const predefinedPermissions = [
    "Read",
    "Write",
    "Delete",
    "Access Inventory Page",
    "Access Billing Page",
    "Others",
  ];

  const [showModal, setShowModal] = useState(false);
  const [showRoleInfoModal, setShowRoleInfoModal] = useState(false);
  const [newRole, setNewRole] = useState({ name: "", permissions: [] });
  const [isCustomRole, setIsCustomRole] = useState(false);
  const [customPermission, setCustomPermission] = useState("");
  const [isAddingCustomPermission, setIsAddingCustomPermission] =
    useState(false);
  const [editingRole, setEditingRole] = useState(null);
  const [roleToView, setRoleToView] = useState(null);

  const handleAddRole = () => {
    if (editingRole) {
      const updatedRoles = roles.map((role) =>
        role.id === editingRole.id
          ? { ...role, name: newRole.name, permissions: newRole.permissions }
          : role
      );
      setRoles(updatedRoles);
    } else {
      const newRoleEntry = {
        id: roles.length + 1,
        name: newRole.name,
        permissions: newRole.permissions,
      };
      setRoles([...roles, newRoleEntry]);
    }
    resetState();
  };

  const handleDeleteRole = (id) => {
    setRoles(roles.filter((role) => role.id !== id));
  };

  const handleEditRoleClick = (role) => {
    setEditingRole(role);
    setNewRole({ name: role.name, permissions: role.permissions });
    setShowModal(true);
  };

  const handleViewRole = (role) => {
    setRoleToView(role);
    setShowRoleInfoModal(true);
  };

  const handleAddPermission = (permission) => {
    if (permission && !newRole.permissions.includes(permission)) {
      setNewRole({
        ...newRole,
        permissions: [...newRole.permissions, permission],
      });
    }
  };

  const handleDeletePermission = (permission) => {
    setNewRole({
      ...newRole,
      permissions: newRole.permissions.filter((p) => p !== permission),
    });
  };

  const handleAddCustomPermission = () => {
    if (customPermission.trim()) {
      handleAddPermission(customPermission.trim());
      setCustomPermission("");
      setIsAddingCustomPermission(false);
    }
  };

  const resetState = () => {
    setShowModal(false);
    setNewRole({ name: "", permissions: [] });
    setIsCustomRole(false);
    setCustomPermission("");
    setIsAddingCustomPermission(false);
    setEditingRole(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto p-5">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Admin Panel
        </h2>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mb-5"
          onClick={() => setShowModal(true)}
        >
          Add Role
        </button>
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full border-collapse">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold">
                  ID
                </th>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold">
                  Role Name
                </th>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold">
                  Permissions
                </th>
                <th className="px-4 py-2 text-center text-gray-700 font-semibold">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {roles.map((role) => (
                <tr
                  key={role.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-2">{role.id}</td>
                  <td className="px-4 py-2">{role.name}</td>
                  <td className="px-4 py-2">{role.permissions.join(", ")}</td>
                  <td className="px-4 py-2 text-center">
                    <button
                      className="text-blue-600 hover:underline mr-3"
                      onClick={() => handleViewRole(role)}
                    >
                      View
                    </button>
                    <button
                      className="text-yellow-600 hover:underline mr-3"
                      onClick={() => handleEditRoleClick(role)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-600 hover:underline"
                      onClick={() => handleDeleteRole(role.id)}
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

      {/* Add/Edit Role Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-bold mb-4">
              {editingRole ? "Edit Role" : "Add Role"}
            </h3>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Role</label>
              <select
                value={newRole.name}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === "Others") {
                    setIsCustomRole(true);
                    setNewRole({ ...newRole, name: "" });
                  } else {
                    setIsCustomRole(false);
                    setNewRole({ ...newRole, name: value });
                  }
                }}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="">Select Role...</option>
                {predefinedRoles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </div>
            {isCustomRole && (
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">
                  Custom Role Name
                </label>
                <input
                  type="text"
                  value={newRole.name}
                  onChange={(e) =>
                    setNewRole({ ...newRole, name: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
            )}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Permissions</label>
              <select
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === "Others") {
                    setIsAddingCustomPermission(true);
                  } else {
                    handleAddPermission(value);
                  }
                }}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="">Select Permission...</option>
                {predefinedPermissions.map((permission) => (
                  <option key={permission} value={permission}>
                    {permission}
                  </option>
                ))}
              </select>
            </div>
            {isAddingCustomPermission && (
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Custom Permission"
                  value={customPermission}
                  onChange={(e) => setCustomPermission(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                />
                <button
                  className="bg-blue-500 text-white px-3 py-1 mt-2 rounded"
                  onClick={handleAddCustomPermission}
                >
                  Add Custom Permission
                </button>
              </div>
            )}
            <div className="mb-4">
              {newRole.permissions.map((permission) => (
                <span
                  key={permission}
                  className="inline-block bg-gray-200 text-gray-700 px-2 py-1 rounded mr-2 mb-2 cursor-pointer"
                  onClick={() => handleDeletePermission(permission)}
                >
                  {permission} ✕
                </span>
              ))}
            </div>
            <div className="flex justify-end">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                onClick={resetState}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleAddRole}
                disabled={!newRole.name || newRole.permissions.length === 0}
              >
                {editingRole ? "Save Changes" : "Add Role"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View Role Modal */}
      {showRoleInfoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-bold mb-4">Role Information</h3>
            <p>
              <span className="font-semibold">Role Name:</span>{" "}
              {roleToView.name}
            </p>
            <p>
              <span className="font-semibold">Permissions:</span>{" "}
              {roleToView.permissions.join(", ")}
            </p>
            <div className="flex justify-end mt-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => setShowRoleInfoModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
