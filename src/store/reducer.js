import * as actionTypes from './actions';

const initialState={
    board:'nothing',
    gamestatus:''
}

const reducer=(state=initialState,action)=>{

    switch(action.type){
        case actionTypes.MOVE_PIECE:
            return{
                ...state,
                gamestatus:'whitewin'
            };
        case actionTypes.START_GAME:
            return{
                ...state,
                board:board
            };
    }
};

export default reducer;