import React from 'react';
import './App.css';
import { AppUI } from './AppUI';

const defaultTodos = [
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
    completed: true
  },
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  // Muestro los TODOs de acuerdo a la búsqueda
  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  }else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const inputText = searchValue.toLowerCase();
      return todoText.includes(inputText);
    });
  };

  // Completando TODOs
  const completeTodo = (text)=> {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];

    newTodos[todoIndex] = {
      text: todos[todoIndex].text,
      completed: true,
    };

    setTodos(newTodos);
  };

  // Eliminando TODOs
  const deleteTodo = (text)=> {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };



  return ( 
    <AppUI 
      completedTodos={completedTodos}
      totalTodos={totalTodos}

      searchValue={searchValue}
      setSearchValue={setSearchValue}

      searchedTodos={searchedTodos}

      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
