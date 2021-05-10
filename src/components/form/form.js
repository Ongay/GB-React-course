import React, { useState } from 'react';

export const Form = ({ onAddMessage }) => {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        onAddMessage(text);
        setText('');
    };


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={handleChange} />
            <input type="submit" />
        </form>
    )
}

export default Form