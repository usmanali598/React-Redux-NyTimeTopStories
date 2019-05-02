import React, { Component } from 'react';
import InnerContent from './InnerContent';
import StoryDetails from './StoryDetails';
import '../index.scss';
import { showMain, hidingStoriesView, sectionSelecting, unSelectingStory } from '../action/storiesActions';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
class SideNav extends Component
{
  componentDidMount()
  {
    this.props.onHidingStoriesView()
  }
  handleClik = ( e ) =>
  {
    this.props.onShowMain()
    this.props.onSectionSelecting( e.target.innerHTML )
    this.props.onUnSelectingStory()
    this.props.onHidingStoriesView()
  }
  render()
  {
    const { posts } = this.props;
    const mapSections = this.props.posts.map( post => post.section )
    const filterMapSections = mapSections.filter( ( item, pos, self ) => self.indexOf( item ) === pos )
    let { selectedSection } = this.props.sectionSelectingReducer
    let cssResponsiveFix = window.innerWidth <= '500' ? '100%' : '20%'
    return (
      <>
        <table className='table table-hover glyphicon-hover list' style={ { width: cssResponsiveFix } } >
          <tbody>
            <tr><td className="sideRows" > Sections..</td></tr>
            { filterMapSections.map( ( name, i ) => <tr key={ i } ><td className="sides iconTesting" onClick={ this.handleClik }>{ name }</td></tr> ) }
          </tbody>
        </table>
        <div className="rit">
          <table style={ { width: '100%', borderBottom: '1px solid black', borderWidth: '100%' } } ><tbody>
            <tr ><td><span style={ { fontWeight: 'bold' } }>Top Stories</span>( { selectedSection ? selectedSection : '-' } )</td></tr>
          </tbody></table>
          <InnerContent posts={ posts } />
          <StoryDetails posts={ posts } />
        </div>
      </>
    )
  }
}

const mapStateToProps = ( state ) =>
{
  return {
    sectionSelectingReducer: state.sectionSelectingReducer,
  }
};

const mapActionsToProps = {
  onHidingStoriesView: hidingStoriesView,
  onShowMain: showMain,
  onSectionSelecting: sectionSelecting,
  onUnSelectingStory: unSelectingStory
};

export default connect( mapStateToProps, mapActionsToProps )( SideNav );