import React from "react";
import allImage from './assets/image/image';
import './TodoImage.css';

function TodoImage () {
    return (
        <article className='ImageBg'>
            <img src={allImage.bgImage} alt="todo list" className="ImageBg-fondo"></img>
        </article>
    );
}

export { TodoImage };