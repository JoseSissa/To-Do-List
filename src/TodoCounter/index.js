import React from 'react';
import { todoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter () {
    // También se puede colocar las variables recibidas en el props de la function.
    const { completedTodos, totalTodos } = React.useContext(todoContext);
    return (
        <h2 className='TodoCounter'>You have completed {completedTodos} of {totalTodos} tasks.</h2>
    );
}

export { TodoCounter };