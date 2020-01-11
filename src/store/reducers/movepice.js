import * as actionTypes from '../actions/actionTypes';

const initialState={
    playerTurn:true,
    movement:''
    
}

const reducer=(state=initialState,action)=>{

    switch(action.type){
        case actionTypes.MOVE_PIECE:
             return{
                 ...state,
                 movement:action.spot
            };
        default:
            return state;
    }
};

export default reducer;