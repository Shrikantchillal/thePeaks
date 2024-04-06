import React, { useRef, useState } from 'react';

interface WithLoadingProps {
    isLoading: boolean;
}

const WithLoading = (Component: any) => {
    return function WithLoadingComponent({ isLoading, ...props }: any) {
        if (!isLoading) return <Component {...props} />
        return <p>Data is still in progress...</p>
    }
}

export default WithLoading;