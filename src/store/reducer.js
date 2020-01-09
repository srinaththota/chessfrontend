import * as actionTypes from './actions';

const initialState={
    board:'nothing',
    gamestatus:'start',
    playerTurn:true,
    movement:''
    
}

const reducer=(state=initialState,action)=>{

    switch(action.type){
        case actionTypes.MOVE_PIECE:
             return{
                 ...state,
                 movement:action.value
            };
        case actionTypes.START_GAME:
            // return{
            //     ...state,
            //     board:board
            // };
        default:
            return state;
    }
};

export default reducer;