var store = require('../app/store/store_config.jsx').config();

var actions = require('../app/actions/actions.jsx');
console.log('Hello from 3alam SEMSEM');
var defaultState = {
    contacts: [],
    name: "Anonymous"
};
store.dispatch(actions.changeName("ALY"));
store.dispatch(actions.addContact("Noha", "1111111", "Alex"));
store.dispatch(actions.addContact("Aly","123123", "Alex"));
store.dispatch(actions.addContact("Sally", "9999999", "Cairo"));
store.dispatch(actions.removeContact(2));


var unsubscribe = store.subscribe(()=>{
    var state = store.getState();
    if (state.map.isFetching){
        document.getElementById("app").innerHTML = "Loading........";
    } else if(state.map.url){
        document.getElementById("app").innerHTML = '<a href="'+state.map.url+'" target = "_blank">location</a>'
    }
    console.log("contacts:",state.contacts);
});
store.dispatch(actions.fetchLocation());
//unsubscribe();
console.log("2222222222222:",store.getState());
