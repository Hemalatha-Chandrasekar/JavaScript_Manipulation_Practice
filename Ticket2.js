//Task 1: Filter out salaries below $50,000

let salaries = [35000, 45000, 55000, 70000, 90000];

let belowSalaries = salaries.filter((salary)=> salary<50000);

console.log(belowSalaries);  // [55000, 70000, 90000]

let employees = [20000, 30000, 40000, 50000, 60000];

let salariesSquared = employees.map((salary) => salary * salary);
console.log(salariesSquared);  // [400000000, 900000000, 1600000000, 2500000000, 3600000000]


let salaries3= [45000, 55000, 70000, 90000];
let findSalaries = salaries3.find((salary) => salary > 60000);
console.log(findSalaries);  // 70000

let sales=[100, 200, 300, 400, 500];
let totalSales = sales.reduce((total, sale) => total + sale);
console.log(totalSales);  // 1500

let departments = ['HR', 'Finance', 'Engineering', 'Marketing'];
// let foreachdepartment = departments.forEach(department);
//  console.log(foreachdepartment);// HR, Finance, Engineering, Marketing
let foreachdepartment = departments.forEach((x) => console.log(x));