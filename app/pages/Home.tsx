import React, { useState, useEffect, useRef, useContext, useLayoutEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/app.scss';
import ContentHead from '../components/ContentHead';
import { TOP_STORIES, SPORTS } from '../common/constants';
import Loader from '../components/Loader';
import { blankDataObj, GetData, DataObj } from '../services/services';
import { apiToken, apiUrl } from '../constants/constantsApi';
// import useWindowSize from '../hooks/hooks';
import { connect } from 'react-redux';
import useToggle from '../hooks/useToggle';
import useWindowSize from '../hooks/useWindowSize';
import Posts from '../components/posts';
import WithLoading from '../components/withLoading';
import { MyContext } from '../../index';
import useFetch from '../hooks/useFetch';


function myName(name: any) {
    console.log(name);
}

declare global {
    interface Window { // ⚠️ notice that "Window" is capitalized here
        title: string;
    }
}

const Home = (props: any) => {
    const [storiesData, setStoriesData] = useState<DataObj>(blankDataObj);
    const [sportsData, setSportsData] = useState<DataObj>(blankDataObj);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [value, toggleValue] = useToggle(false);
    const testRef = useRef(null);

    const [text, setText] = useContext(MyContext);

    const url = `${apiUrl}/search?api-key=${apiToken}`;

    useEffect(() => {
        setIsLoading(true);
    }, []);

    const handleClick = () => {
        // setText('Hello World');
    }

    useEffect(() => {
        const url = `${apiUrl}/search?api-key=${apiToken}`
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setStoriesData({ ...storiesData, data: data.response.results });
                setIsLoading(false);
            } catch (error) {
                setStoriesData({ ...storiesData, isError: true, errorTxt: 'error' });
                console.log('error', error);
            }
        }
        fetchData();
    }, []);

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const APIcall = await fetch(url);
    //             const data = await APIcall.json();
    //             console.log('data', data.response);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     })()
    // }, []);


    const [innerWidth, innerHeight] = useWindowSize()

    const NewCom = WithLoading(Posts);

    const { isLoadingData, postData, serverError } = useFetch(url);

    return (
        <div className='main-wrapper'>
            <Header />
            <div className='main-container'>
                <ContentHead headText={TOP_STORIES} />
                <div>width: {innerWidth}</div>
                <div>Height: {innerHeight}</div>
                <div>myName: {props.testData}</div>
                {value && <button>Test</button>}
                <button onClick={() => toggleValue(true)}>show Test</button>
                <button onClick={() => toggleValue(false)}>hide Test</button>
                <div className='topStories-section'>
                    <div className='first-row'>
                        <NewCom isLoading={isLoading} postData={storiesData} />
                    </div>
                </div>
                <div className='sports-section'>
                    <h2>{SPORTS}</h2>
                    {sportsData.data.map((data, index) => {
                        return (
                            <div className='' key={index}>{data.webTitle}</div>
                        )
                    })}
                </div>
                <div>
                    <input type="text" value={text} ref={testRef} />
                    <button onClick={handleClick}>Click</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        myData: state.reducers.test
    }
}

export default connect(mapStateToProps)(Home);