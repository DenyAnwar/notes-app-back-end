const { inspect } = require('util');

let visitsCountMap = new WeakMap(); // menyimpan daftar user

function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1);
}

let jonas = { name: "Jonas" };
countUser(jonas); // menambahkan user "Jonas"

let jones = { name: "Jones" };
countUser(jones);

// jonas = null; // data object "Jonas" dihapus

// delat dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function() {
    console.log(inspect(visitsCountMap, { showHidden: true}));
}, 10000)

