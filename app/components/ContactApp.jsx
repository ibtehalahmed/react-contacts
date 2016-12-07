var React = require('react');

import ContactList from 'ContactList';
import AddContact from'AddContact';
var API = require('API');

var ContactApp = React.createClass({
  getInitialState: function () {
    return {
      contacts: API.getContacts()
    };
  },
  componentDidUpdate: function () {
    API.setContacts(this.state.contacts);
  },
  /*handleAddContact: function (name, phone, address) {
    this.setState({
      contacts: [
        ...this.state.contacts,
        {
          name: name,
          phone: phone,
          address: address
        }
      ]
    });
  },*/
/*  handleToggle: function () {
    var updatedContacts = this.state.contacts.map((contact) => {
      return contact;
    });

    this.setState({contacts: updatedContacts});
  },*/
  render: function () {
    var allContacts = API.getContacts();

    return (
      <div className="container">
        <h1>CONTACTS</h1>
          <div>
              <ContactList/>
              <AddContact/>
            </div>
      </div>
    )
  }
});

module.exports = ContactApp;
