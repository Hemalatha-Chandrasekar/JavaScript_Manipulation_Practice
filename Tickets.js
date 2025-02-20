// Task 1: Add a new employee to the end of the array
let employees = ['John', 'Sarah', 'Eric'];
employees.push('Alice');  // Adds Alice to the end of the array
console.log(employees);   // ['John', 'Sarah', 'Eric', 'Alice']


// Task 2: Remove the first employee from the array
employees.pop();  // Removes 'Eric' from the array
console.log(employees);   // ['John', 'Sarah']

// Task 3: Add a new employee to the beginning of the array
employees.unshift('Bob');  // Adds Bob to the beginning of the array
console.log(employees);    // ['Bob', 'John', 'Sarah', 'Eric']

//Task 4: Remove the first employee from the array
employees.shift();  // Removes 'Bob' from the array
console.log(employees);   // ['Sarah', 'Eric']

//Task 5: Find the index of 'Sarah' in the array
let index = employees.indexOf("Sarah");  // Finds the index of 'Sarah'
console.log(index);  // 1
