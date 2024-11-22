
// //____________________Array.prototype.map()_________________//

// const array1 = ['vanilla', 'chocolate', 'strawberry'];

// const array2 = array1.map((currentElement) => {
//   return currentElement + ' ice cream';
// });

// console.log(array2); // ['vanilla ice cream', 'chocolate ice cream', 'strawberry ice cream']

// //-________________Exercise 1: Applying Array.prototype.map()__________-//

// // Use `.map()` to iterate over the following array:

// const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// // Create a new array where each value is multiplied by 2 and log the new array.

// // Your code here

// const doubledNums = nums.map((n) => {
//     return n =  n*2;
// });

// console.log(doubledNums);

// //____________________________Review: Array destructuring__________________________//

// const petsArray = ['Rover', 'Snuffles', 'Toto', 'Spot'];

// const [firstPet, secondPet] = petsArray;

// console.log(firstPet); // 'Rover'
// console.log(secondPet); // 'Snuffles'

// // Equivalent in traditional bracket notation:
// console.log(petsArray[0]); // 'Rover'
// console.log(petsArray[1]); // 'Snuffles'

// //_____________Exercise 2: Array destructuring________________________//

// // Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

// const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// // Your code here

// const [firstTop, secondTop] = pizzaToppings;

// console.log(firstTop);
// console.log(secondTop);
// console.log(pizzaToppings[0]);
// console.log(pizzaToppings[1]);

// //___________Review: Object destructuring______________________//

// const person = {
//     name: 'Alex',
//     role: 'Software Engineer',
//   };
  
//   // Object destructuring:
//   const { name, role } = person;
  
//   console.log(name); // 'Alex'
//   console.log(role); // 'Software Engineer'
  
//   // Equivalent in traditional dot notation:
//   console.log(person.name); // 'Alex'
//   console.log(person.role); // 'Software Engineer'

//   // Select elements in the DOM
// const nameElement = document.getElementById('person-name');
// const roleElement = document.getElementById('person-role');

// // Update the content
// nameElement.textContent = `Name: ${name}`;
// roleElement.textContent = `Role: ${role}`;

// //_______________Exercise 3: Destructuring objects__________//

// // Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

// const car = {
//     make: 'Audi',
//     model: 'q5',
//   };
  
//   // Your code here

//   const {make, model} = car;

//   console.log(make);
//   console.log(model);

//   console.log(car.make);
//   console.log(car.model);


// const makeElement = document.getElementById('car-make');
// const modelElement = document.getElementById('car-model');

// makeElement.textContent = `Brand: ${make}`;
// modelElement.textContent = `Series: ${model}`;


// //__________________Review: Applying the spread operator on arrays______//

// const originalArray = [1, 2, 3];
// const duplicateArray = [...originalArray];

// console.log(duplicateArray); // [1, 2, 3]

// const referenceArray = originalArray; // referenceArray is now a reference to originalArray

// referenceArray.push(4); // Modifying referenceArray also modifies originalArray
// console.log(originalArray); // [1, 2, 3, 4]

// const fruits = ['apple', 'orange', 'banana'];
// const vegetables = ['broccoli', 'carrot', 'spinach'];

// const fruitsAndVegetables = [...fruits, ...vegetables];

// console.log(fruitsAndVegetables); // ['apple', 'orange', 'banana', 'broccoli', 'carrot', 'spinach']

// //_______________Exercise 4: Applying the spread operator on arrays__________//

// // Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.


// // Your code here

// const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// const controversialPizzaToppings = [...pizzaToppings]

// console.log(controversialPizzaToppings);

//________________________Applying the spread operator on objects______________________//

const originalObject = {
    foo: 'Hello',
    bar: 100,
  };
  
  const clonedObject = { ...originalObject };
//   console.log('Clone: ', clonedObject); // { foo: 'Hello', bar: 100 }

// const clonedObject = originalObject;
// clonedObject.foo = 'Goodbye';

// console.log(originalObject); // { foo: 'Goodbye', bar: 100 }

// Update the properties of clonedObject:
// clonedObject.foo = 'Goodbye';
// clonedObject.bar = 0;

// console.log('Original: ', originalObject); // { foo: 'Hello', bar: 100 }
// console.log('Clone: ', clonedObject); // { foo: 'Goodbye', bar: 0 }

// //____________Exercise 5: Applying the spread operator on objects_______________________________//

// // Duplicate the following object and spread its values into a new variable `myCar`.

// const car = {
//     make: 'Audi',
//     model: 'q5',
//   };
  
//   // Change the `model` property of `myCar` to 'q7'. Log both objects.
  
//   // Your code here

//   const myCar = {...car};

//   myCar.model = "q7";

//   console.log("original:", car);
//   console.log("dublicate:", myCar);

//________________________Dynamic keys in objects____________________________//

  const fruitInventory = {
    apples: 2,
    oranges: 4,
  };
  
  const selectedFruit = "apples"; // Variable as a dynamic key
  const selectedFruitCount = fruitInventory[selectedFruit];
  
  console.log(selectedFruitCount); // 2

  
  

  
  
  