import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { fetchReducer, fetchPostsWithRedux } from './reducer/fetchReducer';
import { navReducer, anotherViewReducer, tryingReducer, testingReducer } from './reducer/newReducer';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export function mapStateToProps( state )
{
    return {
        posts: state.fetchReducer.posts,
        anotherViewReducer: state.anotherViewReducer,
        navReducer: state.navReducer,
    }
}

const reducer = combineReducers( {
    navReducer: navReducer,
    anotherViewReducer: anotherViewReducer,
    fetchReducer: fetchReducer,
    tryingReducer: tryingReducer,
    testingReducer: testingReducer
} )

let Container = connect( mapStateToProps, { fetchPostsWithRedux } )( App );

const store = createStore( reducer, applyMiddleware( thunkMiddleware, logger ) );

ReactDOM.render( <Provider store={ store }>
    <Container />
</Provider>, document.getElementById( 'root' ) );
registerServiceWorker();
