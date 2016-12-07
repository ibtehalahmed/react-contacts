var React = require('react');
var {connect} = require('react-redux');
var actions = require('../actions/actions.jsx');
var moment = require('moment');

export var Contact = React.createClass({
  render: function () {
    var {id, name, phone, address, dispatch} = this.props;

    return (
            <tr contentEditable="true">
              <td>{id}</td>
              <td>{name}</td>
              <td>{phone}</td>
              <td>{address}</td>
              <td>
                <a className="btn btn-success btn-lg" role="button" onClick={() => {
                    dispatch(actions.editContact(id,name,phone,address));
        }}>Edit</a>
                <a className="btn btn-danger btn-lg" role="button" onClick={() => {
          dispatch(actions.removeContact(id));
        }}>x</a>
              </td>
            </tr>
    )
  }
});
export default connect()(Contact);
