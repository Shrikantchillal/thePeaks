import React, { useState } from 'react';

const myForm = () => {
    const [nameVal, setNameValue] = useState<string>('shri')


    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setNameValue(e.target.value);
    }

    return (
        <>
            <div>
                <label>Name</label>
                <input type='text' value={nameVal} onChange={handleChangeName} />
            </div>
        </>
    )
};

export default myForm;