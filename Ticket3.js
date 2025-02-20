//1.Create a new array that contains the first three items from the original inventory list.let inventory = ['Laptop', 'Phone', 'Keyboard', 'Monitor', 'Mouse'];
//Hint: Use the slice() method to extract a portion of the array.
let inventory = ['Laptop', 'Phone', 'Keyboard', 'Monitor', 'Mouse'];
let newInventory = inventory.slice(0, 3);
console.log(newInventory);  // ['Laptop', 'Phone', 'Keyboard

//2.Remove two items starting from index 2 in the inventory.
inventory.splice(2, 2);
console.log(inventory);  // ['Laptop', 'Phone', 'Mouse']    // 'Keyboard' and 'Monitor' are removed


//3.Add new equipment to the inventory starting at index 3.
//Hint: Use the splice() method to add elements at a specific index.

let inventory1= ['Laptop', 'Phone', 'Keyboard', 'Monitor'];
inventory1.splice(3, 0, 'Tablet', 'Printer');
console.log(inventory1);  // ['Laptop', 'Phone', 'Keyboard', 'Tablet', 'Printer', 'Monitor']

//4.Merge two arrays of office equipment into one.
//Hint: Use the concat() method to merge two arrays.

let officeEquipment1 = ['Printer', 'Scanner', 'Desk'];
let officeEquipment2 = ['Chair', 'Lamp', 'Notebook'];
let mergedEquipment = officeEquipment1.concat(officeEquipment2);
console.log(mergedEquipment);  // ['Printer', 'Scanner', 'Desk', 'Chair', 'Lamp', 'Notebook']

//5.Sort the list of sales amounts in descending order.
//Hint: Use the sort() method to sort the array.
let sales = [500, 1000, 750, 2000, 1250];
sales.sort((a, b) => b - a);
console.log(sales);  // [2000, 1250, 1000, 750, 500]
