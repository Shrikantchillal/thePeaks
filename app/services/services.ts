import { useState } from 'react';
export interface DataObj {
    data: any[],
    isError?: boolean,
    errorTxt?: string,
}

export const blankDataObj: DataObj = {
    data: [],
    isError: false,
    errorTxt: '',
}

export const GetData = (url: string, methodName?: string, params?: any[]) => {
    const [data, setData] = useState(blankDataObj);

    if(methodName === 'POST') {
        fetch(url, {method: 'POST'})
            .then((response: any) => {
                const data = response.json();
                setData(data)
            })
            .catch((error: any) => {
                const dataError = {...data, isError: true, errorTxt: error}
                setData(dataError)
            })
    } else {
        fetch(url)
            .then((response: any) => {
                const data = response.json();
                setData(data);
            })
            .catch((error: any) => {
                const dataError = {...data, isError: true, errorTxt: error}
                setData(dataError)
            })
    }
    return data;
}