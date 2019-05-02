import { HIDE_MAIN, SHOW_MAIN, HIDE_STORIES, SHOW_STORIES } from '../action/storiesActions';

export function navReducer( state = '', action )
{
    switch ( action.type )
    {
        case HIDE_MAIN:
            return action.display
        case SHOW_MAIN:
            return action.display
        default:
            return state;
    }
}

export function storiesDisplayReducer( state = '', action )
{

    switch ( action.type )
    {
        case SHOW_STORIES:
            return action.display
        case HIDE_STORIES:
            return action.display
        default:
            return state;
    }
}
export function sectionSelectingReducer( state = {}, action )
{
    switch ( action.type )
    {
        case 'SELECTED_SECTION':
            return { ...state, selectedSection: action.text }
        default:
            return state;
    }
}

export function selectingStoryReducer( state = {}, action )
{
    switch ( action.type )
    {
        case 'SELECTING_STORY':
            return { ...state, selectedIndex: action.text }
        case 'UNSELECTING_STORY':
            return { ...state, selectedIndex: '' }
        default:
            return state;
    }
}