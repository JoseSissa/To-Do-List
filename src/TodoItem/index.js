import React from "react";
import './TodoItem.css';
import allIcons from '../assets/icons/icons';

function TodoItem(props) {

    return (
        <li className="TodoItem">
            <div className="check" onClick={props.onComplete}>
                <img src={allIcons.check} alt="check"></img>
            </div>

            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>
                {props.text}
            </p>

            <div className="trash" onClick={props.onDelete}>
                <img src={allIcons.trash} alt="trash"></img>
            </div>
        </li>
    )
};

export { TodoItem };