import React from 'react';
import { HashRouter } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
const app=()=>{
    return(
        <div>
            <HashRouter>
            <Layout />
            </HashRouter>
        </div>
    );
}

export default app;