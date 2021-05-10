import React, { useState } from 'react';


export const MessageField = ({ field }) => {

    console.log(field);
    return (
        <div className='messagefield'>
            {field.map((item, key) => {
                return <div key={key}>{item}</div>
            })}
        </div>
    )
}

export default MessageField;