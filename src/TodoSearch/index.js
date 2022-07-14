import React from 'react';
import './TodoSearch.css';

function TodoSearch ({ searchValue, setSearchValue, loading }) {
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };
    return (
        <input type="text" className='TodoSearch' placeholder='Search task...' defaultValue={searchValue} onChange={onSearchValueChange} disabled={loading} />
    );
};

export { TodoSearch };
