var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.Gender = {MR: 1, MRS: 2, MISS: 3};

    self.Contact = function (g, f, l) {
        var id,
            gender,
            firstName,
            lastName,
            mails = [],
            phones = [],
            nickNames = {
                skype: undefined,
                twitter: undefined,
                facebook: undefined
            },
            profiles = {
                viadeo: undefined,
                linkedin: undefined
            },
            tags = [],
            observers = [];

        this.addMail = function (m) {
            mails.push(m);
        };

        this.addObserver = function (observer) {
            observers.push(observer);
        };

        this.addPhone = function (p) {
            phones.push(p);
        };

        this.addTag = function (t) {
            tags.push(t);
        };

        this.firstName = function () {
            return firstName;
        };

        this.id = function () {
            return id;
        };

        this.existsTag = function (tag) {
            var index, found = false;

            for (index = 0; index < tags.length; ++index) {
                if (!found) {
                    found = tags[index] === tag;
                }
            }
            return found;
        };

        this.gender = function () {
            return gender;
        };

        this.lastName = function () {
            return lastName;
        };

        this.mails = function () {
            return mails;
        };

        this.phones = function () {
            return phones;
        };

        var notify = function (self) {
            var index;

            for (index = 0; index < observers.length; ++index) {
                observers[index].notify(self);
            }
        };

        this.replacePhone = function (o, n) {
            var index, found = false;

            for (index = 0; !found && index < phones.length; ++index) {
                if (phones[index].number() === o) {
                    found = true;
                    break;
                }
            }
            if (found) {
                phones[index].changeNumber(n);
                notify(this);
            }
        };

        this.setID = function (ID) {
            id = ID;
        };

        this.tags = function () {
            return tags;
        };

        var init = function (g, f, l) {
            id = 'xxxx-xxxx-xxxx-xxxx-xxxx'.replace(/x/g, function (c) {
                var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
            gender = g;
            firstName = f;
            lastName = l;
        };

        init(g, f, l);
    };

    return self;

}(Contact || {}));