function init() {
    var name = 'Deny Anwar'; // variabel lokal di dalam scope fungsi init

    function greet() { // Inner function, merupakan contoh closure
        console.log(`Halo, ${name}`); // Memanggil variabel yang dideklarasikan di parent function
    }

    // greet();
    return greet;
}

// init();
let myFunction = init();
myFunction();