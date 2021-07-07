import React from 'react';
import '../../styles/ActionButton.css';

const Button = (props) => {
    const { text, onClick, isLoading } = props;
    return <button id="ActionButton" onClick={onClick}>{ isLoading ? 'loading...' : text }</button>
};

export default Button;