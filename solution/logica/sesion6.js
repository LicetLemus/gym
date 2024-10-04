function greet(name = 'World') {
    return 'hello' + name;
}
console.log(greet());

function add(a, b) {
    console.log(a, b);
}

add(1, 2, 3, 4, 5);

function add1(...args) {
    console.log(args);
}

add1(1, 2, 3, 4, 5);

function process(x, y, ...rest) {
    console.log(x, y, rest);
}

process(1, 2, 3, 4, 5);

function doStuff(a, b, c ) { return [a, b, c];  }
const args = [0, 1, 2];
console.log(doStuff(...args));