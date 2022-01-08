import React from 'react';
import './App.css';
import { AppUI } from './AppUI';

// const defaultTodos = [
//   {
//     text: "Get a job",
//     completed: false
//   },
//   {
//     text: "Learn React",
//     completed: true
//   },
//   {
//     text: "To do person projects",
//     completed: false
//   },
//   {
//     text: "Be happy",
//     completed: false
//   },
//   {
//     text: "Have a title",
//     completed: true
//   },
// ]


function useLocalStorage (itemName, initialValue) {
  // Desde este hook puedo llamar a otros hooks tanto de react como los creados por mi.
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);
  // Aqui este use effect se crea para simular la petición a una API.
  React.useEffect(()=>{
    setTimeout(()=>{
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;  
        
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        };

        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      };

    },1000)
  });

  

  const saveItem = (newItem)=>{
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    };
  };

  return {
    item,
    saveItem, 
    loading,
    error
  };
};



function App() {

  const {
    item : todos,
    saveItem : saveTodos,
    loading,
    error
  } = useLocalStorage('TODO_V1', []);
  
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
      loading={loading}
      error={error}
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
