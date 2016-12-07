var axios = require("axios");

export var addContact = (name, phone, address)=>{
    return{
        type:"ADD_CONTACT",
        name,
        phone,
        address
    }
};
export var removeContact = (id)=>{
    return{
        type:"REMOVE_CONTACT",
        id
    }
};
export var showContacts = ()=>{
    return{
        type:"SHOW_CONTACTS"
    }
};
export var editContact = (id,name, phone, address)=>{
    return{
        type:"EDIT_CONTACT",
        id,
        name,
        phone,
        address
    }
};
/*
export var changeName = (name)=>{
    return{
        type:"CHANGE_NAME",
        name
    }
};

export var startLocationFetch = ()=>{
    return{
        type: "START_LOCATION_FETCH"
    }
};

export var completeLocationFetch = (url)=>{
    return{
        type: "COMPLETE_LOCATION_FETCH",
        url
    }
};
export var fetchLocation =()=>{
    return (dispatch, getState) => {
        dispatch(startLocationFetch());
        axios.get("http://ipinfo.io").then(function(res){
            var loc = res.data.loc;
            var baseUrl = 'http://maps.google.com?q=';
            dispatch(completeLocationFetch(baseUrl + loc))
        })
    };
};*/
