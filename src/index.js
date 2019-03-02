import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import AnotherView from './components/AnotherView';
import InnerContent from './components/InnerContent';
import Head from './components/Head';
import SideNav from './components/SideNav';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { fetchReducer, fetchPostsWithRedux } from './reducer/fetchReducer';
import { navReducer, anotherViewReducer } from './reducer/newReducer';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export function mapStateToProps( state )
{
    return {
        posts: state.fetchReducer.posts,
        anotherViewReducer: state.anotherViewReducer,
        navReducer: state.navReducer
    }
}

const reducer = combineReducers( {
    navReducer: navReducer,
    anotherViewReducer: anotherViewReducer,
    fetchReducer: fetchReducer
} )

let Container = connect( mapStateToProps, { fetchPostsWithRedux } )( App );

const store = createStore( reducer, applyMiddleware( thunkMiddleware, logger ) );

ReactDOM.render( <Provider store={ store }>
    <Router >
        <div className="Appa">
            <Container />

            {/* <Switch>
                <Route exact path="/" render={ () => <Container /> } />
                <Route path="/Innercontent" render={ props => <InnerContent { ...props } /> } />
                <Route path="/AnotherView" exact render={ props => <AnotherView { ...props } /> } />
            </Switch> */}
            <Route path="/AnotherView" exact render={ props => <AnotherView { ...props } /> } />
        </div>
    </Router>
</Provider>, document.getElementById( 'root' ) );
registerServiceWorker();
