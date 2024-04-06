import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers/allReducers';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
// import { Switch } from "react-router";
import Home from './pages/Home';
import Counter from './pages/Counter';
import './styles/app.scss';
import { queryMiddleware } from 'redux-query';
import superagentInterface from 'redux-query-interface-superagent';
import { getEntities, getQueries } from './queries/search';
import { Provider as ReduxQueryProvider } from 'redux-query-react';
import FetchAPIComp from './pages/FetchAPIComp';
import LoginPage from './pages/Login';


const App = () => {
    const store = createStore(
        allReducers,
        applyMiddleware(queryMiddleware(superagentInterface, getQueries, getEntities)),
    );
    return (
        <Provider store={store}>
            <ReduxQueryProvider queriesSelector={getQueries}>
                <Router>
                    <Routes>
                        <Route index path='/' element={<LoginPage />} />
                        <Route path='/home' element={<Home />} />
                        <Route path='/Counter' element={<Counter />} />
                        <Route path='/FetchAPIComp' element={<FetchAPIComp />} />
                    </Routes>
                </Router>
            </ReduxQueryProvider>
        </Provider>
    )
}

export default App;