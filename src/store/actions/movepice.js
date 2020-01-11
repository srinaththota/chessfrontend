import * as actionTypes from './actionTypes';

export const movePiece = (move)=>{

    return {
        type:actionTypes.MOVE_PIECE,
        spot:move
    }
}