module.exports = {
  setContacts: function (contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
      return contacts;
  },
  getContacts: function () {

    var stringContacts = localStorage.getItem('contacts');
    var contacts = [];
    try {
      contacts = JSON.parse(stringContacts);
    } catch (e) {

    }
    return contacts;
  }
};
