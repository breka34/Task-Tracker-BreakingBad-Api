import React from 'react';
import Button from './Button';

const Header = ({ title,onAdd,showAdd }) => {
    return (
       <header className="header">
            <h2>{title}</h2>
            <Button text={showAdd ? 'Close Form' : 'Open Form'} color={showAdd ? 'red' : 'green'}
            onClick={onAdd}
            />
       </header>
    )
}


export default Header
