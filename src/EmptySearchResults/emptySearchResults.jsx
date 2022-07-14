import React from 'react'

function EmptySearchResults({ searchText }) {
    return (
        <p>There is not Results for { searchText }</p>
    );
};
export { EmptySearchResults };