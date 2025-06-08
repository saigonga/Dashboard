import React, { useState } from 'react';
import DataTable from '../../components/datatables/DataTables';
import './UserData.css';

const UserData = () => {
    const [users, setUsers] = useState([
        { id: 1, name: 'Sai', email: 'Gonga@example.com', status: 'Active', role: 'Admin' },
        { id: 2, name: 'Shrutishree', email: 'Shree@example.com', status: 'Inactive', role: 'User' },
        { id: 3, name: 'Swara', email: 'Swara@example.com', status: 'Active', role: 'User' },
        { id: 4, name: 'Durvesh', email: 'Durvesh@example.com', status: 'Active', role: 'Editor' },
        { id: 5, name: 'Mallu', email: 'Mallu@example.com', status: 'Inactive', role: 'User' },
    ]);

    const [showAddUserModal, setShowAddUserModal] = useState(false);
    const [newUserName, setNewUserName] = useState('');
    const [newUserEmail, setNewUserEmail] = useState('');
    const [newUserStatus, setNewUserStatus] = useState('Active');
    const [newUserRole, setNewUserRole] = useState('User');

    const handleAddUser = () => {
        if (newUserName.trim() === '' || newUserEmail.trim() === '') return;

        const newUser = {
            id: users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1,
            name: newUserName,
            email: newUserEmail,
            status: newUserStatus,
            role: newUserRole,
        };

        setUsers(prevUsers => [...prevUsers, newUser]);
        setNewUserName('');
        setNewUserEmail('');
        setNewUserStatus('Active');
        setNewUserRole('User');
        setShowAddUserModal(false);
    };

    // Function to pass to DataTable for editing/deleting users (if needed in future)
    const onDeleteUser = (id) => {
        setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
    };

    const onEditUser = (id, updatedUser) => {
        setUsers(prevUsers => 
            prevUsers.map(user => (user.id === id ? { ...user, ...updatedUser } : user))
        );
    };


    return (
        <div className="user-data-container">
            <div className="user-data-header">
                <h1>User Management</h1>
                <button className="add-user-btn" onClick={() => setShowAddUserModal(true)}>Add New User</button>
            </div>
            <DataTable users={users} onDeleteUser={onDeleteUser} onEditUser={onEditUser} />

            {showAddUserModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Add New User</h2>
                        <input
                            type="text"
                            placeholder="Name"
                            value={newUserName}
                            onChange={(e) => setNewUserName(e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={newUserEmail}
                            onChange={(e) => setNewUserEmail(e.target.value)}
                        />
                        <select
                            value={newUserStatus}
                            onChange={(e) => setNewUserStatus(e.target.value)}
                        >
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                        <select
                            value={newUserRole}
                            onChange={(e) => setNewUserRole(e.target.value)}
                        >
                            <option value="User">User</option>
                            <option value="Admin">Admin</option>
                            <option value="Editor">Editor</option>
                        </select>
                        <div className="modal-actions">
                            <button onClick={handleAddUser}>Add User</button>
                            <button onClick={() => setShowAddUserModal(false)} className="cancel-btn">Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserData;