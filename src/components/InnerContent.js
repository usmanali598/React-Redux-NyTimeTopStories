import React, { Component } from 'react';
import '../index.scss';
import { connect } from 'react-redux';
import
{
  hidingMain, showAnotherView, testing
} from '../action/newActions';
class InnerContent extends Component
{
  componentDidMount()
  {
    console.log( this.props, 'inner content' )
  }
  handleClick = index =>
  {
    this.props.onTesting( index )
    this.props.onHidingMain()
    this.props.onShowAnotherView()
  }
  render()
  {
    const { posts } = this.props;
    let topicName = this.props.tryingReducer.a
    let asta = posts && posts.map( lt => lt ).filter( apu => apu.section === topicName );
    const style = {
      display: this.props.navReducer
    }
    return (
      <div className="nav" style={ style } >
        { asta && asta.map( ( it, i ) =>
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
    tryingReducer: state.tryingReducer
  }
};

const mapActionsToProps = {
  onShowAnotherView: showAnotherView,
  onHidingMain: hidingMain,
  onTesting: testing,
};

export default connect( mapStateToProps, mapActionsToProps )( InnerContent );