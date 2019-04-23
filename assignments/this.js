/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window binding is when 'this' points to the global context.
 * 2. Implicit binding, is when utilizing 'this' by invoking a function with dot notation, where 'this' is used in
 * the context of the obj to the left of the dot at call time.
 * 3. New binding, we can use the new keyword to bind 'this' to objects that are created through a constructor function.
 * 4. Explicit binding, is when you define the context you want 'this' to refer to by using .call() .apply() or .bind()
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
function greet(greeting) {
  console.log(greeting);
  console.log(this);

  return greeting;
}

greet('Hello');

// Principle 2

// code example for Implicit Binding
const me = {
  name: 'Tyler',
  sayHello: function() {
    console.log(`Hello my name is ${this.name}`);
    console.log(this);
  },
  son: {
    name: 'Sebastian',
    age: 2,
    sayHello: function() {
      console.log(`Hello my name is ${this.name}`);
      console.log(this);
    }
  }
};

me.sayHello();
me.son.sayHello();

// Principle 3

// code example for New Binding
const Person = function(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
};

const tyler = new Person('Tyler', 29, 'Avon');
console.log(tyler);

// Principle 4

// code example for Explicit Binding
const name = function() {
  console.log('My name is ' + this.name);
};

const wife = {
  name: 'Sara',
  age: 24
};

name.call(wife);
