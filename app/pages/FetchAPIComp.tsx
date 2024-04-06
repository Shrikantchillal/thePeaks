import React, { useEffect, useState } from "react";
import { apiToken, apiUrl } from "../constants/constantsApi";


const url = `${apiUrl}/search?api-key=${apiToken}`

const FetchAPIComp = () => {
    const [postData, setPostData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data: any) => {
                console.log('data', data);
                setPostData(data.response.results);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return (
        <>
            <div>Test</div>
            <div>Code: {isLoading ? 'Loading...' : JSON.stringify(postData)}</div>
        </>
    )
};

export default FetchAPIComp;