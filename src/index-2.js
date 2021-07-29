"use strict";
// ранний возврат

function checkAge(age) {
  if (age >= 18) {
    // Change this line
    return "You are an adult";
  }

  return "You are a minor";
}

console.log(checkAge(8));

//2
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  // Change code below this line

  if (password === ADMIN_PASSWORD) {
    return "Welcome!";
  }
  return "Access denied, wrong password!";
  // Change code above this line
}

console.log(checkPassword("jqueryismyjam"));

//3
function checkStorage(available, ordered) {
  // Change code below this line

  if (ordered === 0) {
    return "Your order is empty!";
  }
  if (ordered > available) {
    return "Your order is too large, not enough goods in stock!";
  }

  return "The order is accepted, our manager will contact you";
  // Change code above this line
}

console.log(checkStorage(70, 0));

//4
//const fruits = ["apple", "plum", "pear", "orange"];
//console.log(fruits);

//5
//const fruits = ["apple", "plum", "pear", "orange"];

// Change code below this line
//const firstElement = fruits[0];
//const secondElement = fruits[1];
//const lastElement = fruits[fruits.length - 1];

//console.log(lastElement);

//6
//const fruits = ["apple", "plum", "pear", "orange"];

// Write your code under this line
//fruits[1] = "peach";
//fruits[3] = "banana";

//console.log(fruits);
//7
//const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line
//const fruitsArrayLength = fruits.length;
//console.log(fruitsArrayLength);

//8
//const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line
//const lastElementIndex = fruits.length - 1;
//const lastElement = fruits[lastElementIndex];
//console.log(lastElement);

//9
function getExtremeElements(array) {
  // Change code below this line
  const deletedArray = array.splice(1, array.length - 2);
  return array;
  // Change code above this line
}

console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

//9 2
function getExtremeElements(array) {
  // Change code below this line
  return [array[0], array[array.length - 1]];

  // Change code above this line
}

console.log(getExtremeElements(["Earth", "Mars", "Venus"]));

//10
function splitMessage(message, delimeter) {
  let words;
  // Change code below this line
  words = message.split(delimeter);
  // Change code above this line
  return words;
}

console.log(splitMessage("Mango hurries to the train", " "));

//11
function calculateEngravingPrice(message, pricePerWord) {
  // Change code below this line

  return message.split(" ").length * pricePerWord;

  // Change code above this line
}

console.log(calculateEngravingPrice("Web-development is creative work", 20));

//12 join
//const words = ["JavaScript", "is", "amazing"];
//console.log(words.join("")); // 'JavaScriptisamazing'
//console.log(words.join(" ")); // 'JavaScript is amazing'
//console.log(words.join("*")); // 'JavaScript*is*amazing'
function makeStringFromArray(array, delimeter) {
  let string;
  // Change code below this line
  string = array.join(delimeter);
  // Change code above this line
  return string;
}

console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));

//13 slug
function slugify(title) {
  // Change code below this line
  return title.toLowerCase().split(" ").join("-");
  // Change code above this line
}

console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

//14 slice()
const fruits = ["apple", "plum", "pear", "orange", "banana"];

// Change code below this line
const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, 4);
const lastThreeEls = fruits.slice(-3);

console.log(lastThreeEls);

//15 concat()
const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Peach", "Houston"];

const allClients = oldClients.concat(newClients); // Change this line

console.log(allClients);

//16 maxLength
function makeArray(firstArray, secondArray, maxLength) {
  // Change code below this line
  return firstArray.concat(secondArray).slice(0, maxLength);
  // Change code above this line
}

console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));

//17 for

const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1) {
  // Change this line
  console.log(i);
}

//18 сумма чисел
function calculateTotal(number) {
  // Change code below this line
  let total = 0;
  for (let i = 0; i <= number; i += 1) {
    total += i;
  }
  return total;
  // Change code above this line
}
console.log(calculateTotal(24));

//19
const frruits = ["apple", "plum", "pear", "orange"];

for (let i = 0; i < frruits.length; i += 1) {
  // Change this line
  const fruit = frruits[i]; // Change this line
  console.log(fruit);
}

//20 sum

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
  for (let i = 0; i < order.length; i += 1) {
    total += order[i];
  }
  // Change code above this line
  return total;
}

console.log(calculateTotalPrice([164, 48, 291]));

//21 choose the longest word
function findLongestWord(string) {
  // Change code below this line
  const words = string.split(" ");

  let maxWord = words[0];

  for (let i = 0; i < words.length; i += 1) {
    if (maxWord.length <= words[i].length) {
      maxWord = words[i];
    }
  }

  return maxWord;
  // Change code above this line
}

console.log(findLongestWord("May the force be with you"));

//22 push()
function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
  for (let i = min; i <= max; i += 1) {
    numbers.push(i);
  }

  // Change code above this line
  return numbers;
}

console.log(createArrayOfNumbers(29, 34));

//23  фильтрация массива чисел
function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

  for (let i = 0; i < numbers.length; i += 1) {
    const number = numbers[i];

    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;

  // Change code above this line
}

console.log(filterArray([22, 2, 3, 4, 5], 3));

//24 includes()
function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];

  return fruits.includes(fruit); // Change this line
}

console.log(checkFruit("Pear"));

//25 общие элементы
function getCommonElements(array1, array2) {
  // Change code below this line
  const commonArray = [];
  for (const element of array1) {
    if (array2.includes(element)) {
      commonArray.push(element);
    }
  }
  return commonArray;

  // Change code above this line
}

console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));

//26 for...of for (const variable of iterable) { тело цикла}
function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

  for (const item of order) {
    total += item;
  }

  // Change code above this line
  return total;
}
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

//27 фильтрация массива (for of)
function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];
  for (const number of numbers) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  }
  return filteredNumbers;
  // Change code above this line
}

//28 Оператор %
// Change code below this line
const a = 3 % 3;
const b = 4 % 3;
const c = 11 % 8;
const d = 12 % 7;
const e = 8 % 3;

//29 чётные числа
function getEvenNumbers(start, end) {
  // Change code below this line

  const evenNumbers = [];
  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }
  return evenNumbers;
  // Change code above this line
}

console.log(getEvenNumbers(8, 8));

// 30 Оператор break
const starter = 6;
const ender = 27;
let number;

for (let i = starter; i < ender; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}

console.log(number);

//31 Оператор break vs return в функции
function findNumber(start, end, divisor) {
  // Change code below this line

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      return i;
    }
  }

  // Change code above this line
}

//32 функция includes()
function includes(array, value) {
  // Change code below this line
  for (const item of array) {
    if (item === value) {
      return true;
    }
  }
  return false;
  // Change code above this line
}

console.log(
  includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")
);
