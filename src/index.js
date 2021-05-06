import React from 'react';
import ReactDOM from 'react-dom';

const HelloWorld = (props) => {
     return (
          <h1>
               Hello {props.name}!<br />
               This is my first React.js code
          </h1 >
     );
}

ReactDOM.render(<HelloWorld name="to whom may read it" />, document.getElementById("root"));