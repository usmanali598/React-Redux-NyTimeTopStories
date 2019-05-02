import React, { Component } from 'react';
import '../index.scss';
import { connect } from 'react-redux';
import
{
  hidingMain, showStoriesView, selectingStory
} from '../action/storiesActions';
class InnerContent extends Component
{
  handleClick = index =>
  {
    this.props.onSelectingStory( index )
    this.props.onHidingMain()
    this.props.onShowStoriesView()
  }
  render()
  {
    const { posts } = this.props;
    let topicName = this.props.sectionSelectingReducer.selectedSection
    let selectedSection = posts && posts.map( lt => lt ).filter( apu => apu.section === topicName );
    const style = {
      display: this.props.navReducer
    }
    return (
      <div className="nav" style={ style } >
        { selectedSection && selectedSection.map( ( it, i ) =>
        {
          return (
            // <div key={ i } className={ display === '' ? 'NavContainer' : 'non' } id={ i } onClick={ this.handleClick.bind( this, i ) }>
            <div className='NavContainer' id={ i } key={ i } onClick={ this.handleClick.bind( this, i ) }>
              <div className="NavLeft" >
                { it.multimedia.filter( img => img.length > 1 ) ? <img className='smallPic' src={ it.multimedia.length > 0 ? it.multimedia[ 0 ].url : 'https://www.sjpl.org/sites/default/files/images/1718/nyt.png' } alt='pics' /> : <p>No Image..</p> }
                <p >{ it.updated_date }</p>
                <p className="author" style={ { margin: 'auto' } }>{ it.byline }</p>
              </div>
              <div className="NavRight" >
                <h1 className='se'>{ it.abstract }</h1>
                <p>{ it.title }</p> <a target="_parent" href={ it.url }>Read More..</a>
                <p>{ it.des_facet.map( chk => `#${ chk }  ` ) }</p>
              </div>
            </div>
          )
        } ) }
      </div>
    )
  }
}

const mapStateToProps = ( state, props ) =>
{
  return {
    navReducer: state.navReducer,
    sectionSelectingReducer: state.sectionSelectingReducer
  }
};

const mapActionsToProps = {
  onShowStoriesView: showStoriesView,
  onHidingMain: hidingMain,
  onSelectingStory: selectingStory,
};

export default connect( mapStateToProps, mapActionsToProps )( InnerContent );