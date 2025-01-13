import React from "react";
import Card from "./components/card/Card";
import Input from "./components/input/Input";
import TodoItem from "./components/todo-item/TodoItem";
import TextArea from "./components/input/TextArea";
import Button from "./components/button/Button";
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
  const [todos, setTodos] = React.useState(TODOS_MOCK);
  const uncompletedTodos = todos.filter((todo) => !todo.completed);
  const uncompletedTodosTags = uncompletedTodos.map(todo => <TodoItem key={todo.id} todo={todo} />);
  const completedTodos = todos.filter((todo) => todo.completed);
  const completedTodosTags = completedTodos.map(todo => <TodoItem key={todo.id} todo={todo} />);

  return (
    <div className="App">
      <div className="app-container">
        {/* 
            This is your Create Card component.
          */}
        <Card>
          <h2>Create Todo</h2>
          <form>
            <Input onChange={() => { }} placeholder="Title" type="text" />
            <TextArea onChange={() => { }} placeholder="Description" />
            <Button type="submit">Create</Button>
          </form>
        </Card>

        {/* 
          My Todos
        */}
        <Card>
          <h1>My todos</h1>
          <Button onClick={() => console.log("Open Modal")}>Add +</Button>
          <div className="list-container">
            {uncompletedTodosTags}

          </div>

          <div className="separator"></div>

          <h2>Completed</h2>
          <div className="list-container">
            {completedTodosTags}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;
