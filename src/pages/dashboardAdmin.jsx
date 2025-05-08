import React, { useState } from "react";
import Navbar from "../components/Navbar"; // Asegúrate de que este componente exista y esté correctamente implementado

const DashboardAdmin = () => {
  const [users, setUsers] = useState([
    { id: 1, username: "andrea", email: "andrea@tecsup.edu.pe", role: "Admin" },
    { id: 2, username: "paulo", email: "paulo@tecsup.edu.pe", role: "User" },
    { id: 3, username: "carlos", email: "carlos@tecsup.edu.pe", role: "Moderator" },
  ]);

  const [editingUser, setEditingUser] = useState(null);

  const handleEditUser = (user) => {
    setEditingUser(user);
  };

  const handleUpdateUser = () => {
    setUsers(users.map((user) => (user.id === editingUser.id ? editingUser : user)));
    setEditingUser(null);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h2 className="mb-4">Admin Dashboard - User Management</h2>

        {/* User List */}
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">User List</h5>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                      <button
                        className="btn btn-warning btn-sm me-2"
                        onClick={() => handleEditUser(user)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
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

        {/* Edit User Modal */}
        {editingUser && (
          <div className="modal show d-block" tabIndex="-1">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Edit User</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setEditingUser(null)}
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      value={editingUser.username}
                      onChange={(e) =>
                        setEditingUser({ ...editingUser, username: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      value={editingUser.email}
                      onChange={(e) =>
                        setEditingUser({ ...editingUser, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Role</label>
                    <select
                      className="form-select"
                      value={editingUser.role}
                      onChange={(e) =>
                        setEditingUser({ ...editingUser, role: e.target.value })
                      }
                    >
                      <option value="User">User</option>
                      <option value="Moderator">Moderator</option>
                      <option value="Admin">Admin</option>
                    </select>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setEditingUser(null)}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleUpdateUser}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DashboardAdmin;