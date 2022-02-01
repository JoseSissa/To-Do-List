import React from 'react';
import './TodoCounter.css';

function TodoCounter ({ completedTodos, totalTodos }) {
    // También se puede colocar las variables recibidas en el props de la function.
    return (
        <h2 className='TodoCounter'>You have completed {completedTodos} of {totalTodos} tasks.</h2>
    );
}

export { TodoCounter };