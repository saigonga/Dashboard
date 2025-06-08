import React from 'react';
import KanbanBoard from '../../components/KanbanBoard/KanbanBoard';

const Tasks = () => {
    return (
        <div className="tasks-container">
            <div className="tasks-header">
                <h1>Task Management</h1>
            </div>
            <KanbanBoard />
        </div>
    );
};

export default Tasks;