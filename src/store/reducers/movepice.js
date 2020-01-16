import * as actionTypes from '../actions/actionTypes';

const initialState={
    gameStatus:'',
    movement:'',
    board:null,
    connection:''
    
}

const reducer=(state=initialState,action)=>{

    switch(action.type){
        case actionTypes.MOVE_PIECE:
             return{
                 ...state,
                 movement:action.spot,
                 gameStatus:action.gamestatus
            };
        case actionTypes.FAILED_CONNECTION:
            return{
                ...state,
                connection:'Failed to connect server'
            }
            
        case actionTypes.BOARD_STATUS:
            console.log("  Logging board status infor  -->  "+action.boardStatus);
            
             return{
                    ...state,
                    board:action.boardStatus.spots,
                    gameStatus:action.boardStatus.gamestatus
                    
                 };
                 
        case actionTypes.RESET_MOVEMENT:
            return{
                ...state,
                movement:''
            }
            case actionTypes.START_GAME:
            return{
                ...state,
                movement:'',
                gameStatus:''
            }
        default:
            return state;
    }
};

// const boardState=(state,action)=>{
//     switch(action.type){
//     case actionTypes.BOARD_STATUS:
//             console.log("  Logging board status infor  -->  "+action.boardStatus);
            
//              return{
//                     ...state,
//                      board:action.boardStatus,
//                      gameStatus:action.boardStatus.gamestatus 
                    
//                  };
//     }
// }
export default reducer;