import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AnotherView from './components/AnotherView';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { fetchReducer, fetchPostsWithRedux } from './reducer/fetchReducer';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom'

export function mapStateToProps( state )
{
    return {
        posts: state.posts
    }
}
let Container = connect( mapStateToProps, { fetchPostsWithRedux} )( App );

const store = createStore( fetchReducer, applyMiddleware( thunkMiddleware, logger ) );

ReactDOM.render( <Provider store={ store }>
    <Router >
     <div className="Appa">
     <Container />
      {/* <Route exact path="/" component={Container} /> */}
      {/* <Route path="/tst" component={AnotherView} /> */}
      <Route path="/AnotherView" exact render={props => <AnotherView {...props }/>} />
      </div>
    </Router>
</Provider>, document.getElementById( 'root' ) );
registerServiceWorker();
