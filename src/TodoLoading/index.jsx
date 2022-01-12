import React from 'react';
import './TodoLoading.css';

function TodoLoading() {
    return (
        <div className='LoadingTodo_container'>
            <span className='LoadingTodo_completeIcon'></span>
                <p className='LoadingTodo_text'>Cargando TO-DOs ...</p>
            <span className='LoadingTodo_deleteIcon'></span>
        </div>
    );
};

export { TodoLoading };