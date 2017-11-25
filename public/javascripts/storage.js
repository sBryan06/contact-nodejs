var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    var Storage = function () {
        this.load = function (contacts) {
            for (var i = 0; i < localStorage.length; i++){
                var data = JSON.parse(localStorage.getItem(localStorage.key(i)));
                var contact = new Contact.Contact(data.gender, data.firstName, data.lastName);

                contact.setID(data.id);
                contacts.add(contact);
            }
        };

        this.save = function (contacts) {
            var it = contacts.iterator();

            while (it.hasNext()) {
                var contact = it.next();

                if (contact) {
                    var data = {
                        id: contact.id(),
                        gender: contact.gender(),
                        firstName: contact.firstName(),
                        lastName: contact.lastName()
                    };

                    localStorage.setItem('contacts/' + contact.id(), JSON.stringify(data));
                }
            }
        };
    };

    var _instance = null;

    self.Storage = {
        instance: function () {
            if (_instance === null) {
                _instance = new Storage();
            }
            return _instance;
        }
    };

    return self;

}(Contact || {}));
