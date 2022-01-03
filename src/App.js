import React from 'react';
import { TodoImage } from './TodoImage.js';
import { TodoCounter } from './TodoCounter.js';
import { TodoSearch } from './TodoSearch.js';
import { TodoList } from './TodoList.js';
import { TodoItem } from './TodoItem.js';
import { CreateTodoButton } from './CreateTodoButton.js';
import './App.css';

const todos = [
  {
    text: "Get a job",
    completed: false
  },
  {
    text: "Learn React",
    completed: true
  },
  {
    text: "To do person projects",
    completed: false
  },
  {
    text: "Be happy",
    completed: false
  },
  {
    text: "Have a title",
    completed: false
  },
]

function App() {
  return (
    <React.Fragment>
      <TodoImage />
      <article className='main'>
        <TodoCounter />
        <TodoSearch />
        <TodoList>
          {todos.map(todo => (
            <TodoItem 
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
            />
          ))}
        </TodoList>

        <CreateTodoButton />
      </article>
    </React.Fragment>
  );
}

export default App;
