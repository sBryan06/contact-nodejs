var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.MailCategory = {PERSO: 1, PRO: 2};

    self.Mail = function (a, c) {
        var address = a,
            category = c;

        this.address = function () {
            return address;
        };

        this.category = function () {
            return category;
        };
    };

    return self;

}(Contact || {}));
