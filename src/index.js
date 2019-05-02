import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { fetchReducer, fetchPostsWithRedux } from './reducer/fetchReducer';
import { navReducer, storiesDisplayReducer, sectionSelectingReducer, selectingStoryReducer } from './reducer/storiesReducer';
import logger from 'redux-logger';

export function mapStateToProps( state )
{
    return {
        posts: state.fetchReducer.posts,
        storiesDisplayReducer: state.storiesDisplayReducer,
        navReducer: state.navReducer,
    }
}

const reducer = combineReducers( {
    navReducer: navReducer,
    storiesDisplayReducer: storiesDisplayReducer,
    fetchReducer: fetchReducer,
    sectionSelectingReducer: sectionSelectingReducer,
    selectingStoryReducer: selectingStoryReducer
} )

let Container = connect( mapStateToProps, { fetchPostsWithRedux } )( App );

const store = createStore( reducer, applyMiddleware( thunkMiddleware, logger ) );

ReactDOM.render( <Provider store={ store }>
    <Container />
</Provider>, document.getElementById( 'root' ) );
registerServiceWorker();
