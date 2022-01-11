import React from 'react';
import { todoContext } from '../TodoContext';
import './todoForm.css';

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal
    } = React.useContext(todoContext);

    const onChange = (event)=> {
        setNewTodoValue(event.target.value);
    }

    const onCancel = ()=> {
        setOpenModal(false);
    }
    const onSubmit = (event)=> {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    return (
        <form className='createTodo' onSubmit={onSubmit}>
            <label className='createTodo_title'>Crea tu nuevo TODO</label>
            <textarea className='createTodo_text' value={newTodoValue} onChange={onChange} placeholder='Escribe tu tarea aquí ...'></textarea>
            <div className='createTodo_buttons'>
                <button className='createTodo_buttons--submit button' type='submit'>Añadir</button>
                <button className='createTodo_buttons--cancel button' type='button' onClick={onCancel}>Cancelar</button>
            </div>
        </form>
    );
};

export { TodoForm };