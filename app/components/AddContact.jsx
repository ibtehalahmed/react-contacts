var React = require('react');
var {connect} = require('react-redux');
var actions = require('../../app/actions/actions.jsx');
var AddContact = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var contactName = this.refs.contactName.value;
    var contactPhone = this.refs.contactPhone.value;
    var contactAddress = this.refs.contactAddress.value;

    if (contactName.length > 0 && contactPhone.length > 0) {
      this.refs.contactName.value = '';
      this.refs.contactPhone.value = '';
      this.refs.contactAddress.value = '';
      dispatch(actions.addContact(contactName, contactPhone, contactAddress))
    } else {
      this.refs.contactName.focus();
      this.refs.contactPhone.focus();
      this.refs.contactAddress.focus();
    }
  },
  render: function () {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="contactName" placeholder="add contact name"/>
          <input type="text" ref="contactPhone" placeholder="add contact phone"/>
          <input type="text" ref="contactAddress" placeholder="add contact address"/>
          <button className="button expanded">ADD</button>
        </form>
      </div>
    );
  }
});
export default connect()(AddContact);
