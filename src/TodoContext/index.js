import React from "react";
import { useLocalStorage } from './useLocalStorage.js';

const todoContext = React.createContext();

function TodoProvider (props) {

    const {
        item : todos,
        saveItem : saveTodos,
        loading,
        error
      } = useLocalStorage('TODO_V1', []);
      
      const [searchValue, setSearchValue] = React.useState('');

      const [openModal, setOpenModal] = React.useState(false);
    
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

      const addTodo = (text)=> {
        const newTodos = [...todos];
        newTodos.push({
          text,
          completed: false,
        })
        saveTodos(newTodos);
      };
    
      // Eliminando TODOs
      const deleteTodo = (text)=> {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      };

    return(
        <todoContext.Provider value={{
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
        }}>
            {props.children}
        </todoContext.Provider>
    );
};

export { todoContext, TodoProvider };
