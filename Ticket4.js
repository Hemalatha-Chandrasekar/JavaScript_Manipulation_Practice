//Create an object that represents an employee with properties: firstName, lastName, position, and salary.
//Hint: Use curly braces {} to create an object with key-value pairs.

let employee = {
    firstName: 'John',
    lastName: 'Doe',
    position: 'Manager',
    salary: 80000
};
console.log(employee);  // { firstName: 'John', lastName: 'Doe', position: 'Manager', salary: 80000 }

//2. Update the position of the employee object.
//Hint: Use dot notation to update the object's properties.
let employee1 = {
    firstName: 'John',
    lastName: 'Doe',
    position: 'Software Engineer',
    salary: 80000
};
console.log(employee1);  // { firstName: 'John', lastName: 'Doe', position: 'Software Engineer', salary: 80000 }

//3.Add a new property hireDate to the employee object.
//Hint: Use dot notation to add new properties to the object.

let employee2= {
    firstName: 'John',
    lastName: 'Doe',
    position: 'Software Engineer',
    salary: 80000
};
employee2.hireDate = '2021-01-15';
console.log(employee2);  // { firstName: 'John', lastName: 'Doe', position: 'Software Engineer', salary: 80000, hireDate: '2021-01-15' }

//4.Delete the salary property from the employee object.
//Hint: Use the delete operator to remove a property from an object.

let employee4 = {
    firstName: 'John',
    lastName: 'Doe',
    position: 'Software Engineer',
    salary: 80000
};
delete employee4.salary;
console.log(employee4);  // { firstName: 'John', lastName: 'Doe', position: 'Software Engineer' }   

//5.Loop through the properties of the employee object and log each key-value pair to the console.
//Hint: Use a for...in loop to iterate over the object's properties.
let employee5= {
    firstName: 'John',
    lastName: 'Doe',
    position: 'Software Engineer',
    salary: 80000
};
for (let key in employee5) {
    console.log(`${key}: ${employee5[key]}`);
}

