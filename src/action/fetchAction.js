export function fetchRequest()
{
    return { type: "FETCH_REQUEST" }
}

export function fetchSuccess( payload )
{
    return {
        type: "FETCH_SUCCESS",
        payload
    }
}
export function fetchError()
{
    return { type: "FETCH_ERROR" }
}

export const TARGET = 'usersUpdateUser';
export function updateUser( newUser )
{
    return {
        type: TARGET,
        payload: {
            user: newUser
        }
    }
}