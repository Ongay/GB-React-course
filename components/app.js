import React, { useState } from 'react';

// import MessageField from './message/messagefield';
import Form from './form/form';

const initialMessages = ["Hello", "Hi"];

const App = () => {
    const [messages, setMessages] = useState(initialMessages);


    const handleAddMessage = (newMessage) => {

        setMessages((prevMessages) => [...prevMessages, newMessage]);

    };

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