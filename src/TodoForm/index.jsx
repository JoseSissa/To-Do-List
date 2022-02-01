import React from 'react';
import './todoForm.css';

function TodoForm({ addTodo, setOpenModal }) {
    const textArea = document.getElementById('createTodo_text');
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onChange = (event)=> {
        setNewTodoValue(event.target.value);
    }

    const onCancel = ()=> {
        textArea.value="";
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
            <textarea id='createTodo_text' className='createTodo_text' value={newTodoValue} onChange={onChange} placeholder='Escribe tu tarea aquí ...' required></textarea>
            <div className='createTodo_buttons'>
                <button className='createTodo_buttons--submit button' type='submit'>Añadir</button>
                <button className='createTodo_buttons--cancel button' type='button' onClick={onCancel}>Cancelar</button>
            </div>
        </form>
    );
};

export { TodoForm };