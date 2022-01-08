import React from 'react';
import { todoContext } from '../TodoContext';
import { TodoImage } from '../TodoImage/index.js';
import { TodoCounter } from '../TodoCounter/index.js';
import { TodoSearch } from '../TodoSearch/index.js';
import { TodoList } from '../TodoList/index.js';
import { TodoItem } from '../TodoItem/index.js';
import { CreateTodoButton } from '../CreateTodoButton/index.js';

function AppUI() {

    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo
    } = React.useContext(todoContext);

    return (
        <React.Fragment>
            <TodoImage />
            <article className='main'>
                <TodoCounter />

                <TodoSearch />
                    <TodoList>
                        {error && <p>Hay un error.</p>}
                        {loading && <p>Estamos cargando ...</p>}
                        {(!loading && !searchedTodos.length) && <p>Crea un nuevo TO-DO</p>}


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