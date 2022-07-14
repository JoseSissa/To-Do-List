import React from 'react';
import './TodoList.css';

function TodoList (props) {
    const renderFunc = props.children || props.render;
    return (
        <section className='TodoTask'>
            {/* El && funciona como "entonces tal cosa". */}
            {props.error && props.onError()}
            {props.loading && props.onLoading()}

            {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchValue)}
            {(!props.loading && !props.error) && props.searchedTodos.map(renderFunc)}

            {/* {(!props.loading && !props.totalTodos) ? props.onEmptyTodos() :
                (props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchValue)
            } */}

            {/* {props.searchedTodos.map(props.render || props.children)} */}

            {/* <ul>
                {props.children}
            </ul> */}
        </section>
    );
}

export { TodoList };