import React , {Component} from 'react';

import classes from './Spot.css';
import * as actionTypes from '../../store/actions/actionTypes';
import  { movePiece } from '../../store/actions/movepice';
import { connect } from 'react-redux';

class Spot extends Component{    
 
    state={
        moves:''
    }

    captureCoordinate=()=>{
       
        let move=this.props.movepiece;
        console.log("*********"+move);  
        
        if(move.length < 4){
            move += 'i'+'j';
            
            this.setState(
                {
                    ...this.state,
                    moves:  move        
                }
            );
            console.log("get i and j values and "+move.length);
            this.props.onMovement(move);
            if(move.length === 4){
                console.log("should send request");
            }
        }
        
        else{
           
            console.log("exceeded");
        }
        
    
             

        
       
        
    }
    render(){

        let style=null;
        let name='-';
        let color=false;
        try{
            name=this.props.piece.name
            color=this.props.piece.white
        }
        catch(err){

        }
        const styleWhite={
            color:'grey',
            cursor:'cell'
        }
        const styleBlack={
            color:'black',
            cursor:'cell'
        }
        if(color){
            style=styleWhite
        }
        else{
            style=styleBlack
        }
        
    return(
        <h1 style={style} onClick={this.captureCoordinate}>
            {name}
        </h1>
        
            
        
    );
    }

    }

    const mapStateToProps = state =>{
        return {
            movepiece:state.mpiece.movement
        }
    }
    const mapDispatchToProps = dispatch => {
        return{
        onMovement:(coordinates)=> dispatch(movePiece(coordinates))
        }
    }

export default connect(mapStateToProps,mapDispatchToProps)(Spot);