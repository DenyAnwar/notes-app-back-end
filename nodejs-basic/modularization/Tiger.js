class Tiger {
    constructor() {
        this.strength = Math.floor(Math.random() * 100);
    };

    growl() {
        console.log('TIGER WIN!');
        console.log('grrrrr!');
    };
};

// TODO 1
module.exports = Tiger;