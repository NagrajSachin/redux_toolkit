function callMe() {
    console.log('00-immutability - call me!');

    let a = { name: 'Abhijeet', things: [11,22,33] };
    let b = Object.assign({}, a, { name: 'Ashisgh' }); // returns brand new object

    // console.log(a);
    // console.log(b);

    b.things = a.things.filter(v => v !== 22); // returns brand new object

    // console.log(a);
    // console.log(b);

    b.name = a.name.concat('Gole'); // returns brand new object

    console.log(a);
    console.log(b);

    // immutability can bring increased performance to your app, and leads to simple programming and
    // debugging, as data that never changes is easier than to reason about that data is free to be changed arbitrarily throughout your app.

    // Crrying Function - Currying is technique of evaluating a function with multiple arguments to a sequence of function with a single argument.

    function add(x, y) {
        return x + y;
    }

    console.log('Addition with normal function ', add(4,5));

    // Currying Function
    function sum(x) {
        return function (y) {
            return x + y;
        }
    }

    console.log('Addtion with currying function ', sum(4)(5));

    // Normal Function
    function greetings1(message, name) {
        return message + ' ' + name;
    }

    console.log(greetings1('Good Morning', 'Sachin'));
    console.log(greetings1('Good Morning', 'Rahul'));
    console.log(greetings1('Good Morning', 'Sourav'));

    // Currying Function
    function greetings2(message) {
        return function(name) {
            return message + ' ' + name;
        }
    }

    const mGreet = greetings2('Good Morning');
    console.log(mGreet('Sachin'));
    console.log(mGreet('Rahul'));
    console.log(mGreet('Sourav'));
}

export default callMe;