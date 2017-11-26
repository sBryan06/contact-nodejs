const {Given, Then, When} = require('cucumber');
const assert = require('assert');

let lastNamesSorted = [];

Given (/^The list is display$/, function (callback) {
    this.browser.visit("http://127.0.0.1:3000/", (err)=> {
        if (err) throw err;

        var head = this.browser.querySelectorAll('th');
        var titles = ["First name", "Last name", "Phones", "Mails", "Tags", "Actions"];
        for (var i = 0; i < titles.length; i++) {
            assert.ok(head[i].innerHTML === titles[i]);
        }

        let c = this.browser.tabs.current.Contact;
        let iterateur = c.Contacts.instance().iterator();
        let firstNames = this.browser.querySelectorAll('td#cellFirstName');
        let lastNames = this.browser.querySelectorAll('td#cellLastName');
        let indiceContact = 0;

        while(iterateur.hasNext()){
            var contactSuivant = iterateur.next();
            // assert.ok(contactSuivant.firstName(), firstNames.eq(i));
            // assert.ok(contactSuivant.lastName(), lastNames.eq(i));
            assert.ok(contactSuivant.firstName() === firstNames[indiceContact].innerHTML);
            assert.ok(contactSuivant.lastName() === lastNames[indiceContact].innerHTML);
            indiceContact++;
        }
        // ../../node_modules/cucumber/bin/cucumber.js


        callback();
    });

});

When (/^User clicks on sort button$/, function (callback) {
    this.browser.visit("http://127.0.0.1:3000/", (err)=> {
        if (err) throw err;

        let lastNames = this.browser.querySelectorAll('td#cellLastName');

        for(let i=0; i<lastNames.length; i++){
            lastNamesSorted.push(lastNames[i].innerHTML);
        }
        lastNamesSorted.sort();

        this.browser.querySelector('#button_sort').click();
        callback();
    });
});

Then (/^The contact list is sorted$/, function (callback) {
    let lastNames = this.browser.querySelectorAll('td#cellLastName');

    for(var i=0; i < lastNames.length; i++){
        assert.ok(lastNames[i].innerHTML === lastNamesSorted[i]);
    }
    callback();
});
