import React from 'react';
import { useTodos } from './useTodos';

import { TodoImage } from '../TodoImage/index.js';
import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList/index.js';
import { TodoItem } from '../TodoItem/index.js';
import { CreateTodoButton } from '../CreateTodoButton/index.js';
import { Modal } from '../Modal/index';
import { TodoForm } from '../TodoForm';
import { TodoError } from '../TodoError';
import { TodoLoading } from '../TodoLoading';
import { EmptyTodos } from '../EmptyTodo';
import './App.css';


function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    addTodo,
  } = useTodos();

  return (
    <React.Fragment>
      <TodoImage />
      <article className='main'>

          <TodoHeader>
              <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
              <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
          </TodoHeader>

          <TodoList>
              {error && <TodoError error={error} />}
              {loading && <TodoLoading />}
              {(!loading && !searchedTodos.length) && <EmptyTodos />}


              {searchedTodos.map(todo => (
                  <TodoItem 
                      key={todo.text}
                      text={todo.text}
                      completed={todo.completed}
                      onComplete = {()=>completeTodo(todo.text)}
                      onDelete = {()=>deleteTodo(todo.text)}
                  />
              ))}
          </TodoList>

          {openModal && (
              <Modal>
                  <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
              </Modal>
          )}

          <CreateTodoButton
              setOpenModal={setOpenModal} openModal={openModal}
          />
      </article>
    </React.Fragment>
);
};

export default App;
