import React from 'react';
import { ReactComponent as Check } from './check.svg';
import { ReactComponent as Remove } from './remove.svg';
import './TodoIcon.css';

const iconTypes = {
    "check": (color) => (
        <Check className="IconSvg IconSvg_check" fill={color}/>
    ),
    "delete":(color)=> (
        <Remove className="IconSvg IconSvg_delete" fill={color} />
    ),
};

function TodoIcon({ type, color = 'gray', onClick }) {
    
    return (
        <span className={`IconContainer IconContainer_${type}`} onClick={onClick}>{iconTypes[type](color)}</span>
    );
};

export { TodoIcon };