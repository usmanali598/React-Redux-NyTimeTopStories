import React from 'react';
import '../index.scss'
import { connect } from 'react-redux';

const StoryDetails = ( props ) =>
{
    const { posts } = props;
    let topicName = props.sectionSelectingReducer.selectedSection;
    let mapFilteredSections = posts && posts.map( lt => lt ).filter( papu => papu.section === topicName );
    let gettingIndex = props.selectingStoryReducer.selectedIndex;
    let gettingTitle = mapFilteredSections.length > 0 && gettingIndex !== '' ? mapFilteredSections[ gettingIndex ].title : '';
    let gettingAuthName = mapFilteredSections.length > 0 && gettingIndex !== '' ? mapFilteredSections[ gettingIndex ].byline : '';
    let gettingTiming = mapFilteredSections.length > 0 && gettingIndex !== '' ? mapFilteredSections[ gettingIndex ].created_date : '';
    let gettingImage = mapFilteredSections.length > 0 && gettingIndex !== '' ? ( mapFilteredSections[ gettingIndex ].multimedia.length > 0 ? mapFilteredSections[ gettingIndex ].multimedia[ 0 ].url : 'https://www.sjpl.org/sites/default/files/images/1718/nyt.png' ) : '';
    const style = { display: props.storiesDisplayReducer, borderBottom: '1px solid black' }
    return (
        <>
            <table className='view2' style={ style }>
                <tbody>
                    <tr className='viewRow' >
                        <td className='items'>{ gettingTitle }</td>
                        <td className='items'>{ gettingAuthName }</td>
                        <td className='items'>{ gettingTiming }</td>
                    </tr>
                    <tr><td className='items'>{ gettingImage && <img src={ gettingImage } alt='' style={ { width: '75px', height: '75px' } } /> }</td></tr>
                </tbody>
            </table>
        </>
    )
}

const mapStateToProps = ( state ) =>
{
    return {
        storiesDisplayReducer: state.storiesDisplayReducer,
        sectionSelectingReducer: state.sectionSelectingReducer,
        selectingStoryReducer: state.selectingStoryReducer
    }
};

export default connect( mapStateToProps )( StoryDetails );