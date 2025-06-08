import React, { useState } from 'react';
import './KanbanBoard.css';

function KanbanBoard() {
    const [columns, setColumns] = useState([
        {
            id: 'todo',
            title: 'To Do',
            tasks: [
                { id: 1, title: 'Design new dashboard', priority: 'high' },
                { id: 2, title: 'Update documentation', priority: 'medium' },
            ]
        },
        {
            id: 'in-progress',
            title: 'In Progress',
            tasks: [
                { id: 3, title: 'Implement authentication', priority: 'high' },
                { id: 4, title: 'Fix navigation bugs', priority: 'low' },
            ]
        },
        {
            id: 'done',
            title: 'Done',
            tasks: [
                { id: 5, title: 'Setup project structure', priority: 'high' },
                { id: 6, title: 'Create initial components', priority: 'medium' },
            ]
        }
    ]);

    const [showAddTaskModal, setShowAddTaskModal] = useState(false);
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [newTaskPriority, setNewTaskPriority] = useState('medium');

    const handleAddTask = () => {
        if (newTaskTitle.trim() === '') return;

        const newTask = {
            id: Date.now(),
            title: newTaskTitle,
            priority: newTaskPriority.toLowerCase() // Ensure priority is lowercase for CSS class matching
        };

        setColumns(prevColumns => {
            const updatedColumns = [...prevColumns];
            const todoColumnIndex = updatedColumns.findIndex(col => col.id === 'todo');
            if (todoColumnIndex !== -1) {
                updatedColumns[todoColumnIndex] = {
                    ...updatedColumns[todoColumnIndex],
                    tasks: [...updatedColumns[todoColumnIndex].tasks, newTask]
                };
            }
            return updatedColumns;
        });

        setNewTaskTitle('');
        setNewTaskPriority('medium');
        setShowAddTaskModal(false);
    };

    return (
        <div className="kanban-container">
            <div className="kanban-header">
                <h3>Project Tasks</h3>
                <button className="add-task-btn" onClick={() => setShowAddTaskModal(true)}>Add Task</button>
            </div>
            
            <div className="kanban-board">
                {columns.map((column) => (
                    <div key={column.id} className="kanban-column">
                        <div className="column-header">
                            <h4>{column.title}</h4>
                            <span className="task-count">{column.tasks.length}</span>
                        </div>
                        
                        <div className="task-list">
                            {column.tasks.map((task) => (
                                <div key={task.id} className="task-card">
                                    <div className="task-header">
                                        <span className={`priority-badge ${task.priority}`}>
                                            {task.priority}
                                        </span>
                                    </div>
                                    <h5>{task.title}</h5>
                                    <div className="task-footer">
                                        <button className="task-btn">Edit</button>
                                        <button className="task-btn delete">Delete</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {showAddTaskModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Add New Task</h2>
                        <input
                            type="text"
                            placeholder="Task title"
                            value={newTaskTitle}
                            onChange={(e) => setNewTaskTitle(e.target.value)}
                        />
                        <select
                            value={newTaskPriority}
                            onChange={(e) => setNewTaskPriority(e.target.value)}
                        >
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                        <div className="modal-actions">
                            <button onClick={handleAddTask}>Add Task</button>
                            <button onClick={() => setShowAddTaskModal(false)} className="cancel-btn">Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default KanbanBoard; 