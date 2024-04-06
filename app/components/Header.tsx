import React, { useState } from 'react';
import '../styles/header.scss';
import { connect } from 'react-redux';
import { getTestData } from '../actions/actions';
// import logoImg from '../assets/Logo_White.png';

type HeaderProps = {
    getTestData: (data: string) => void;
};

const Header: React.FC<HeaderProps> = (props: any) => {
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchText, setSearchText] = useState('');
    const searchIconClick = () => {
        setSearchOpen(!searchOpen);
        props.getTestData('shrikant');
        if (searchOpen) {
            console.log('searchText', searchText);
        }
    }
    const onChangeHandler = (e: any) => {
        console.log('text', e.target.value);
        setSearchText(e.target.value);
    }
    return (
        <div className='header-wrapper'>
            <div className='header-container'>
                <div className='logo'>
                    {/* <img src={logoImg} width={136} height={50} /> */}
                </div>
                <div className='search'>
                    <input className={searchOpen ? 'searchBox searchOpen' : 'searchBox'} type='text' value={searchText} placeholder='Search all news' onChange={onChangeHandler} />
                    <input type='submit' value='' className='searchIcon' onClick={searchIconClick} />
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch: any) => ({
    getTestData: (data: any) => {
        dispatch(getTestData(data))
    }
})

export default connect(null, mapDispatchToProps)(Header);