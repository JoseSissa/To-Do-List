import React from 'react';
import { todoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch () {
    const { searchValue, setSearchValue } = React.useContext(todoContext);
    const onSearchValueChange =(event)=> {
        setSearchValue(event.target.value);
    };

    return (
        <input 
            type="text" 
            className='TodoSearch' 
            placeholder='Search task...'
            value={searchValue}
            onChange={onSearchValueChange}
        />
    );
};

export { TodoSearch };
