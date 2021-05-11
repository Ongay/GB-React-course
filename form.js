import React, { useEffect, useState, useRef } from 'react';
import { AUTHORS } from '../utils/authors';
import { TextField, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

export const Form = ({ onAddMessage }) => {
    const [text, setText] = useState('');
    const input = useRef();

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        onAddMessage({ author: AUTHORS.HUMAN, text });
        setText('');
    };

    useEffect(() => {
        input.current.focus();
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                id="standard-basic"
                value={text}
                onChange={handleChange}
                label="Standard"
                inputRef={input}
            />
            <button className="button__send">
                <SendIcon />
            </button>
        </form>
    )
};

export default Form;