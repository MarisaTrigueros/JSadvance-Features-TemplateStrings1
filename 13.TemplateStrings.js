class Person { 
    constructor(firstName, lastName) { 
        this.firstName = firstName; 
        this.lastName = lastName; 
    } 
}

const developer = new Person("Mario", "Rossi"); 

console.log(`Name: ${developer.firstName}. Lastname: ${developer.lastName}.`); 

console.log(`${developer.firstName} ${developer.lastName}`); 