console.log('Hello from Node.js');

const fs = require('fs');
const { resolve } = require('path');
fs.writeFileSync('hello.txt', 'Hello from Node.js');

// js summary
const person = {
    name: 'Max',
    age: 29,
    greet: function(){
        console.log('Hi, I am ' + this.name);
    }
};
person.greet();

console.log(person);
const copiedPerson = {...person};
console.log(copiedPerson);

const hobbies = ['Sports', 'Cooking'];
const copiedArray = hobbies.slice();
console.log(hobbies);
console.log(copiedArray);
console.log([...hobbies]);

const toArray = (...args) => {
    return args;
};
console.log(toArray(1,2,3,4,5));

// destructuring
const printName = (personData) =>{
    console.log(personData.name);
}
printName(person);

const printName_ = ({name}) => {
    console.log(name);
}
printName_(person);

const {name, age} = person;
console.log(name, age);

const [hob1, hob2] = hobbies;
console.log(hob1, hob2);

// Async Code and Promises
//1. Using callback
const fetchData = callback =>{
    setTimeout(() => {
        callback('Done!');
    }, 1500);
}

setTimeout(() => {
   console.log('Timer is done!'); 
   fetchData(text => {
       console.log(text);
   });
},1); // 100 
// Node.js or JS in general doesn't block your code execution until that its done
// function should execute in the future, should call back later when its done.  
console.log("Hello!")
console.log("Hi!");

//2. Using Promises
const fetchData_ = () =>{
    const promise = new Promise((resolve, reject ) =>{
        setTimeout(() => {
            resolve('Done!');
        }, 1500);
    });
    return promise;
};

setTimeout(() => {
    console.log('Timer is done!'); 
    fetchData_()
        .then(text =>{
            console.log(text);
            return fetchData_();
        })
        .then(text2 => {
            console.log(text2);
        });
 },1);



