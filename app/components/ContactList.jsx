var React = require('react');
var {connect} = require('react-redux');
//var Contact = require('Contact');
import Contact from 'Contact.jsx'
export var ContactList = React.createClass({
  render: function () {
    var {contacts} = this.props;
    var renderContacts = () => {
      return contacts.map((contact) => {
        return (
          <Contact key={contact.id} {...contact} />
        );
      });
    };

    return (
      <div>
        <table className="table table-hover">
          <tbody>
        {renderContacts()}
          </tbody>
        </table>
      </div>
    )
  }
});

module.exports = connect(
    (state) => {
      return{contacts: state.contacts};
    }
)(ContactList);
