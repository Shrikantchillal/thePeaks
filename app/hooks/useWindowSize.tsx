import React, { useEffect, useLayoutEffect, useState } from "react";

const useWindowSize = () => {
    const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);
    const [innerHeight, setInnerHeight] = useState<number>(window.innerHeight);

    useLayoutEffect(() => {
        const handleSize = () => {
            setInnerWidth(window.innerWidth);
            setInnerHeight(window.innerHeight);
        }

        window.addEventListener('resize', handleSize);

        return () => {
            window.removeEventListener('resize', handleSize);
        }

    }, []);


    return [innerWidth, innerHeight];
};

export default useWindowSize;