import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';

export const MyContext = createContext('');


const Index = () => {
    const [text, setText] = useState('shrikant');

    return (
        <MyContext.Provider value={text}>
            <App />
        </MyContext.Provider>
    )
}

const root = ReactDOM.createRoot(document.getElementById('app')!)
root.render(
    <React.StrictMode>
        <Index />
    </React.StrictMode>
);