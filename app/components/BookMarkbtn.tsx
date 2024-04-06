import React from 'react';

const BookMarkbtn = (props: any) => {
    const { bookMarkTxt } = props;
    return (
        <div className='bookmark-btn'>{bookMarkTxt}</div>
    )
}

export default BookMarkbtn;