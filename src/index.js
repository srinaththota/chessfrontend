import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore , applyMiddleware ,combineReducers ,  compose} from 'redux';
import reduxThunk from 'redux-thunk';

import movePiece from './store/reducers/movepice';

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

const rootReducer = combineReducers({

    mpiece:movePiece

});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(rootReducer , composeEnhancers(applyMiddleware(logger , reduxThunk)));

//const store=createStore(rootReducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



ReactDOM.render(
<Provider store={store}>
    
    <App/>
    
    </Provider>,document.getElementById('root'));