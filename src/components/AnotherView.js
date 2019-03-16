import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../index.scss'
import { connect } from 'react-redux';
import
{
    hidingMain, showMain,
    hidingAnotherView, showAnotherView, trying, testing
} from '../action/newActions';
class AnotherView extends Component
{
    state = {
        auth: '',
        timing: '',
        imgs: ''
    }
    backNRefresh = () =>
    {
        // console.log( this.props.history )
        // this.props.history.push( '/' )
        window.history.back();
        setTimeout( () => window.location.reload(), 500 );
    }

    render()
    {
        const { posts } = this.props;
        let topicName = this.props.tryingReducer.a;
        let pasta = posts && posts.map( lt => lt ).filter( papu => papu.section === topicName );
        let gettingIndex = this.props.testingReducer.a;
        let gettingTitle = pasta.length > 0 && gettingIndex !== '' ? pasta[ gettingIndex ].title : '';
        let gettingAuthName = pasta.length > 0 && gettingIndex !== '' ? pasta[ gettingIndex ].byline : console.log( 'auth is not showing' );
        let gettingTiming = pasta.length > 0 && gettingIndex !== '' ? pasta[ gettingIndex ].created_date : console.log( 'created_date is not showing' );
        let gettingImage = pasta.length > 0 && gettingIndex !== '' ? pasta[ gettingIndex ].multimedia[ 0 ].url : console.log( 'ima es not showing' );

        console.log( gettingImage, 'pasta here' )
        const style = { display: this.props.anotherViewReducer, borderBottom: '1px solid black' }
        return (
            <>
                <table className='view2' style={ style }>
                    <tbody>
                        <tr className='viewRow' onClick={ () => { this.backNRefresh() } }>
                            <td className='tk'>{ gettingTitle }</td>
                            <td className='tk'>{ gettingAuthName }</td>
                            <td className='tk'>{ gettingTiming }</td>
                        </tr>
                        <tr><td className='tk'>{ gettingImage && <img src={ gettingImage } alt='try' /> }</td></tr>
                    </tbody>
                </table>
            </>
        )
    }
}

const mapStateToProps = ( state, props ) =>
{
    return {
        navReducer: state.navReducer,
        anotherViewReducer: state.anotherViewReducer,
        tryingReducer: state.tryingReducer,
        testingReducer: state.testingReducer
    }
};

const mapActionsToProps = {
    onShowAnotherView: showAnotherView,
    onHidingAnotherView: hidingAnotherView,
    onHidingMain: hidingMain,
    onShowMain: showMain,
    onTrying: trying,
    onTesting: testing,
};

export default connect( mapStateToProps, mapActionsToProps )( AnotherView );