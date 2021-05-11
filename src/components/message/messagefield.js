import React, { useState } from 'react';
import Message from './message'


export const MessageField = ({ field }) => {

    console.log(field);
    return (
        <div className='messagefield'>
            <Message field={field} />
        </div>
    )
}

export default MessageField;