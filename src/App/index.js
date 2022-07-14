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
import { EmptySearchResults } from '../EmptySearchResults/emptySearchResults.jsx';
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
    // addTodo,
  } = useTodos();
  console.log('Hola');
  return (
    <React.Fragment>
      <TodoImage />
      <article className='main'>
          <TodoHeader>
              <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} loading={loading} />
              <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} loading={loading} />
          </TodoHeader>

          <TodoList
            error={error}
            loading={loading}
            searchedTodos={searchedTodos}
            onError={() => <TodoError />}
            onLoading={() => <TodoLoading />}
            onEmptyTodos={() => <EmptyTodos />}
            totalTodos = {totalTodos}
            searchValue = {searchValue}
            onEmptySearchResults={(searchText) => <EmptySearchResults searchText={searchText} />}
            
          >
            {
              todo => (
                <TodoItem 
                      key={todo.text}
                      text={todo.text}
                      completed={todo.completed}
                      onComplete = {()=>completeTodo(todo.text)}
                      onDelete = {()=>deleteTodo(todo.text)}
                  />
              )
            }
          </TodoList>

          {!!openModal && (
              <Modal>                
                  <TodoForm />
              </Modal>
          )}

          <CreateTodoButton
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
      </article>
    </React.Fragment>
);
};

export { App };
