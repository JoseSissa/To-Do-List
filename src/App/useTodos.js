import React from "react";
import { useLocalStorage } from './useLocalStorage.js';



function useTodos () {

    const {
      item : item,
      saveItem : saveTodos,
      loading,
      error
    } = useLocalStorage('todo', []);
      
    const [searchValue, setSearchValue] = React.useState('');

    const [openModal, setOpenModal] = React.useState(false);
  
    const completedTodos = item.filter(todo => todo.completed).length;
    const totalTodos = item.length;
  
    // Muestro los TODOs de acuerdo a la búsqueda
    let searchedTodos = [];
  
    if (!searchValue.length >= 1) {
      searchedTodos = item;
    }else {
      searchedTodos = item.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const inputText = searchValue.toLowerCase();
        return todoText.includes(inputText);
      });
    };
  
    // Completando TODOs
    const completeTodo = (text)=> {
      const todoIndex = item.findIndex(todo => todo.text === text);
      const newTodos = [...item];
      newTodos[todoIndex].completed ? newTodos[todoIndex].completed = false : newTodos[todoIndex].completed = true;
      saveTodos(newTodos);
    };

    const addTodo = (text)=> {
      const newTodos = [...item];
      newTodos.push({
        text,
        completed: false,
      })
      saveTodos(newTodos);
    };
  
    // Eliminando TODOs
    const deleteTodo = (text)=> {
      const todoIndex = item.findIndex(todo => todo.text === text);
      const newTodos = [...item];
      newTodos.splice(todoIndex, 1);
      saveTodos(newTodos);
    };

    return {
      loading,
      error,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      addTodo,
      deleteTodo,
      openModal,
      setOpenModal
    };
};

export { useTodos };
