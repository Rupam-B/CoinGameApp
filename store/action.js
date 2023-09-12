
export const WIN_GAME = 'WIN_GAME'
export const LOOSE_GAME = 'LOOSE_GAME'



export function winGame (){
    return {type : 'WIN_GAME'}
}
export function looseGame (){
    return {type : 'LOOSE_GAME'}
}