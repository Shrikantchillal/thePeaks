import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import NProgress from 'nprogress';


const LoadingScreen: React.FunctionComponent = () => {

    useEffect(() => {
        NProgress.start();

        return () => {
            NProgress.done();
        }

    }, []);

    return (
        <Box
            sx={{
                backgroundColor: 'background.paper',
                minHeight: '100%',
            }} />
    )
}

export default LoadingScreen;