import React, { useEffect } from 'react';
import { AUTHORS } from '../utils/authors';

export const Message = ({ field }) => {
    const renderMessage = () => {
        return field.map((item, key) => {
            return <div key={key} className={`message__box ${(item.author === AUTHORS.HUMAN) ? "message__human" : "message__bot"}`}>
                <div className="message">
                    <span className="message__value">{item.text}</span>
                    <span className="message__author">{item.author}</span>
                </div>
            </div>
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