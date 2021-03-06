import
{
    fetchRequest,
    fetchSuccess,
    fetchError
} from './../action/fetchAction';

export function getPosts( api )
{
    const URL = 'https://api.nytimes.com/svc/topstories/v2/science.json?api-key=' + api;
    return fetch( URL, { method: 'GET' } )
        .then( response => Promise.all( [ response, response.json() ] ) );
}

export function fetchPostsWithRedux()
{
    return ( dispatch ) =>
    {
        dispatch( fetchRequest() );
        return getPosts( '1AZxPAZgOh9VNSx4BnlCRIzLXxDPzgC5' ).then( ( [ response, json ] ) =>
        {
            if ( response.status === 200 )
            {
                dispatch( fetchSuccess( json.results.map( child => child ) ) )
            }
            else
            {
                dispatch( fetchError() )
            }
        } )
    }
}

export function fetchReducer( state = { posts: [] }, action )
{
    switch ( action.type )
    {
        case "FETCH_REQUEST":
            return state;
        case "FETCH_SUCCESS":
            return Object.assign( {}, state, { posts: action.payload } )
        default:
            return state;
    }
}


