import React from 'react';
import './todoForm.css';

function TodoForm({ addTodo, setOpenModal }) {
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>¡Write your new task!</label>
      <textarea value={newTodoValue} onChange={onChange} placeholder="Go to the gym :)" required/>
      <div className="TodoForm-buttonContainer">
        <button type="submit" className="TodoForm-button TodoForm-button--add">Create</button>
        <button type="button" className="TodoForm-button TodoForm-button--cancel" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
}

export { TodoForm };
