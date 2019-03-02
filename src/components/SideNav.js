import React, { Component } from 'react';
import InnerContent from './InnerContent';
import { Link, NavLink } from 'react-router-dom';
import '../index.scss';


class SideNav extends Component
{
  render()
  {
    const { posts } = this.props;
    const { nam } = this.props;
    const partOne = this.props.posts.map( ( post, i ) => post.section )
    const ts = partOne.filter( ( item, pos, self ) => self.indexOf( item ) == pos )
    let tsta = posts && posts.map( lt => lt ).filter( a => a.section === this.props.nam[ 0 ] );
    console.log( this.props, 'thisisj lekj klwe' )
    return (
      <>
        <table className='table table-hover list' style={ { width: '20%' } }>
          <tbody>
            <tr><td className="sideRows"> Sections..</td></tr>
            { ts.map( ( name, i ) => <tr key={ i } ><td className="sides" onClick={ this.props.targ } >{ name }</td></tr> ) }
          </tbody>
        </table>
        <div className="rit">
          { nam &&
            <Link to="/AnotherView" style={ { textDecoration: 'none', color: 'black' } }>
              <InnerContent tsta={ tsta } nam={ nam } posts={ posts } />
            </Link> }
        </div>
      </>
    )
  }
}


export default SideNav;