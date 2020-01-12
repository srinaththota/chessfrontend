import React from 'react';
import {Link , Route} from 'react-router-dom';
import classes from './Layout.css';

import SignIn  from '../../containers/SignIn';
import Dashboard from '../Dashboard/Dashboard';
import NewGame  from '../NewGame';

const layout=()=>{
    return(
        <div>
        <div className={classes.hcontent}>
            <Link className={classes.column1} to="/"  >SignIn</Link>
            <Link className={classes.column1} to="/dashboard"  >Dashboard</Link>
        </div>
        <div className={classes.bcontent}>
            <Route path="/" exact component={SignIn}/>
            <Route path="/dashboard" exact component={Dashboard}/>
        </div>
        
        
        </div>
    );
}

export default layout;