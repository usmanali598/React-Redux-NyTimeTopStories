import React, { Component } from 'react';
import SideNav from './components/SideNav';
import Head from './components/Head';
import './index.scss';
class App extends Component
{
  componentDidMount()
  {
    this.props.fetchPostsWithRedux();
    // this.props.onShowAnotherView()
  }

  render()
  {
    const { posts } = this.props;
    return (
      <div>
        <Head />
        <div className='content'>
          <SideNav posts={ posts } />
        </div>
      </div>
    )
  }
}



export default App;
