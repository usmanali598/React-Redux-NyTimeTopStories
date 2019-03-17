import React, { Component } from 'react';
import InnerContent from './InnerContent';
import AnotherView from './AnotherView';
import { Link, NavLink } from 'react-router-dom';
import '../index.scss';
import { hidingMain, showMain, hidingAnotherView, showAnotherView, trying, unTesting } from '../action/newActions';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';


class SideNav extends Component
{
  componentDidMount()
  {
    this.props.onHidingAnotherView()
  }
  handleClik = ( e ) =>
  {
    this.props.onShowMain()
    this.props.onTrying( e.target.innerHTML )
    this.props.onUnTesting()
    this.props.onHidingAnotherView()
  }
  render()
  {
    const { posts } = this.props;
    const partOne = this.props.posts.map( ( post, i ) => post.section )
    const ts = partOne.filter( ( item, pos, self ) => self.indexOf( item ) == pos )
    let { a } = this.props.tryingReducer
    let tsta = posts && posts.map( lt => lt ).filter( appu => appu.section === a );
    // console.log(this.props.targ)
    return (
      <>
        <table className='table table-hover glyphicon-hover list' style={ { width: '20%' } } onClick={ this.handleClik }>
          <tbody>
            <tr><td className="sideRows"> Sections..</td></tr>
            { ts.map( ( name, i ) => <tr key={ i } ><td className="sides" >{ name }</td></tr> ) }
          </tbody>
        </table>
        <div className="rit">
          <table style={ { width: '100%', borderBottom: '1px solid black', borderWidth: '100%' } } ><tbody>
            <tr ><td><span style={ { fontWeight: 'bold' } }>Top Stories</span>( { a ? a : '-' } )</td></tr>
          </tbody></table>
          <InnerContent posts={ posts } />
          <AnotherView posts={ posts } />
        </div>
      </>
    )
  }
}

const mapStateToProps = ( state ) =>
{
  return {
    tryingReducer: state.tryingReducer,
  }
};

const mapActionsToProps = {
  onHidingAnotherView: hidingAnotherView,
  onShowMain: showMain,
  onTrying: trying,
  onUnTesting: unTesting
};

export default connect( mapStateToProps, mapActionsToProps )( SideNav );