import React from "react";
import { TodoForm } from '../TodoForm/index';
import './TodoImage.css';

function TodoImage () {
    return (
        <article className='ImageBg'>
            <TodoForm />
        </article>
    );
}

export { TodoImage };