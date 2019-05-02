export const HIDE_MAIN = 'HIDE_MAIN';
export function hidingMain()
{
    return {
        type: HIDE_MAIN,
        display: 'none'
    }
}

export const SHOW_MAIN = 'SHOW_MAIN';
export function showMain()
{
    return {
        type: SHOW_MAIN,
        display: 'block'
    }
}

export const HIDE_STORIES = 'HIDE_STORIES';
export function hidingStoriesView()
{
    return {
        type: HIDE_STORIES,
        display: 'none'
    }
}

export const SHOW_STORIES = 'SHOW_STORIES';
export function showStoriesView()
{
    return {
        type: SHOW_STORIES,
        display: 'block'
    }
}

export function sectionSelecting( current )
{
    return {
        type: 'SELECTED_SECTION',
        text: current
    }
}

export function selectingStory( selectedIndex )
{
    return {
        type: 'SELECTING_STORY',
        text: selectedIndex
    }
}

export function unSelectingStory()
{
    return {
        type: 'UNSELECTING_STORY'
    }
}