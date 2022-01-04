import React from 'react';
import './TodoCounter.css';

function TodoCounter (props) {
    // También se puede colocar las variables recibidas en el props de la function.
    const { completed, total } = props;
    return (
        <h2 className='TodoCounter'>You have completed {completed} of {total} tasks.</h2>
    );
}

export { TodoCounter };