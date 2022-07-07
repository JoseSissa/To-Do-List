import React from "react";
import './TodoItem.css';
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';

function TodoItem(props) {

    return (
        <li className="TodoItem">
            <CompleteIcon completed={props.completed} onComplete={props.onComplete} />

            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>
                {props.text}
            </p>
            
            <DeleteIcon onDelete={props.onDelete} />
        </li>
    )
};

export { TodoItem };