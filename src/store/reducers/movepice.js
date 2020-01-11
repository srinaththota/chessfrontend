import * as actionTypes from '../actions/actionTypes';

const initialState={
    gameStatus:'',
    movement:'',
    board:'',
    connection:''
    
}

const reducer=(state=initialState,action)=>{

    switch(action.type){
        case actionTypes.MOVE_PIECE:
             return{
                 ...state,
                 movement:action.spot
            };
        case actionTypes.FAILED_CONNECTION:
            return{
                ...state,
                connection:'Failed to connect server'
            }
            
        case actionTypes.BOARD_STATUS:
            return{
                    ...state,
                     board:action.boardStatus.spots,
                    gameStatus:action.boardStatus.gameStatus
                };
        default:
            return state;
    }
};

export default reducer;