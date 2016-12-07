var redux = require('redux');
var thunk = require("redux-thunk").default;
var {nameReducer,contactsReducer,mapReducer} = require("./../reducers/reducers.jsx")
export var config = () =>{
    var reducer = redux.combineReducers({
        name:nameReducer,
        contacts:contactsReducer,
        map: mapReducer
    });

    var store = redux.createStore(reducer, redux.compose(
        redux.applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
    return store;
};