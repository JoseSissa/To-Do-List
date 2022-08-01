import React from 'react';
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import './TodoItem.css';

function TodoItem(props) {
  return (
    <div className="TodoItem">
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <div className='TodoItem-buttons'>
        <CompleteIcon completed={props.completed} onComplete={props.onComplete} />
        <DeleteIcon onDelete={props.onDelete}/>
      </div>
    </div>
  );
}

export { TodoItem };
