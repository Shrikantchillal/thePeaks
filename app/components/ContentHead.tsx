import React from 'react';
import { Link } from 'react-router-dom';
import { VIEW_BOOKMARK } from '../common/constants';
import BookMarkbtn from './BookMarkbtn';
import Dropdown from './Dropdown';
import Misc from './Misc';

const ContentHead = (props: any) => {
    const { headText } = props;
    const bookMarkClick = () => {
        console.log('bookMarkClick');
    }
    return (
        <div className='content-head'>
            <h2>{headText}</h2>
            <div className='headRightSection'>
                <Misc />
                <Link to='/Counter'>Counter</Link>
                <Link to='/FetchAPIComp'>FetchAPIComp</Link>
                <BookMarkbtn bookMarkTxt={VIEW_BOOKMARK} onClick={bookMarkClick} />
                <Dropdown />
            </div>
        </div>
    )
}

export default ContentHead;