function ExampleConstructor() {

}

console.log('value of ExampleConstructor:', ExampleConstructor);
console.log('typeof ExampleConstructor:', typeof ExampleConstructor);

const new1 = new ExampleConstructor();

console.log('new1:', new1);

const check = new1 instanceof ExampleConstructor;
console.log('instance check:', check);
