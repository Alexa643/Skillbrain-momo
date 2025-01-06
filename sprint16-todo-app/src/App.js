import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);

    const addTask = (text) => {
        const newTask = { text, completed: false };
        setTasks([...tasks, newTask]);
    };

    const toggleTask = (index) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div className="app">
            <h1>Lista de Sarcini</h1>
            <TaskInput addTask={addTask} />
            <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
        </div>
    );
}

export default App;
