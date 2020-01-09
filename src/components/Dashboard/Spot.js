import React , {Component} from 'react';

import classes from './Spot.css';
import * as actionTypes from '../../store/actions';
import { connect } from 'react-redux';

class Spot extends Component{    
 
    state={
        moves:''
    }

    captureCoordinate=()=>{
       
        let move=this.state.moves;
        
        if(move.length < 2){
            move += 'i'+'j';
            
            this.setState(
                {
                    ...this.state,
                    moves:  move        
                }
            );
            console.log("get i and j values and "+move.length);
        }
        else{
           
            console.log("exceeded");
        }
        
        if(move.length == 2){
            this.props.onMovement(); 
            return;
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

    const mapDispatchToProps = dispatch => {
        return{
        onMovement:()=> dispatch({type:actionTypes.MOVE_PIECE})
        }
    }

export default connect(null,mapDispatchToProps)(Spot);