import React, { useState } from 'react';
import './DataTables.css';

const DataTable = ({ users, onDeleteUser, onEditUser }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterRole, setFilterRole] = useState('All');
    const [filterStatus, setFilterStatus] = useState('All');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleRoleFilterChange = (e) => {
        setFilterRole(e.target.value);
    };

    const handleStatusFilterChange = (e) => {
        setFilterStatus(e.target.value);
    };

    const filteredUsers = users.filter((user) => {
      const matchesSearchTerm =
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRole = filterRole === "All" || user.role === filterRole;
      const matchesStatus =
        filterStatus === "All" || user.status === filterStatus;
      return matchesSearchTerm && matchesRole && matchesStatus;
    });

    const editUser = (id) => {
        console.log('Edit user:', id);
    };

    const deleteUser = (id) => {
        onDeleteUser(id);
    };

    return (
        <div className="table-container">
            <div className="table-header">
                <h3>Recent Users</h3>
                <div className="table-actions">
                    <input 
                        type="text" 
                        placeholder="Search users..." 
                        className="search-input"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <select className="filter-select" value={filterRole} onChange={handleRoleFilterChange}>
                        <option value="All">All Roles</option>
                        <option value="Admin">Admin</option>
                        <option value="Editor">Editor</option>
                        <option value="User">User</option>
                    </select>
                    <select className="filter-select" value={filterStatus} onChange={handleStatusFilterChange}>
                        <option value="All">All Statuses</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div>
            </div>

            <div className="table-wrapper">
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map((row) => (
                            <tr key={row.id}>
                                <td>{row.id}</td>
                                <td>{row.name}</td>
                                <td>{row.email}</td>
                                <td>
                                    <span className={`status-badge ${row.status.toLowerCase()}`}>
                                        {row.status}
                                    </span>
                                </td>
                                <td>{row.role}</td>
                                <td>
                                    <button className="action-btn" onClick={() => editUser(row.id)}>Edit</button>
                                    <button className="action-btn delete" onClick={() => deleteUser(row.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DataTable; 