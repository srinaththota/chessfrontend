import React , {Component} from 'react';

import classes from './Spot.css';
import * as actionTypes from '../../store/actions/actionTypes';
import  { movePiece , sendMovements , resetMovement} from '../../store/actions/movepice';
import { connect } from 'react-redux';

class Spot extends Component{    
 
    state={
        moves:''
    }

    captureCoordinate=(hor,vert)=>{
       
        let move=this.props.movepiece;
       
        
        if(move.length < 4){
            move = move+''+hor+''+vert;
            console.log("movement is ----->  "+move+"   movement length is-------> "+move.length);       
            this.setState(
                {
                    ...this.state,
                    moves:  move        
                }
            );
            
           this.props.onMovement(move);
            if(move.length === 4){
                console.log("sendData method called");
                this.props.sendData(move);
                this.props.onResetMovement();
            }
        }
        
        else{
           
            console.log("exceeded");
        }
        
    
             

        
       
        
    }
    render(){

        let style=null;
        let name='-';
        let color='';
        let killed='';

        let hor='';
        let vert='';
        try{
            name=this.props.piece.piece.name
            killed=this.props.piece.killed
            //console.log("name from parent component is    ----> "+name);
            color=this.props.piece.white
        
            //console.log("name from parent component is    ----> "+hor+""+vert);
        }
        catch(err){

        }
        try{
            hor=this.props.piece.horizontal
            vert=this.props.piece.vertical
        }
        catch(err){
            
        }
        const styleWhite={
            color:'white',
            cursor:'cell'
        }
        const styleBlack={
            color:'black',
            cursor:'cell'
        }
        if(color==true){
            style=styleWhite
        }
        else{
            style=styleBlack
        }
        if(killed == true){
            name='-'
        }
    return(
        <h1 style={style} onClick={this.captureCoordinate.bind(this,hor,vert)}>
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
        onMovement:(coordinates)=> dispatch(movePiece(coordinates)),
        sendData:(move)=> dispatch(sendMovements(move)),
        onResetMovement:()=>dispatch(resetMovement())
        }
    }

export default connect(mapStateToProps,mapDispatchToProps)(Spot);