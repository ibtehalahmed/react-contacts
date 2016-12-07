var id = 1;
export var contactsReducer = (state = [], action) => {
    //state = state || {name: "Anonymous"};
    switch (action.type) {
        case 'ADD_CONTACT':
            return[
                ...state, {
                    id: id++,
                    name: action.name,
                    phone: action.phone,
                    address: action.address
                }
            ];
        case 'REMOVE_CONTACT':
            return state.filter((contact)=>{
                //keep ones that does not  match this id
                return contact.id !== action.id
            });
        case 'SHOW_CONTACTS':
            return state.filter((contact)=>{
                //keep ones that does not  match this id
                return contact.id !== action.id
            });
        case 'EDIT_CONTACT':
            var contact = state.filter((contact)=>{
                //keep ones that does not  match this id
                return contact.id == action.id
            });
            contact.name = action.name;
            contact.phone = action.phone;
            contact.address = action.address;
            return contact;
        default :
            return state;
    }
};

/*  export var mapReducer = (state = {isFetching: false,url:undefined}, action) => {
    //state = state || {name: "Anonymous"};
    console.log("111111111111",action);
    switch (action.type) {
        case 'START_LOCATION_FETCH':
            return{
                isFetching: true,
                url:undefined

            };
        case 'COMPLETE_LOCATION_FETCH':
            return{
                isFetching: false,
                url: action.url
            };
        default :
            return state;
    }
};

export var nameReducer = (state = "Anonymous", action) => {
    //state = state || {name: "Anonymous"};
    switch (action.type) {
        case 'CHANGE_NAME':
            return{
                name: action.name
            };
        default :
            return state;
    }
};*/


