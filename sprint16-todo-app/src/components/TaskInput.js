import React, { useState } from 'react';
import './TaskInput.css'; // Importă fișierul CSS specific pentru TaskInput

function TaskInput({ addTask }) {
    const [taskText, setTaskText] = useState('');

    const handleAddTask = () => {
        if (taskText.trim()) {
            addTask(taskText);
            setTaskText('');
        }
    };

    return (
        <div className="task-input">
            <input
                type="text"
                placeholder="Adaugă o sarcină..."
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
            />
            <button onClick={handleAddTask}>Adaugă</button>
        </div>
    );
}

export default TaskInput;
