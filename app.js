
// //____________________Array.prototype.map()_________________//

const array1 = ['vanilla', 'chocolate', 'strawberry'];
const array2 = array1.map((currentElement) => {
  return currentElement + ' ice cream';
});

console.log(array2); // ['vanilla ice cream', 'chocolate ice cream', 'strawberry ice cream']

const array2Element = document.getElementById('array2');
array2Element.textContent = `Array2: ${array2}`;


// //-________________Exercise 1: Applying Array.prototype.map()__________-//

// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here

const doubledNums = nums.map((n) => {
    return n =  n*2;
});

console.log(doubledNums);

const doubledNumsElement = document.getElementById('doubledNums');
doubledNumsElement.textContent = `Dubled No: ${doubledNums}`;


// //____________________________Review: Array destructuring__________________________//

const petsArray = ['Rover', 'Snuffles', 'Toto', 'Spot'];

const [firstPet, secondPet] = petsArray;

console.log(firstPet); // 'Rover'
console.log(secondPet); // 'Snuffles'

// Equivalent in traditional bracket notation:
console.log(petsArray[0]); // 'Rover'
console.log(petsArray[1]); // 'Snuffles'

const firstPetElement = document.getElementById('firstPet');
const secondPetElement = document.getElementById('secondPet');
const petsArray0Element = document.getElementById('petsArray[0]');
const petsArray1Element = document.getElementById('petsArray[1]');

firstPetElement.textContent = `First Pet: ${firstPet}`;
secondPetElement.textContent = `Second Pet: ${secondPet}`;
petsArray0Element.textContent = `Arra 1 choise: ${petsArray[0]}`;
petsArray1Element.textContent = `Array 2 choise: ${petsArray[1]}`;

// //_____________Exercise 2: Array destructuring________________________//

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];
const [firstTop, secondTop] = pizzaToppings;

// Your code here


console.log(firstTop);
console.log(secondTop);
console.log(pizzaToppings[0]);
console.log(pizzaToppings[1]);

const firstTopElement = document.getElementById('firstTop');
const secondTopElement = document.getElementById('secondTop');
const pizzaToppings0Element = document.getElementById('pizzaToppings[0]');
const pizzaToppings1Element = document.getElementById('pizzaToppings[1]');

firstTopElement.textContent = `1st Top: ${firstTop}`;
secondTopElement.textContent = `2nd Top: ${secondTop}`;
pizzaToppings0Element.textContent = `Pizza topings 1st choice: ${pizzaToppings[0]}`;
pizzaToppings1Element.textContent = `Pizza topings 2nd choice: ${pizzaToppings[1]}`;



// //___________Review: Object destructuring______________________//

const person = {
    name: 'Alex',
    role: 'Software Engineer',
  };
  
  // Object destructuring:
  const { name, role } = person;
  
  console.log(name); // 'Alex'
  console.log(role); // 'Software Engineer'
  
  // Equivalent in traditional dot notation:
  console.log(person.name); // 'Alex'
  console.log(person.role); // 'Software Engineer'

  // Select elements in the DOM
const nameElement = document.getElementById('person-name');
const roleElement = document.getElementById('person-role');

// Update the content
nameElement.textContent = `Name: ${name}`;
roleElement.textContent = `Role: ${role}`;

// //_______________Exercise 3: Destructuring objects__________//

// // Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
    make: 'Audi',
    model: 'q5',
  };
  
  // Your code here

  const {make, model} = car;

  console.log(make);
  console.log(model);

  console.log(car.make);
  console.log(car.model);


const makeElement = document.getElementById('car-make');
const modelElement = document.getElementById('car-model');

makeElement.textContent = `Brand: ${make}`;
modelElement.textContent = `Series: ${model}`;


// //__________________Review: Applying the spread operator on arrays______//

const originalArray = [1, 2, 3];
const duplicateArray = [...originalArray];
const referenceArray = originalArray; // referenceArray is now a reference to originalArray
const fruits = ['apple', 'orange', 'banana'];
const vegetables = ['broccoli', 'carrot', 'spinach'];
const fruitsAndVegetables = [...fruits, ...vegetables];

referenceArray.push(4); // Modifying referenceArray also modifies originalArray


console.log(originalArray); // [1, 2, 3, 4]
console.log(duplicateArray); // [1, 2, 3]
console.log(fruitsAndVegetables); // ['apple', 'orange', 'banana', 'broccoli', 'carrot', 'spinach']
console.log(referenceArray);

const duplicateElement = document.getElementById('duplicateArray');
const originalElement = document.getElementById('originalArray');
const groceriesElement = document.getElementById('fruitsAndVegetables');
const referenceElement = document.getElementById('referenceArray');

duplicateElement.textContent = `Dublicated: ${duplicateArray}`;
originalElement.textContent = `Original: ${originalArray}`;
groceriesElement.textContent = `Pantry: ${fruitsAndVegetables}`;
referenceElement.textContent = `Referenced: ${referenceArray}`;
// //_______________Exercise 4: Applying the spread operator on arrays__________//

// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.


// Your code here

const pizzaToppingsNew = ['Pineapple', 'Olives', 'Anchovies'];
const controversialPizzaToppings = [...pizzaToppingsNew]

console.log(controversialPizzaToppings);

const controversialPizzaToppingsElement = document.getElementById('controversialPizzaToppings');
controversialPizzaToppingsElement.textContent = `Fuzz Pizza: ${controversialPizzaToppings}`;


//________________________Applying the spread operator on objects______________________//

const originalObject = {
    foo: 'Hello',
    bar: 100,
  };
  
const clonedObject = { ...originalObject };
console.log('Clone: ', clonedObject); // { foo: 'Hello', bar: 100 }

const clonedObjectElement = document.getElementById('clonedObject');
clonedObjectElement.textContent = `Properly Cloned Object: ${JSON.stringify(clonedObject)}`;

const clonedObjectPitFall = originalObject;
clonedObjectPitFall.foo = 'Goodbye';

console.log(originalObject); // { foo: 'Goodbye', bar: 100 }

const originalObjectElement = document.getElementById('originalObject');
originalObjectElement.textContent = `Altered Original object: ${JSON.stringify(originalObject)}`;

// // Update the properties of clonedObject:
const clonedObject1 = { ...originalObject };
clonedObject1.foo = 'Goodbye';
clonedObject1.bar = 0;

console.log('Original: ', originalObject); // { foo: 'Hello', bar: 100 }
console.log('Clone1: ', clonedObject1); // { foo: 'Goodbye', bar: 0 }

// const newOriginalObjectElement = document.getElementById('originalObject');
const clonedObject1Element = document.getElementById('clonedObject1');

// newOriginalObjectElement.textContent = `Original un-Altered: ${JSON.stringify(originalObject)}`;
clonedObject1Element.textContent = `Cloned only altered: ${JSON.stringify(clonedObject1)}`;


//____________Exercise 5: Applying the spread operator on objects_______________________________//

// Duplicate the following object and spread its values into a new variable `myCar`.

const newCar = {
    newMake: 'Audi',
    newModel: 'q5',
  };
  
  // Change the `model` property of `myCar` to 'q7'. Log both objects.
  
  // Your code here

  const myNewCar = {...newCar};

  myNewCar.newModel = "q7";

  console.log("original:", newCar);
  console.log("dublicate:", myNewCar);


const newCarElement = document.getElementById('newCar');
const myNewCarElement = document.getElementById('myNewCar');

newCarElement.textContent = `Original: ${JSON.stringify(newCar)}`;
myNewCarElement.textContent = `Valid Dublication: ${JSON.stringify(myNewCar)}`;


//________________________Dynamic keys in objects____________________________//
  const fruitType = 'bananas'; // Variable as a dynamic key

  const fruitInventory = {
    apples: 2,
    oranges: 4,
    [fruitType]: 5,
  };
  
  const selectedFruit = "apples"; // Variable as a dynamic key
  const selectedFruitCount = fruitInventory[selectedFruit];
  
  console.log(selectedFruitCount); // 2
  console.log(fruitInventory); // { bananas: 5 }

  
const selectedFruitCountElement = document.getElementById('selectedFruitCount');
const fruitInventoryElement = document.getElementById('fruitInventory');

selectedFruitCountElement.textContent = `Fruit: ${selectedFruitCount}`;
fruitInventoryElement.textContent = `Inventory: ${(JSON.stringifyfruitInventory)}`;


  //_____________Exercise 6: Dynamic keys in objects______________//

// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here


  const userProfile = 'userName';

 const  propertyName = {
    [userProfile]: 'Nikos',
 }

 console.log(propertyName);

const propertyNameElement = document.getElementById('propertyName');

propertyNameElement.textContent = `: ${JSON.stringify(propertyName)}`;


 //______________________Review: import and export_____________________________//

//_________________Exercise 7: Import and Export______________________//

//_______________Review: Default parameters_________________________//

function addThreeNumbers(numA, numB, numC) {
  return numA + numB + numC;
}

function addThreeNumbers(numA, numB = 2, numC = 1) {
  return numA + numB + numC;
}

function addThreeNumbers(numA = 1, numB = 2, numC = 1) {
  return numA + numB + numC;
}

console.log(addThreeNumbers(2));


const addThreeNumbers2Element = document.getElementById('addThreeNumbers(2)');

addThreeNumbers2Element.textContent = `Sum: ${addThreeNumbers(2)}`;


//______________Exercise 8: Default parameters________________//


// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here

function pet (noun = 'cat', adjective ='white') {
  return `The ${noun} is ${adjective}`;
};

console.log(pet());


const petElement = document.getElementById('pet');

petElement.textContent = ` ${pet()}`;


//__________Review: The ternary operator_____________________//

const age = 22;
let access = age > 21 ? 'Yes' : 'No';

console.log(access); // 'Yes'

const accessElement = document.getElementById('access');
accessElement.textContent = `Access?: ${access}`;


//______________exercise 9: Ternary operator_____//
// Convert the following `if...else` statement in to a ternary:

let pizza = 'tasty';

if (pizza === 'tasty') {
  console.log('yum');
} else {
  console.log('yuck');
}

// Your code here

let outCome = pizza === 'tasty' ? 'Yes' : 'No'

console.log(outCome);

const outComeElement = document.getElementById('outCome');

outComeElement.textContent = `to taste or not to taste?: ${outCome}`;


//________________Review: Boolean gates__________//

const result1 = false && 'foo';
const result2 = 'hello' && '';
const result3 = 'foo' && 'bar';
const result4 = '' || 'foo';
const result5 = 2 || 0;
const result6 = '' || 0;
const result7 = 0 || '';
const result8 = 'bar' && 'foo';
const result9 = false || 243;
const result10 = 42 && false;
// const result11 = myVar || 3000;

console.log(result1); // Output: false
console.log(result2); // Output: ''
console.log(result3); // Output: 'bar'
console.log(result4); // Output: 'foo'
console.log(result5); // Output: 2
console.log(result6); // Output: 0
console.log(result7); // Output: 0
console.log('result8:', result8);
console.log('result9:', result9);
console.log('result10:', result10);
// console.log('result11:', result11);


const result1Element = document.getElementById('result1');
const result2Element = document.getElementById('result2');
const result3Element = document.getElementById('result3');
const result4Element = document.getElementById('result4');
const result5Element = document.getElementById('result5');
const result6Element = document.getElementById('result6');
const result7Element = document.getElementById('result7');
const result8Element = document.getElementById('result8');
const result9Element = document.getElementById('result9');
const result10Element = document.getElementById('result10');

result1Element.textContent = `Result: ${result1}`;
result2Element.textContent = `Result: ${result2}`;
result3Element.textContent = `Result: ${result3}`;
result4Element.textContent = `Result: ${result4}`;
result5Element.textContent = `Result: ${result5}`;
result6Element.textContent = `Result: ${result6}`;
result7Element.textContent = `Result: ${result7}`;
result8Element.textContent = `Result: ${result8}`;
result9Element.textContent = `Result: ${result9}`;
result10Element.textContent = `Result: ${result10}`;

//______________________Exercise 10: Boolean gates_________//

// 1. SET LANGUAGE

// Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement: 

// "LANG is equal to localLangConfig or the default value of English."

const localLangConfig = null;  // Change to 'es', 'fr', etc., or keep it null

// a. Create a variable called LANG
// b. Assign LANG the value of localLangConfig or 'en' as a default

// Your code here

// Log the result

const LANG = localLangConfig || 'En';

console.log('Language setting:', LANG);

// // 2. SET WEBSITE THEME

const userSavedTheme = null; // Change to 'dark', 'contrast', etc., or keep it null

// // a. Create a variable called USER_THEME
// // b. Assign USER_THEME the value of userSavedTheme or 'light' as a default

// // Your code here

const USER_THEME = userSavedTheme || 'Light'

// Log the result
console.log('User theme setting:', USER_THEME);


const LANGElement = document.getElementById('LANG');
const USER_THEMEElement = document.getElementById('USER_THEME');

LANGElement.textContent = `Language: ${LANG}`;
USER_THEMEElement.textContent = `User theme setting:: ${USER_THEME}`;

//______Review: Optional chaining________//

const adventurerReview = {
  name: 'Alice',
};

let dog = adventurerReview.dog?.name;

console.log(adventurerReview.dog?.name); // TypeError: Cannot read properties of undefined (reading 'name')

console.log(dog); // undefined

const adventurerReviewdognameElement = document.getElementById('adventurerReview.dog?.name');
const dogElement = document.getElementById('dog');

adventurerReviewdognameElement.textContent = `Un-Breakable , just: ${adventurerReview.dog?.name}`;
dogElement.textContent = `Un-Breakable , just: ${dog}`;

//_____________Exercise 11: Optional chaining__________//

// Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.

const adventurer = {
  name: 'Alice',
};

let cat = adventurer.cat?.name; // Your code here

console.log(cat);


const adventurercatnameElement = document.getElementById('adventurer.cat?.name;');
const catElement = document.getElementById('cat');

adventurercatnameElement.textContent = `Un-Breakable , just: ${adventurer.cat?.name}`;
catElement.textContent = `Un-Breakable , just: ${cat}`;

//____________The End_____________________//












  

  
  
  