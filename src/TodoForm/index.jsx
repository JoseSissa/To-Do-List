import React from 'react';
import './todoForm.css';
import { useTodos } from '../App/useTodos'

function TodoForm() {

    const { addTodo, setOpenModal } = useTodos();

    const textArea = document.getElementById('createTodo_text');
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onChange = (e)=> {
        setNewTodoValue(e.target.value);
    }
    const onCancel = ()=> {
        textArea.value="";
        setNewTodoValue('');
        setOpenModal(false);
    }
    const onSubmit = (e)=> {
        e.preventDefault();
        addTodo(newTodoValue);
        setNewTodoValue('');
        setOpenModal(false);
        textArea.value = "";
    }

    return (
        <form className='createTodo' onSubmit={onSubmit}>
            <label className='createTodo_title'>Create your new TODO's</label>
            <textarea id='createTodo_text' className='createTodo_text' defaultValue={newTodoValue} onChange={onChange} placeholder='Create new task...' required></textarea>
            <div className='createTodo_buttons'>
                <button className='createTodo_buttons--submit button' type='submit'>Create</button>
                <button className='createTodo_buttons--cancel button' type='button' onClick={onCancel}>Cancel</button>
            </div>
        </form>
    );
};

export { TodoForm };