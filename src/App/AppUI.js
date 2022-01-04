import React from 'react';
import { TodoImage } from '../TodoImage/index.js';
import { TodoCounter } from '../TodoCounter/index.js';
import { TodoSearch } from '../TodoSearch/index.js';
import { TodoList } from '../TodoList/index.js';
import { TodoItem } from '../TodoItem/index.js';
import { CreateTodoButton } from '../CreateTodoButton/index.js';

function AppUI({ 
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo
    }) {
    return (
        <React.Fragment>
            <TodoImage />
            <article className='main'>
                <TodoCounter
                completed={completedTodos}
                total={totalTodos}
            />

                <TodoSearch 
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />

                <TodoList>
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

                <CreateTodoButton />
            </article>
        </React.Fragment>
    );
}

export { AppUI };