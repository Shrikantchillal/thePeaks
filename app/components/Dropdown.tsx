import React from 'react';

const Dropdown = () => {
    const selectOptions = [
        {id: 0, value: 'Newest first'}, {id: 1, value: 'Oldest first'}, {id: 2, value: 'Most popular'}
    ];
    return (
        <select>
            {selectOptions.map((item) => {
                return (
                    <option value={item.value} key={item.id}>{item.value}</option>
                )
            })}            
        </select>
    )
}

export default Dropdown;