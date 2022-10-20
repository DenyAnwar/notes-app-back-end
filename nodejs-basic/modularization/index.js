const Tiger = require('./Tiger'); // TODO 3
const Wolf = require('./Wolf'); // TODO 4

const fighting = (tiger, wolf) => {
    let tigerStr = tiger.strength;
    let wolfStr =  wolf.strength;
    let line = '-------------------------';

    console.log(line);
    console.log(`Tiger strength is ${tigerStr}`);
    console.log(`Wolf strength is ${wolfStr}`);
    console.log(line);

    if (tigerStr > wolfStr) {
        tiger.growl();
        return;
    };

    if (wolfStr > tigerStr) {
        wolf.howl();
        return;
    };

    if (tigerStr === wolfStr) {
        console.log('Tiger and Wolf have same strength');
    };

    console.log('system error...');
};

const tiger = new Tiger();
const wolf = new Wolf();

fighting(tiger, wolf);

