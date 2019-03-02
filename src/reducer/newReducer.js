import { HIDE_MAIN, SHOW_MAIN, HIDE_ANOTHER, SHOW_ANOTHER } from '../action/newActions';

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

export function anotherViewReducer( state = '', action )
{

    switch ( action.type )
    {
        case SHOW_ANOTHER:
            return action.display
        case HIDE_ANOTHER:
            return action.display
        default:
            return state;
    }
}
