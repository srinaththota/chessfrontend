import React , {Component} from 'react';
import Spot from './Spot';
import classes from './Dashboard.css';

class Dashboard extends Component{
   
    render(){

        let table=[];
        for(let j=0;j<8;j++){
            for(let i=0;i<8;i++){
            
                if(i%2===0){
                    table.push(
                        <div className={classes.wcontent}>
                    <Spot  />
                </div>
                );
            }else{
               table.push(
               <div className={classes.bcontent}>
                <Spot  />
                </div>
               );
            }
            
        }
        
    }
        
        return(
            <div className={classes.spots}>
            
            {table}
            
            </div>
        );
    }
}

export default Dashboard;