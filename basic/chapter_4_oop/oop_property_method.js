// cara 1
class Mail {
    constructor() {
        this.from = 'pengirim@dicoding.com';
        this.contacts = [];
        this.yourOtherProperty = 'the values';
    }

    sendMessage(msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
        this.contacts.push(to); // menyimpan kontak baru di array
    }
}

// cara 2
function Mail2() {
    this.from = 'pengirim@dicoding.com';
    this.contacts = [];
    this.yourOtherProperty = 'the values';
};

Mail2.prototype.sendMessage = function (msg,to) {
    console.log(`you send: ${msg} to ${to} from ${this.from}`);
    this.contacts.push(to); // menyimpan kontak baru di array
}