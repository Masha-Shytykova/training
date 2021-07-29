console.log("hello world");

function sayHi() {
  console.log("Hello, this is my first function!");
}

sayHi();
// Функция add должна уметь складывать три числа и выводить результат в консоль. Добавь функции add три параметра a, b и c, которые будут получать значения аргументов при её вызове.
// Дополни console.log() так, чтобы он логировал строку "Addition result equals <result>", где <result> это сумма переданных чисел.

function add(a, b, c) {
  console.log(`Addition result equals ${a + b + c}`);
  // Change code above this line
}

add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);

// Дополни код функции add так, чтобы она возвращала результат сложения значений трёх параметров a, b и c.

function add(a, b, c) {
  return a + b + c;
}

add(2, 5, 8); // 15

console.log(add(15, 27, 10));
console.log(add(10, 20, 30));
console.log(add(5, 10, 15));

//10 задание

function makeMessage(name, price) {
  // Change code below this line
  const message = `You picked ${name}, price per item is ${price} credits`;
  // Change code above this line
  return message;
}

console.log(makeMessage("Reactor", 8000));

//11 задание
function calculateTotalPrice(orderedQuantity, pricePerItem) {
  // Change code below this line
  const totalPrice = orderedQuantity * pricePerItem;

  // Change code above this line
  return totalPrice;
}

console.log(calculateTotalPrice(10, 20));

//12 задание
function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Change code below this line

  const message = `You ordered droids worth ${
    orderedQuantity * pricePerDroid + deliveryFee
  } credits. Delivery (${deliveryFee} credits) is included in total price.`;

  // Change code above this line
  return message;
}

console.log(makeOrderMessage(10, 70, 200));

//13 задание
function isAdult(age) {
  // Change code below this line
  const passed = age >= 18;

  // Change code above this line
  return passed;
}

console.log(isAdult(8));

//14 task

function isValidPassword(password) {
  const SAVED_PASSWORD = "jqueryismyjam";
  // Change code below this line
  const isMatch = SAVED_PASSWORD === password;

  // Change code above this line
  return isMatch;
}

console.log(isValidPassword("mangodab3st"));

//15 task
function checkAge(age) {
  let message;

  if (age >= 18) {
    // Change this line
    message = "You are an adult";
  } else {
    message = "You are a minor";
  }

  return message;
}

console.log(checkAge(8));

//16 task
function checkStorage(available, ordered) {
  let message;
  // Change code below this line
  if (ordered <= available) {
    message = "Order is processed, our manager will contact you.";
  } else {
    message = "Not enough goods in stock!";
  }
  // Change code above this line
  return message;
}

console.log(checkStorage(200, 150));

//17 task
let a = 5;
let b = 10;
let c = 15;
let d = 20;

// Change code below this line
a += 2; //= a + 2;
b -= 4; // - 4;
c *= 3; //= c * 3;
d /= 10; //= d / 10;

console.log(d);

//18 task

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line
  const totalPrice = pricePerDroid * orderedQuantity;
  if (totalPrice > customerCredits) {
    message = "Insufficient funds!";
  } else {
    message = `You ordered ${orderedQuantity} droids, you have ${
      customerCredits - totalPrice
    } credits left`;
  }
  // Change code above this line
  return message;
}

console.log(makeTransaction(2000, 8, 10000));

//19 task
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;

  if (password === null) {
    // Change this line
    message = "Canceled by user!";
  } else if (password === ADMIN_PASSWORD) {
    // Change this line
    message = "Welcome!";
  } else {
    message = "Access denied, wrong password!";
  }

  return message;
}
console.log(checkPassword(null));

//20 task

function checkStorage(available, ordered) {
  let message;
  // Change code below this line
  if (ordered === 0) {
    message = "There are no products in the order!";
  } else if (ordered > available) {
    message = "Your order is too large, there are not enough items in stock!";
  } else {
    message = "The order is accepted, our manager will contact you";
  }

  // Change code above this line
  return message;
}

console.log(checkStorage(100, 130));

//21 task (оператор и, запинается на лжи)

function isNumberInRange(start, end, number) {
  const isInRange = number >= start && number <= end; // Change this line

  return isInRange;
}
console.log(isNumberInRange(20, 50, 76));

//22 task логическое «ИЛИ» запинается на правде и возвращает то, на чём запнулось или последний операнд.
function checkIfCanAccessContent(subType) {
  const canAccessContent = subType === "pro" || subType === "vip"; // Change this line

  return canAccessContent;
}

console.log(checkIfCanAccessContent("vip"));

//23 task
function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange; // Change this line

  return isNotInRange;
}
console.log(isNumberNotInRange(10, 30, 5));

//24 task
function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Change code below this line
  if (totalSpent >= 50000) {
    discount = GOLD_DISCOUNT;
  } else if (totalSpent >= 20000 && totalSpent < 50000) {
    discount = SILVER_DISCOUNT;
  } else if (totalSpent >= 5000 && totalSpent < 20000) {
    discount = BRONZE_DISCOUNT;
  } else {
    discount = BASE_DISCOUNT;
  }
  // Change code above this line
  return discount;
}

console.log(getDiscount(1300));

//25 task тернарный оператор // <условие> ? <выражение если условие истинно> : <выражение если условие ложно>
function checkStorage(available, ordered) {
  let message;
  // Change code below this line

  message =
    ordered > available
      ? "Not enough goods in stock!"
      : "The order is accepted, our manager will contact you";

  // Change code above this line
  return message;
}
console.log(checkStorage(100, 130));

//26 task
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line
  message =
    password === ADMIN_PASSWORD
      ? "Access is allowed"
      : "Access denied, wrong password!";
  // Change code above this line
  return message;
}

console.log(checkPassword("r3actsux"));

//27 task switch s
// witch(значение) {
//  case значение:
//    инструкции;
//    break;

//  case значение:
//    инструкции;
//    break;
//}

function getSubscriptionPrice(type) {
  let price;
  // Change code below this line

  switch (
    type // Change this line
  ) {
    case "starter": // Change this line
      price = 0; // Change this line
      break;

    case "professional": // Change this line
      price = 20; // Change this line
      break;

    case "organization": // Change this line
      price = 50; // Change this line
      break;
  }

  // Change code above this line
  return price;
}
console.log(getSubscriptionPrice("professional"));

//28 task switch default
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line

  switch (password) {
    case null:
      message = "Canceled by user!";
      break;
    case ADMIN_PASSWORD:
      message = "Welcome!";
      break;

    default:
      message = "Access denied, wrong password!";
  }

  // Change code above this line
  return message;
}

console.log(checkPassword("jqueryismyjam"));

//29 task
function getShippingCost(country) {
  let message;
  // Change code below this line

  switch (country) {
    case "China":
      message = `Shipping to ${country} will cost 100 credits`;
      break;
    case "Chile":
      message = `Shipping to ${country} will cost 250 credits`;
      break;
    case "Australia":
      message = `Shipping to ${country} will cost 170 credits`;
      break;
    case "Jamaica":
      message = `Shipping to ${country} will cost 120 credits`;
      break;

    default:
      message = "Sorry, there is no delivery to your country";
  }

  // Change code above this line
  return message;
}

//30 task
function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`; // Change this line

  return message;
}
console.log(getNameLength("Harambe"));

//31 task

const courseTopic = "JavaScript essentials";
// Change code below this line

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];

// Change code above this line

console.log(lastElement);

//32 task slice

function getSubstring(string, length) {
  const substring = string.slice(0, length); // Change this line

  return substring;
}
console.log(getSubstring("Hello world", 8));

//33 task formatMessage(message, maxLength)

function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
  if (message.length <= maxLength) {
    result = message;
  } else {
    result = `${message.slice(0, maxLength)}...`;
  }

  /// Change code above this line
  return result;
}
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));

//34 task Методы toLowerCase() и toUpperCase()
function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(); // Change this line

  return normalizedInput;
}
console.log(normalizeInput("Big SALE"));

//35 task includes()
function checkForName(fullName, name) {
  const result = fullName.includes(name); // Change this line
  return result;
}
console.log(checkForName("Vadim Nekrasov", "Vadim"));

//36 task checkForSpam(message)
function checkForSpam(message) {
  let result;
  // Change code below this line
  message = message.toLowerCase();
  result = message.includes("spam") || message.includes("sale");
  // Change code above this line
  return result;
}

console.log(checkForSpam("Amazing SaLE, only tonight!"));
