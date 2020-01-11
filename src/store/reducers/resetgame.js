import * as actionTypes from '../actions/actionTypes';

const initialState={
    board:'nothing',
    gamestatus:'yet to start'
    
}

const reducer=(state=initialState,action)=>{

    switch(action.type){
        case actionTypes.START_GAME:
             return{
                 ...state,
                 board:'restart'
            };
        default:
            return state;
    }
};

export default reducer;