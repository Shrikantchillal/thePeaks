import React, { useReducer, useState } from 'react';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT'

const initialState = { count: 0 };

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 }
        case DECREMENT:
            return { ...state, count: state.count - 1 }
        default:
            return state;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const increment = () => {
        dispatch({ type: INCREMENT });
    }

    const decrement = () => {
        dispatch({ type: DECREMENT });
    }

    return (
        <>
            <div>{state.count}</div>
            <button onClick={() => increment()}>Increment +</button>
            <button onClick={() => decrement()}>Decrement -</button>
        </>
    )
};

export default Counter;