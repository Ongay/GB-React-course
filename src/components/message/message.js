import React, { useEffect } from 'react';
import { AUTHORS } from '../utils/authors';

export const Message = ({ field }) => {
    const renderMessage = () => {
        return field.map((item, key) => {
            return <div key={key}>{item.author}: {item.text}</div>
        })
    };

    // useEffect(() => {
    //     if (field[field.length - 1].author === AUTHORS.HUMAN) {
    //         handleAddMessage(AUTHORS.text);
    //     }
    // });

    return (
        renderMessage()
    )
}

export default Message;