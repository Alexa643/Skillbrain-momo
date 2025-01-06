import React from 'react';
import './TaskList.css'; // Importă fișierul CSS specific pentru TaskList

function TaskList({ tasks, toggleTask, deleteTask }) {
    return (
        <ul className="task-list">
            {tasks.map((task, index) => (
                <li key={index} className={task.completed ? 'completed' : ''}>
                    <span onClick={() => toggleTask(index)}>{task.text}</span>
                    <button onClick={() => deleteTask(index)}>Șterge</button>
                </li>
            ))}
        </ul>
    );
}

export default TaskList;
