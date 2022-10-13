class Mail {
    constructor(author) {
        this.from = author;
        this._contacts = [];
    }

    sendMessage(msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
        this._contacts.push(to);
    }

    showAllContacts() {
        return this._contacts;
    }
}

class WhatsApp extends Mail {
    constructor(username, isBusinessAccount, phoneNumber) {
        super(phoneNumber); // add phoneNUmber
        this.username = username;
        this.isBusinessAccount = isBusinessAccount;
    }
}

const wa1 = new WhatsApp('dicoding', true, '081343313103');
console.log(wa1.from);
console.log(wa1);
