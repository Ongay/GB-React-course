import React, { useState, useEffect } from 'react';

import AUTHORS from './utils/authors';
import Form from './form/form';
import MessageField from './message/messagefield';


const initialMessages = [
    { author: AUTHORS.HUMAN, text: "Hello", id: 1 },
    { author: AUTHORS.BOT, text: "I AM BOT", id: 2 }
];

const App = () => {
    const [messages, setMessages] = useState(initialMessages);

    const handleAddMessage = (newMessage) => {

        setMessages((prevMessages) => [...prevMessages, newMessage]);

    };
    useEffect(() => {
        if (messages[messages.length - 1].author === AUTHORS.HUMAN) {
            handleAddMessage({ author: AUTHORS.BOT, text: "I AM BOT" });
        }
    });

    return (
        <div>
            <h1>My message homework practice</h1>
            {/* {messages.map((message) => (
                <div>{message}</div>
            ))} */}
            <MessageField field={messages} />
            <Form onAddMessage={handleAddMessage} />
        </div>
    )
}

export default App;