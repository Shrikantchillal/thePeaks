import React, { useEffect, useState } from 'react';
import { apiToken, apiUrl } from '../constants/constantsApi';


const useFetch = (url: string) => {

    const [postData, setPostData] = useState(null);
    const [isLoadingData, setisLoadingData] = useState(true);
    const [serverError, setServerError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setisLoadingData(true);
                console.log('data', data);
                setPostData(data);
            })
            .catch((error) => {
                setServerError(error);
            })
    }, []);
    return { isLoadingData, postData, serverError };
};

export default useFetch;