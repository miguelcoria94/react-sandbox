// import the react and reactdom libraries

import React from 'react';
import ReactDOM from 'react-dom';


//create a react component

const App = () => {
    return <div>Hi there! This is a react app!</div>
}

// take the react component and show on screen

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
