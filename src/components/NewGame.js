import React , {Component} from 'react';
import { connect } from 'react-redux';
import { startGame } from '../store/actions/movepice';
class NewGame extends Component{

    onStartMeth=()=>{
        console.log("method called");
        
    }
    componentDidMount(){
        this.props.onStart();
    }
    render(){
        return(
            <h2 onClick={this.onStartMeth}>NewGame in comp</h2>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return{
    onStart:()=> dispatch(startGame())
    }
}
export default connect(null,mapDispatchToProps)(NewGame);