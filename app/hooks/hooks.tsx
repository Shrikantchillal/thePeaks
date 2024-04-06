// import { useEffect, useState } from 'react';

// const useWindowSize = () => {
//     const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);
//     const [windowHeight, setWindowHeight] = useState<number | undefined>(undefined);

//     useEffect(() => {
//         const handleResize = () => {
//             setWindowWidth(window.innerWidth);
//             setWindowHeight(window.innerHeight);
//         }

//         window.addEventListener('resize', handleResize);

//         handleResize();

//         return () => {
//             window.removeEventListener('resize', handleResize)
//         }
//     }, []);

//     return { windowWidth, windowHeight }
// }

// export default useWindowSize;