import React from 'react';

// function testFun(str: string): string {
//     return str;
// };

// testFun('shri');

function testFun<T, B>(x: T, y: B) {
    return `${x}: ${y};`
};

testFun(12, 33)



const LoginPage: React.FunctionComponent = () => {
    return (
        <>Login Page</>
    )
};

export default LoginPage;