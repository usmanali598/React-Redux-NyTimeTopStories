import React, { Component } from 'react';
import InnerContent from './components/InnerContent';
import './index.css';
import { Link, NavLink } from 'react-router-dom'


class App extends Component
{
  state= {
    nam:'',
    linkSelect:'',
    titl:'',
    date:'',
    author:'',
  }
  componentDidMount()
  {
    this.props.fetchPostsWithRedux();
  }
  targetFinding = e =>
  {
    var fames = [] 
          
          if(fames.length < 1){
            fames.push(e.target.innerText)
          } else if(fames.length > 0){
            fames.splice(0, fames.length)
            fames.push(e.target.innerText)
          } else {
            fames = ['Science']
          }
          // console.log( this.state.nam, 'fames here' )
          return this.setState({nam:fames})
  }
    selecttFinding = e =>
  {
    var kames = [] 
          
          if(kames.length < 1){
            kames.push(e.target)
          } else if(kames.length > 0){
            kames.splice(0, kames.length)
            kames.push(e.target.innerText)
          } else {
            kames = ['Science']
          }
          // console.log( this.state.linkSelect, 'kames here' )
          return this.setState({linkSelect:kames})
  }

  render()
  {
    const {posts} = this.props;
    const {nam} = this.state;
    const partOne = this.props.posts.map( ( post, i ) => post.section )
    const ts = partOne.filter( ( item, pos, self ) => self.indexOf( item ) == pos )
     let tsta = posts && posts.map( lt => lt ).filter( a => a.section === this.state.nam[0] );
    // console.log( this.state.nam[0], 'app here' )
    return (
      <div>
        <div className="head" >  </div>

       <div className='content'>
        <table className='list'>
          <tbody>
            <tr><td className="sideRows"> Sections..</td></tr>

            { ts.map( ( name, i ) => <tr key={i} ><td className="sides" onClick={ this.targetFinding } >{ name }</td></tr> ) }
 
          </tbody>
        </table>
      <Link to="/tst" style={{ textDecoration: 'none', color:'black' }}>
        <InnerContent tsta={tsta} nam={nam} posts={posts}/>
      </Link> 
         </div>
      </div>
    )
  }
}

export default App;
