export const HIDE_MAIN = 'hideMain';
export function hidingMain()
{
    return {
        type: HIDE_MAIN,
        display: 'none'
    }
}

export const SHOW_MAIN = 'showMain';
export function showMain()
{
    return {
        type: SHOW_MAIN,
        display: 'block'
    }
}

export const HIDE_ANOTHER = 'hideAnother';
export function hidingAnotherView()
{
    return {
        type: HIDE_ANOTHER,
        display: 'none'
    }
}

export const SHOW_ANOTHER = 'showAnother';
export function showAnotherView()
{
    return {
        type: SHOW_ANOTHER,
        display: 'block'
    }
}

export function trying( usr )
{
    return {
        type: 'TRYING',
        text: usr
    }
}

export function testing( tst )
{
    return {
        type: 'TESTING',
        text: tst
    }
}

export function unTesting()
{
    return {
        type: 'UNTESTING'
    }
}