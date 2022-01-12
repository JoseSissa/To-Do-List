import React from 'react';
import { todoContext } from '../TodoContext';
import { TodoImage } from '../TodoImage/index.js';
import { TodoCounter } from '../TodoCounter/index.js';
import { TodoSearch } from '../TodoSearch/index.js';
import { TodoList } from '../TodoList/index.js';
import { TodoItem } from '../TodoItem/index.js';
import { CreateTodoButton } from '../CreateTodoButton/index.js';
import { Modal } from '../Modal/index';
import { TodoForm } from '../TodoForm';
import { TodoError } from '../TodoError';
import { TodoLoading } from '../TodoLoading';
import { EmptyTodos } from '../EmptyTodo';

function AppUI() {

    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(todoContext);

    return (
        <React.Fragment>
            <TodoImage />
            <article className='main'>
                <TodoCounter />

                <TodoSearch />
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
                            <TodoForm />
                        </Modal>
                    )}

                <CreateTodoButton
                    setOpenModal={setOpenModal} openModal={openModal}
                />
            </article>
        </React.Fragment>
    );
}

export { AppUI };