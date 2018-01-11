const person = {
    name: 'Jayden',
    age: 30,
    location: {
        city: 'Auckland',
        temp: 23
    }
};

// const name = person.name;
// const age = person.age;

// ES6 Object destructuring expression
const {name, age} = person;
console.log(`${name} is ${age}`);


/* Simplify the code using ES6 */

// if (person.location.city && person.location.temp) {
//     console.log(`It's ${person.location.temp} in ${person.location.city}`)
// }

const { city, temp } = person.location;
if (city && temp) {
    console.log(`It's ${temp} in ${city}`)
}

// rename the props in the object
// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`)
// }

// sets default value
// const { city = 'Anonymous', temp } = person.location;
// if (city && temp) {
//     console.log(`It's ${temp} in ${city}`)
// }


//
//  Array destructuring
//

const address = ['1299 S Juniper Street', 'Auckland', 'Auckland', '1234'];

// match the position
const [street, cities, state, zip] = address;

//const [, cities, state] = address;

console.log(`You are in ${cities} ${state}.`);