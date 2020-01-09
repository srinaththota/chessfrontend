import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore , applyMiddleware , compose} from 'redux';
import reduxThunk from 'redux-thunk';

import reducer from './store/reducer';
import App from './containers/App';

const logger= store=>{
    return next =>{
        return action => {
            console.log('[Middleware ] dispatching',action);
            const result = next(action);
            console.log('[Middleware] next state '+store.getState());
            return result;
        }
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(reducer , composeEnhancers(applyMiddleware(logger , reduxThunk)));


ReactDOM.render(
<Provider store={store}>
    
    <App/>
    
    </Provider>,document.getElementById('root'));