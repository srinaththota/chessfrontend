import * as actionTypes from './actionTypes';
import axios from 'axios';
import POST_MOVE from './config';

export const movePiece = (move)=>{

    return {
        type:actionTypes.MOVE_PIECE,
        spot:move
    }
}


export const connectionFailed = () =>{

    return{
        type:actionTypes.FAILED_CONNECTION
    }
}
export const resetMovement=()=>{
    return{
        type:actionTypes.RESET_MOVEMENT
    }
}
export const sendMovements = (move) =>dispatch => {
    
   axios.post('http://18.130.162.245:8080/movepiece',move)
   .then(
       response =>{
        dispatch({
            type:actionTypes.BOARD_STATUS,
            boardStatus:  response.data
          })
       }
   ).catch( error =>{
    dispatch(
        {
            type:actionTypes.FAILED_CONNECTION,
            tryagain:'try again'
        }
    )
   }
   );
}

export const startGame = () =>dispatch => {
    
   axios.get('http://18.130.162.245:8080/startgame')
   .then(
       response =>{
        dispatch({
            type:actionTypes.BOARD_STATUS,
            boardStatus:  response.data
          })
       }
   ).catch( error =>{
    dispatch(
        {
            type:actionTypes.FAILED_CONNECTION,
            tryagain:'try again'
        }
    )
   }
   );
}