import React , {Component} from 'react';
import Spot from './Spot';
import classes from './Dashboard.css';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';



class Dashboard extends Component{
   state={
       boardStatus:[
        [
            {
                "piece": {
                    "name": "ROOK",
                    "white": true
                },
                "horizontal": "a",
                "vertical": 0
            },
            {
                "piece": null,
                "horizontal": "a",
                "vertical": 1
            },
            {
                "piece": {
                    "name": "BISHOP",
                    "killed": false,
                    "white": true
                },
                "horizontal": "a",
                "vertical": 2
            },
            {
                "piece": {
                    "name": "QUEEN",
                    "white": true
                },
                "horizontal": "a",
                "vertical": 3
            },
            {
                "piece": {
                    "name": "KING",
                    "white": true
                },
                "horizontal": "a",
                "vertical": 4
            },
            {
                "piece": {
                    "name": "BISHOP",
                    "killed": false,
                    "white": true
                },
                "horizontal": "a",
                "vertical": 5
            },
            {
                "piece": {
                    "name": "KNIGHT",
                    "white": true
                },
                "horizontal": "a",
                "vertical": 6
            },
            {
                "piece": {
                    "name": "ROOK",
                    "white": true
                },
                "horizontal": "a",
                "vertical": 7
            }
        ],
        [
            {
                "piece": {
                    "name": "PAWN",
                    "white": true
                },
                "horizontal": "b",
                "vertical": 0
            },
            {
                "piece": {
                    "name": "PAWN",
                    "white": true
                },
                "horizontal": "b",
                "vertical": 1
            },
            {
                "piece": {
                    "name": "PAWN",
                    "white": true
                },
                "horizontal": "b",
                "vertical": 2
            },
            {
                "piece": {
                    "name": "PAWN",
                    "white": true
                },
                "horizontal": "b",
                "vertical": 3
            },
            {
                "piece": {
                    "name": "PAWN",
                    "white": true
                },
                "horizontal": "b",
                "vertical": 4
            },
            {
                "piece": {
                    "name": "PAWN",
                    "white": true
                },
                "horizontal": "b",
                "vertical": 5
            },
            {
                "piece": {
                    "name": "PAWN",
                    "white": true
                },
                "horizontal": "b",
                "vertical": 6
            },
            {
                "piece": {
                    "name": "PAWN",
                    "white": true
                },
                "horizontal": "b",
                "vertical": 7
            }
        ],
        [
            {
                "piece": null,
                "horizontal": "c",
                "vertical": 0
            },
            {
                "piece": null,
                "horizontal": "c",
                "vertical": 1
            },
            {
                "piece": {
                    "name": "KNIGHT",
                    "white": true
                },
                "horizontal": "c",
                "vertical": 2
            },
            {
                "piece": null,
                "horizontal": "c",
                "vertical": 3
            },
            {
                "piece": null,
                "horizontal": "c",
                "vertical": 4
            },
            {
                "piece": null,
                "horizontal": "c",
                "vertical": 5
            },
            {
                "piece": null,
                "horizontal": "c",
                "vertical": 6
            },
            {
                "piece": null,
                "horizontal": "c",
                "vertical": 7
            }
        ],
        [
            {
                "piece": null,
                "horizontal": "d",
                "vertical": 0
            },
            {
                "piece": null,
                "horizontal": "d",
                "vertical": 1
            },
            {
                "piece": null,
                "horizontal": "d",
                "vertical": 2
            },
            {
                "piece": null,
                "horizontal": "d",
                "vertical": 3
            },
            {
                "piece": null,
                "horizontal": "d",
                "vertical": 4
            },
            {
                "piece": null,
                "horizontal": "d",
                "vertical": 5
            },
            {
                "piece": null,
                "horizontal": "d",
                "vertical": 6
            },
            {
                "piece": null,
                "horizontal": "d",
                "vertical": 7
            }
        ],
        [
            {
                "piece": null,
                "horizontal": "e",
                "vertical": 0
            },
            {
                "piece": null,
                "horizontal": "e",
                "vertical": 1
            },
            {
                "piece": null,
                "horizontal": "e",
                "vertical": 2
            },
            {
                "piece": null,
                "horizontal": "e",
                "vertical": 3
            },
            {
                "piece": null,
                "horizontal": "e",
                "vertical": 4
            },
            {
                "piece": null,
                "horizontal": "e",
                "vertical": 5
            },
            {
                "piece": null,
                "horizontal": "e",
                "vertical": 6
            },
            {
                "piece": null,
                "horizontal": "e",
                "vertical": 7
            }
        ],
        [
            {
                "piece": null,
                "horizontal": "f",
                "vertical": 0
            },
            {
                "piece": null,
                "horizontal": "f",
                "vertical": 1
            },
            {
                "piece": null,
                "horizontal": "f",
                "vertical": 2
            },
            {
                "piece": null,
                "horizontal": "f",
                "vertical": 3
            },
            {
                "piece": null,
                "horizontal": "f",
                "vertical": 4
            },
            {
                "piece": null,
                "horizontal": "f",
                "vertical": 5
            },
            {
                "piece": null,
                "horizontal": "f",
                "vertical": 6
            },
            {
                "piece": null,
                "horizontal": "f",
                "vertical": 7
            }
        ],
        [
            {
                "piece": {
                    "name": "pawn",
                    "white": false
                },
                "horizontal": "g",
                "vertical": 0
            },
            {
                "piece": {
                    "name": "pawn",
                    "white": false
                },
                "horizontal": "g",
                "vertical": 1
            },
            {
                "piece": {
                    "name": "pawn",
                    "white": false
                },
                "horizontal": "g",
                "vertical": 2
            },
            {
                "piece": {
                    "name": "pawn",
                    "white": false
                },
                "horizontal": "g",
                "vertical": 3
            },
            {
                "piece": {
                    "name": "pawn",
                    "white": false
                },
                "horizontal": "g",
                "vertical": 4
            },
            {
                "piece": {
                    "name": "pawn",
                    "white": false
                },
                "horizontal": "g",
                "vertical": 5
            },
            {
                "piece": {
                    "name": "pawn",
                    "white": false
                },
                "horizontal": "g",
                "vertical": 6
            },
            {
                "piece": {
                    "name": "pawn",
                    "white": false
                },
                "horizontal": "g",
                "vertical": 7
            }
        ],
        [
            {
                "piece": {
                    "name": "rook",
                    "white": false
                },
                "horizontal": "h",
                "vertical": 0
            },
            {
                "piece": {
                    "name": "knight",
                    "white": false
                },
                "horizontal": "h",
                "vertical": 1
            },
            {
                "piece": {
                    "name": "bishop",
                    "killed": false,
                    "white": false
                },
                "horizontal": "h",
                "vertical": 2
            },
            {
                "piece": {
                    "name": "queen",
                    "white": false
                },
                "horizontal": "h",
                "vertical": 3
            },
            {
                "piece": {
                    "name": "king",
                    "white": false
                },
                "horizontal": "h",
                "vertical": 4
            },
            {
                "piece": {
                    "name": "bishop",
                    "killed": false,
                    "white": false
                },
                "horizontal": "h",
                "vertical": 5
            },
            {
                "piece": {
                    "name": "knight",
                    "white": false
                },
                "horizontal": "h",
                "vertical": 6
            },
            {
                "piece": {
                    "name": "rook",
                    "white": false
                },
                "horizontal": "h",
                "vertical": 7
            }
        ]
    ]
       
   }
    render(){
let boardFromStore='something';
try{
        if(this.props.brd.board!==null){
            boardFromStore=this.props.brd.board;
        }
    }
    catch(err){

    }
        const sorteddata=this.state.boardStatus.sort(
            function(x,y){
                if(y.horizontal-x.horizontal > 0){
                    return 1;
                }
                else if(y.horizontal - x.horizontal < 0){
                    return -1;
                }
                else{
                    return y.vertical-x.vertical;
                }
            }
            );
            
        /*{
            "piece": {
                "name": "ROOK",
                "white": true
            },
            "horizontal": "a",
            "vertical": 0
        }*/
        
        let chars=['a','b','c','d','e','f','g','h'];
        let table=[];
        let k=0;
        let l=0;
        for(let j=0;j<8;j++){
            for(let i=0;i<8;i++){
            
                if((j+i)%2===0){  // to give black and white colors to spots of the board
                    table.push(
                        <div className={classes.wcontent}>
                            
                    <Spot piece={this.state.boardStatus[j][i]}/>
                </div>
                );
            }else{
               table.push(
               <div className={classes.bcontent}>
                   <Spot piece={this.state.boardStatus[j][i]}/>
                {/*<Spot piece={this.state.boardStatus[j][i].piece}
                 hor={this.state.boardStatus[j][i].horizontal}
               vert={this.state.boardStatus[j][i].vertical}/>*/}
                
                </div>
               );
            }
            
        }
        
    }

        
        return(
            <div className={classes.spots}>
            
            {table}
            **{boardFromStore}**
            {this.props.brd.gamestatus}
            {this.props.brd.connection}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        brd:state
    };
}
const mapDispatchToProps = dispatch => {
    onStart:()=> dispatch({type:actionTypes.START_GAME })
}
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);