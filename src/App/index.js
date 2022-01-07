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


function useLocalStorage (itemName, initialValue) {

  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
  
  
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  };

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem)=>{
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  return [
    item,
    saveItem
  ];
};



function App() {

  const [todos, saveTodos] = useLocalStorage('TODO_V1');
  
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
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  // Eliminando TODOs
  const deleteTodo = (text)=> {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
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
