var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.Builder = function () {
        this.createMinimalContact = function (g, f, l) {
            return new Contact.Contact(g, f, l);
        };

        this.createContactWithProfessionalMail = function (g, f, l, am) {
            var contact = new Contact.Contact(g, f, l);

            contact.addMail(new Contact.Mail(am, Contact.MailCategory.PRO));
            return contact;
        };

        this.createContactWithProfessionalMobile = function (g, f, l, n) {
            var contact = new Contact.Contact(g, f, l);

            contact.addPhone(new Contact.Phone(n, Contact.PhoneCategory.PRO, Contact.PhoneType.MOBILE));
            return contact;
        };

        this.createContactWithTag = function (g, f, l, t) {
            var contact = new Contact.Contact(g, f, l);

            contact.addTag(t);
            return contact;
        };
    };

    return self;

}(Contact || {}));