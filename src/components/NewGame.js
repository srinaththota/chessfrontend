import React , {Component} from 'react';
import { connect } from 'react-redux';
import { startGame } from '../store/actions/movepice';
import classes from './NewGame.css';
class NewGame extends Component{

    onStartMeth=()=>{
        this.props.onStart();
    }
    componentDidMount(){
        
    }
    render(){
        return(
            <button className={classes.buttonstyle} onClick={this.onStartMeth}>Click here reset the game</button>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return{
    onStart:()=> dispatch(startGame())
    }
}

// const mapDispatchToProps = dispatch => {
//     return{
//     onMovement:(coordinates)=> dispatch(movePiece(coordinates)),
//     sendData:(move)=> dispatch(sendMovements(move)),
//     onResetMovement:()=>dispatch(resetMovement())
//     }
// }
export default connect(null,mapDispatchToProps)(NewGame);