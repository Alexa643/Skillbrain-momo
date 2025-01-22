import React, { useState } from "react";
import Card from "./components/card/Card";
import Input from "./components/input/Input";
import TodoItem from "./components/todo-item/TodoItem";
import TextArea from "./components/input/TextArea";
import Button from "./components/button/Button";
import Modal from "./components/modal/Modal";
import "./App.css";

const TODOS_MOCK = [
  {
    id: "1",
    title: "Todo 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At id illo repellendus non maiores in pariatur aliquam iure fugit amet!",
    completed: false,
  },
  {
    id: "2",
    title: "Todo 2",
    description: "Fac exercitii dimineata",
    completed: false,
  },
  {
    id: "3",
    title: "Todo 3",
    description: "Maine merg la munca",
    completed: true,
  },
  {
    id: "4",
    title: "Todo 4",
    description: "Reactul este usor",
    completed: false,
  },
  {
    id: "5",
    title: "Todo 5",
    description: "Alea iacta es",
    completed: false,
  },
];

function App() {
  const [todos, setTodos] = useState(TODOS_MOCK);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      id: `${todos.length + 1}`,
      title: title,
      description: description,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setTitle("");
    setDescription("");
    setIsModalOpen(false);
  };

  const handleToggleCompleted = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const uncompletedTodos = todos.filter((todo) => !todo.completed);
  const uncompletedTodosTags = uncompletedTodos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} onToggleCompleted={handleToggleCompleted} />
  ));
  const completedTodos = todos.filter((todo) => todo.completed);
  const completedTodosTags = completedTodos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} onToggleCompleted={handleToggleCompleted} />
  ));

  return (
    <div className="App">
      <div className="app-container">
        {/* Create Card */}
        <Card>
          <h2>Create Todo</h2>
          <form onSubmit={handleSubmit}>
            <Input
              value={title}
              onChange={handleTitleChange}
              placeholder="Title"
              type="text"
            />
            <TextArea
              value={description}
              onChange={handleDescriptionChange}
              placeholder="Description"
            />
            <Button type="submit">Create</Button>
          </form>
        </Card>

        {/* My Todos */}
        <Card>
          <h1>My todos</h1>
          <Button onClick={() => setIsModalOpen(true)}>Add +</Button>
          <div className="list-container">{uncompletedTodosTags}</div>
          <div className="separator"></div>
          <h2>Completed</h2>
          <div className="list-container">{completedTodosTags}</div>
        </Card>

        {/* Modal */}
        {isModalOpen && (
          <Modal onClose={() => setIsModalOpen(false)}>
            <h2>Create Todo</h2>
            <form onSubmit={handleSubmit}>
              <Input
                value={title}
                onChange={handleTitleChange}
                placeholder="Title"
                type="text"
              />
              <TextArea
                value={description}
                onChange={handleDescriptionChange}
                placeholder="Description"
              />
              <Button type="submit">Create</Button>
            </form>
          </Modal>
        )}
      </div>
    </div>
  );
}

export default App;




