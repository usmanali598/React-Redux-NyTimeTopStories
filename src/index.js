import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Tsting from './Tsting';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { fetchReducer, fetchPostsWithRedux } from './reducer/fetchReducer';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export function mapStateToProps( state )
{
    return {
        posts: state.posts
    }
}
let Container = connect( mapStateToProps, { fetchPostsWithRedux} )( App );

const store = createStore( fetchReducer, applyMiddleware( thunkMiddleware, logger ) );

ReactDOM.render( <Provider store={ store }>
    {/* <Container /> */}
    <Router>
     <div className="Appa">
     {/* <Switch> */}
     <Container />
      {/* <Route exact path="/" component={Container} /> */}
      <Route path="/tst" component={Tsting} />
      {/* </Switch> */}
      </div>

    </Router>
</Provider>, document.getElementById( 'root' ) );
registerServiceWorker();
