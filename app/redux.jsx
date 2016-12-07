var redux = require('redux');

console.log('Hello from 3alam SEMSEM');

var reducer = (state = {name: "Anonymous"}, action) => {
    //state = state || {name: "Anonymous"};
    switch (action.type) {
        case 'CHANGE_NAME':
            return{
                ...state,
                name: action.name
            };
        default :
            return state;
    }
};

store.dispatch({
    type:"CHANGE_NAME",
    name: "Ibtehal"
});
store.dispatch({
    type:"CHANGE_NAME",
    name: "Ahmed"
});
var store = redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(()=>{
    var state = store.getState();
    console.log("currentStateNAme:",state.name);
});


