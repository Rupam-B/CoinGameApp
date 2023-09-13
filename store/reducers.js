
const initialState = {
    wins :0,
    looses :0,
}

export const gameReducer= (state= initialState, action)=>{


    if(action.type === 'WIN_GAME'){
        return {
            ...state,
            wins : state.wins + 1,
        }
    }
    else if(action.type === 'LOOSE_GAME'){
        return {
            ...state,
            looses : state.looses + 1,
        }
    }
    else{
        return state;
    }


}