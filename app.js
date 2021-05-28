import React, { useState, useEffect, useCallback } from 'react';

import AUTHORS from './utils/authors';
import Form from './form/form';
import MessageField from './message/messagefield';
import { useParams } from 'react-router';


// const initialMessages = [
//     { author: AUTHORS.HUMAN, text: "Hello", id: 1 },
//     { author: AUTHORS.BOT, text: "I AM BOT", id: 2 }
// ];

const initialMessages = {
    chat1: [{ author: AUTHORS.HUMAN, text: "Hello", id: 1 }],
    chat2: [{ author: AUTHORS.BOT, text: "I AM BOT", id: 2 }]
}

const App = () => {
    const [messages, setMessages] = useState(initialMessages);
    const params = useParams();
    const { chatId } = params;

    const handleAddMessage = useCallback((newMessage) => {

        setMessages((prevMessages) => ({ ...prevMessages, [chatId]: [...prevMessages[chatId], newMessage] }));

    }, [chatId]);

    useEffect(() => {
        if (messages[chatId][messages[chatId].length - 1].author === AUTHORS.HUMAN) {
            handleAddMessage({ author: AUTHORS.BOT, text: "I AM BOT" });
        }
    });

    return (
        <div>
            <h1>My message homework practice</h1>
            {/* {messages.map((message) => (
                <div>{message}</div>
            ))} */}
            <MessageField field={messages[chatId]} />
            <Form onAddMessage={handleAddMessage} />
        </div>
    )
}

export default App;