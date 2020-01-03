import React , {Component} from 'react';

import classes from './Spot.css';
import * as actionTypes from '../../store/actions';
import { connect } from 'react-redux';

class Spot extends Component{    
 
    state={
        moves:[]
    }

    captureCoordinate=()=>{
        
        const move=this.state.moves;
        move.push('i'+'j');
        if(this.state.moves.length < 3){
            console.log("get i and j values");
            this.setState(
                {
                    moves:move
                }
            );
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

    const mapDispatchToProps = dispatch => {
        //onMovement=(move)=> dispatch({type:actionTypes.MOVE_PIECE,payload:move})
    }

export default connect(null,mapDispatchToProps)(Spot);