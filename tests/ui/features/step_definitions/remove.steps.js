const {Given, Then, When} = require('cucumber');
const assert = require('assert');

let ligne;
let newLigne;
let contact;

Given (/^The contact list is display$/, function (callback) {
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


When (/^User clicks on remove button of the first contact$/, function (callback) {

    let c = this.browser.tabs.current.Contact;
    var iterateur = c.Contacts.instance().iterator();
    contact = iterateur.next();
    // var ligne = $('tr').eq(1).children('td');
    ligne = this.browser.querySelectorAll('tr')[1].querySelectorAll('td');
    this.browser.querySelectorAll('tr')[1].querySelectorAll('td')[5].querySelector('a').click();
    // $('div#contacts tr:nth-child(2) td:nth-child(6) a').click();
    // var newLigne = $('tr').eq(1).children('td');
    newLigne = this.browser.querySelectorAll('tr')[1].querySelectorAll('td');

    // on verifie que la premiere ligne est différente de celle supprimer
    for(var i=0; i < ligne.length; i++){
        assert.ok(ligne[i] != newLigne[i]);
    }

    assert.ok(contact.firstName() != newLigne[0]);
    assert.ok(contact.lastName() != newLigne[1]);

    callback();
});

Then (/^The first contact is removed$/, function (callback) {
    // on verifie que la premiere ligne est différente de celle supprimer
    for(var i=0; i < ligne.length; i++){
        assert.ok(ligne[i] != newLigne[i]);
    }

    assert.ok(contact.firstName() != newLigne[0]);
    assert.ok(contact.lastName() != newLigne[1]);
    callback();
});
