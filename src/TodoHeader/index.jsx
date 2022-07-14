import React from 'react';

function TodoHeader({ children, loading }) {
    console.log(children);
    return (
        <header>
            {
                // React.Children
                //     .toArray(children)
                //     .map(child => React.cloneElement(child, { loading }))
                children
            }
        </header>
    )
}

export { TodoHeader };