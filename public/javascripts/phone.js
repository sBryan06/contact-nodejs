var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.PhoneCategory = {PERSO: 1, PRO: 2};
    self.PhoneType = {MOBILE: 1, FAX: 2, PHONE: 3};

    self.Phone = function (n, c, t) {
        var number = n,
            category = c,
            type = t;

        this.changeNumber = function (n) {
            number = n;
        };

        this.number = function () {
            return number;
        };

        this.category = function () {
            return category;
        };

        this.type = function () {
            return type;
        };
    };

    return self;

}(Contact || {}));
