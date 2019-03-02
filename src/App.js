import React, { Component } from 'react';
import InnerContent from './components/InnerContent';
import SideNav from './components/SideNav';
import AnotherView from './components/AnotherView';
import Head from './components/Head';
import './index.scss';
import { Link, NavLink } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component
{
  state = {
    nam: '',
    titl: '',
    date: '',
    author: '',
  }
  componentDidMount()
  {
    this.props.fetchPostsWithRedux();
  }
  targetFinding = e =>
  {
    var fames = []

    if ( fames.length < 1 )
    {
      fames.push( e.target.innerText )
    } else if ( fames.length > 0 )
    {
      fames.splice( 0, fames.length )
      fames.push( e.target.innerText )
    } else
    {
      fames = [ 'Science' ]
    }
    console.log( this.state.nam, this.props, e, 'fames here' )
    return this.setState( { nam: fames } )
  }

  render()
  {
    console.log( this.state )

    const { posts } = this.props;
    const { nam } = this.state;
    const partOne = this.props.posts.map( ( post, i ) => post.section )
    const ts = partOne.filter( ( item, pos, self ) => self.indexOf( item ) == pos )
    let tsta = posts && posts.map( lt => lt ).filter( a => a.section === this.state.nam[ 0 ] );
    // console.log( this.state.nam[0], 'app here' )
    return (
      <div>
        <Head />
        <div className='content'>
          <SideNav tsta={ tsta } nam={ nam } posts={ posts } targ={ this.targetFinding } />

          {/* <table className='table table-hover list'style={{width:'20%'}}>
        <table className='table table-hover list'style={{width:'20%'}}>
          <tbody>
            <tr><td className="sideRows"> Sections..</td></tr>

            { ts.map( ( name, i ) => <tr key={i} ><td className="sides" onClick={ this.targetFinding } >{ name }</td></tr> ) }
 
          </tbody>
        </table>
        <div className="rit">
        {nam &&
      <Link to="/Innercontent" style={{ textDecoration: 'none', color:'black' }}>
        <InnerContent tsta={tsta} nam={nam} posts={posts}/>
        </Link> }
      </div> */}
        </div>
      </div>
    )
  }
}

export default App;
