import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../index.scss'
import { connect } from 'react-redux';
import
{
    hidingMain, showMain,
    hidingAnotherView, showAnotherView, trying, testing
} from '../action/newActions';

const AnotherView = (props)=>
{
    const { posts } = props;
    let topicName = props.tryingReducer.a;
    let pasta = posts && posts.map( lt => lt ).filter( papu => papu.section === topicName );
    let gettingIndex = props.testingReducer.a;
    let gettingTitle = pasta.length > 0 && gettingIndex !== '' ? pasta[ gettingIndex ].title : '';
    let gettingAuthName = pasta.length > 0 && gettingIndex !== '' ? pasta[ gettingIndex ].byline : console.log( 'auth is not showing' );
    let gettingTiming = pasta.length > 0 && gettingIndex !== '' ? pasta[ gettingIndex ].created_date : console.log( 'created_date is not showing' );
    let gettingImage = pasta.length > 0 && gettingIndex !== '' ? (pasta[ gettingIndex ].multimedia.length > 0 ? pasta[ gettingIndex ].multimedia[ 0 ].url : 'https://www.sjpl.org/sites/default/files/images/1718/nyt.png' ) : console.log( 'ima es not showing' );
    const style = { display: props.anotherViewReducer, borderBottom: '1px solid black' }
    return (
        <>
            <table className='view2' style={ style }>
                <tbody>
                    <tr className='viewRow' >
                        <td className='tk'>{ gettingTitle }</td>
                        <td className='tk'>{ gettingAuthName }</td>
                        <td className='tk'>{ gettingTiming }</td>
                    </tr>
                    <tr><td className='tk'>{ gettingImage && <img src={ gettingImage } alt='image' style={{width:'75px', height:'75px'}}  /> }</td></tr>
                </tbody>
            </table>
        </>
    )
}


const mapStateToProps = ( state, props ) =>
{
    return {
        // navReducer: state.navReducer,
        anotherViewReducer: state.anotherViewReducer,
        tryingReducer: state.tryingReducer,
        testingReducer: state.testingReducer
    }
};

export default connect( mapStateToProps )( AnotherView );