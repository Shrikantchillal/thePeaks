import React, { useState } from "react";

const useToggle = (defaultValue: boolean): [value: boolean, toggleValue: (newVal: boolean) => void] => {
    const [value, setToggle] = useState(defaultValue);

    const toggleValue = (newVal: boolean) => {
        setToggle(currentValue => typeof newVal === 'boolean' ? newVal : !currentValue);
    }

    return [value, toggleValue];
};

export default useToggle;