import React, { Component } from 'react';
import './index.css';

class App extends Component
{
  state= {nam:''}
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
        <table >
          <tbody>
            <tr  ><td className="sideRows"> Sections..</td></tr>

            { ts.map( ( name ) => <tr ><td className="sides" onClick={ this.targetFinding } >{ name }</td></tr> ) }

          </tbody>
        </table>

        <div className="nav" >
          <tr ><td style={ { width: '100%' } }><span style={ { fontWeight: 'bold' } }>Top Stories</span> { nam && `(${ nam[0] })` }</td></tr>
         
          { tsta && tsta.map( it =>
          {
            return (
              <div className="NavContainer">
                <div className="NavLeft" >
                  { it.multimedia.filter( img => img.length > 1 ) ? <img className='smallPic' src={ it.multimedia.length > 0 ? it.multimedia[ 0 ].url : 'https://www.sjpl.org/sites/default/files/images/1718/nyt.png' } alt='pics' /> : <p>No Image..</p> }
                  <p >{ it.updated_date }</p>
                  <p style={ { margin: 'auto'}}>{ it.byline }</p>
                </div>
                <div className="NavRight" >
                  <h1>{ it.abstract }</h1>
                  <span><p>{ it.title }</p> <a target="_parent" href={ it.url }>Read More..</a></span>
                  <p>{ it.des_facet.map( chk => `#${ chk }  ` ) }</p>
                </div>
              </div>
            )
          } ) }
           </div>
         </div>
      </div>
    )
  }
}

export default App;
