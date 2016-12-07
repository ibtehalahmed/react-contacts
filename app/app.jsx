var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var {Provider} = require('react-redux');
var ContactApp = require('ContactApp');
var  actions = require("../app/actions/actions.jsx");
var store = require("../app/store/store_config.jsx").config();

// Load foundation
//$(document).foundation();

// App css
//require('style!css!sass!applicationStyles')

store.subscribe(()=>{
    console.log("new state", store.getState());
});
store.dispatch(actions.addContact("Noha", "1111111","Alex"));

ReactDOM.render(
    <Provider store={store}>
        <ContactApp/>
    </Provider>,
  document.getElementById('app')
);
//require('./redux1.jsx');
