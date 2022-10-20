class Wolf {
    constructor() {
        this.strength = Math.floor(Math.random() * 100);
    };

    howl() {
        console.log('WOLF WIN!');
        console.log('owooooooo!');
    };
};

// TODO 2
module.exports = Wolf;