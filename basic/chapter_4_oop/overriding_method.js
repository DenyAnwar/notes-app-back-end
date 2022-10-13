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

    sendMessage(msg, to) {
        super.sendMessage(msg, to);
        console.log('Send by WA');
    }
}

const wa1 = new WhatsApp('dicoding', true, '081343313103');
wa1.sendMessage('halo', '08999434231');
