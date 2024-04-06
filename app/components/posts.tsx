import React from "react";
import { DataObj } from "../services/services";

interface PostProps {
    postData: DataObj;
}

const Posts = (props: PostProps) => {
    const { postData } = props;

    if (postData.data.length === 0) return <>Sorry currently there are no any posts.</>
    return (
        <>
            <div className='bigSizeNewsBox'>
                {postData.data && postData.data.length > 0 && postData.data[0] && postData.data[0].webTitle && postData.data[0].webTitle}
            </div>
            <div className='columnBox'>
                {postData.data.length > 0 && postData.data.slice(0, 2).map((data, index) => {
                    return (
                        <div className={index === 0 ? 'smallSizeNewsBox' : 'newsTitleBox'} key={index}>
                            {data.webTitle ? data.webTitle : ''}
                        </div>
                    )
                })}
            </div>
            <div className='columnBox'>
                {postData.data.length > 0 && postData.data.slice(2, 4).map((data, index) => {
                    return (
                        <div className={index === 0 ? 'smallSizeNewsBox' : 'newsTitleBox'} key={index}>
                            {data.webTitle}
                        </div>
                    )
                })}
            </div>
        </>
    )
};

export default Posts;