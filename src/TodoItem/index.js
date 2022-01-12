import React from "react";
import './TodoItem.css';
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';

function TodoItem(props) {

    return (
        <li className="TodoItem">
            {/* <div className="check" onClick={props.onComplete}>
                <img src={allIcons.check} alt="check"></img>
            </div> */}
            <CompleteIcon completed={props.completed} onComplete={props.onComplete} />

            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>
                {props.text}
            </p>

            {/* <div className="trash" onClick={props.onDelete}>
                <img src={allIcons.trash} alt="trash"></img>
            </div> */}
            <DeleteIcon onDelete={props.onDelete} />
        </li>
    )
};

export { TodoItem };