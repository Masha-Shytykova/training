"use strict";

// ============== 1 forEach(callback)
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Пиши код ниже этой строки

  //   for (let i = 0; i < orderedItems.length; i += 1) {
  //     totalPrice += orderedItems[i];
  //   }

  orderedItems.forEach((item) => {
    totalPrice += item;
  });
  // Пиши код выше этой строки
  return totalPrice;
}
console.log(calculateTotalPrice([164, 48, 291]));

// ============== 2 Фильтрация массива чисел
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Пиши код ниже этой строки

//   //   for (let i = 0; i < numbers.length; i += 1) {
//   //     if (numbers[i] > value) {
//   //       filteredNumbers.push(numbers[i]);
//   //     }
//   //   }

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Пиши код выше этой строки
//   return filteredNumbers;
// }
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// ============== 3 Общие элементы
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Пиши код ниже этой строки

//   //   for (let i = 0; i < firstArray.length; i += 1) {
//   //     if (secondArray.includes(firstArray[i])) {
//   //       commonElements.push(firstArray[i]);
//   //     }
//   //   }

//   // не внимательно прочитала условие и выбрала уникальные элементы
//   //   firstArray.concat(secondArray).forEach((item) => {
//   //     if (!commonElements.includes(item)) {
//   //       commonElements.push(item);
//   //     }
//   //   });

//   firstArray.forEach((item) => {
//     if (secondArray.includes(item)) {
//       commonElements.push(item);
//     }
//   });
//   return commonElements;
//   // Пиши код выше этой строки
// }

// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

// ======================= 4 Стрелочные функции.
// Пиши код ниже этой строки

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Пиши код выше этой строки
//   return quantity * pricePerItem;
// };

// ======================== 5 Неявный возврат
// Пиши код ниже этой строки
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// //

// ======================= 6 Стрелочные функции как коллбеки
// Пиши код ниже этой строки
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => (totalPrice += item));

//   return totalPrice;
// };
// Пиши код выше этой строки

// ===================== 7 Фильтрация массива чисел 2.0
// Пиши код ниже этой строки
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Пиши код выше этой строки
//   return filteredNumbers;
// };

// // ===================== 8 Общие элементы 2.0
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Пиши код выше этой строки
//   return commonElements;
// };

// ======================== 9 Чистые функции
function changeEven(numbers, value) {
  // Пиши код ниже этой строки

  //   for (let i = 0; i < numbers.length; i += 1) {
  //     if (numbers[i] % 2 === 0) {
  //       numbers[i] = numbers[i] + value;
  //     }
  //     return numbers;
  //   }

  //   const newArray = [...numbers];

  //   for (let i = 0; i < newArray.length; i += 1) {
  //     if (newArray[i] % 2 === 0) {
  //       newArray[i] = newArray[i] + value;
  //     }
  //     return newArray;
  //   }

  const newArray = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      newArray.push(numbers[i] + value);
    } else if (numbers[i] % 2 !== 0) {
      newArray.push(numbers[i]);
    }
  }
  return newArray;
  // Пиши код выше этой строки
}

console.log(changeEven([44, 13, 81, 92, 36, 54], 100));

// ================== 10 Метод map()
const planets = ["Земля", "Марс", "Венера", "Юпитер"];
// Пиши код ниже этой строки
const planetsLengths = planets.map((planet) => planet.length);

console.log(planetsLengths);

// ================= 11 map() и массив объектов
// const books = [
//   { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
//   { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
//   { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
//   { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
//   { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
// ];
// // Пиши код ниже этой строки

// const titles = books.map((book) => book.title);

// console.log(titles);

// ==================== 12 flatMap()
// const books = [
//   {
//     title: "Последнее королевство",
//     author: "Бернард Корнуэлл",
//     genres: ["приключения", "историческое"],
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     genres: ["фантастика"],
//   },
//   {
//     title: "Красна как кровь",
//     author: "Ли Танит",
//     genres: ["ужасы", "мистика"],
//   },
// ];
// // Пиши код ниже этой строки

// const genres = books.flatMap((book) => book.genres);
// console.log(genres);

// // ======================= 13 Имена пользователей
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];
// // Пиши код ниже этой строки
// const getUserNames = (users) => {
//   return users.map((user) => user.name);
// };
// // Пиши код выше этой строки
// console.log(getUserNames(users));

// ====================== 14 Задача. Почты пользователей
// Пиши код ниже этой строки
// const getUserEmails = (users) => {
//   return users.map((user) => user.email);
// };
// // Пиши код выше этой строки
// console.log(getUserEmails(users));

// ======================= 15 Методы filter и find
const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Пиши код ниже этой строки

const evenNumbers = numbers.filter((number) => number % 2 === 0);
const oddNumbers = numbers.filter((number) => number % 2 !== 0);

console.log(evenNumbers);

// ====================== 16 Фильтрация уникальных элементов
// const books = [
//   {
//     title: "Последнее королевство",
//     author: "Бернард Корнуэлл",
//     genres: ["приключения", "историческое"],
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     genres: ["фантастика", "мистика"],
//   },
//   {
//     title: "Красна как кровь",
//     author: "Ли Танит",
//     genres: ["ужасы", "мистика", "приключения"],
//   },
// ];
// // Пиши код ниже этой строки
// const allGenres = books.flatMap((book) => book.genres);
// const uniqueGenres = allGenres.filter(
//   (genre, index, array) => array.indexOf(genre) === index
// );

// console.log(uniqueGenres);

// ========================= 17 Метод filter() и массив объектов
// const books = [
//   { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
//   { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
//   { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
//   { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
//   { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Бернард Корнуэлл";
// // Пиши код ниже этой строки

// const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter((book) => book.author === AUTHOR);

// console.log(booksByAuthor);

// =================== 18 Пользователи с цветом глаз
const getUsersWithEyeColor = (users, color) => {
  return users.filter((user) => user.eyeColor === color);
};

// ================== 19 Задача. Пользователи в возрастной категории
// Пиши код ниже этой строки
const getUsersWithAge = (users, minAge, maxAge) => {
  return users.filter((user) => user.age > minAge && user.age < maxAge);
};
// Пиши код выше этой строки

// ===================== 20 Пользователи с другом
// ===================== 21 Задача. Список друзей
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39,
  },
];

// Пиши код ниже этой строки
const getFriends = (users) => {
  const allFriends = users.flatMap((user) => user.friends);
  return allFriends.filter(
    (friend, index, array) => array.indexOf(friend) === index
  );
};
// Пиши код выше этой строки

// ======================== 22 Задача. Активные пользователи
// Пиши код ниже этой строки
const getActiveUsers = (users) => {
  return users.filter((user) => user.isActive);
};
// Пиши код выше этой строки
console.log(getActiveUsers(users));

// ======================= 23 Задача. Неактивные пользователи
// Пиши код ниже этой строки
const getInactiveUsers = (users) => {
  return users.filter((user) => !user.isActive);
};
// Пиши код выше этой строки
console.log(getInactiveUsers(users));

// ===================== 24 Метод find() ---ищет до первого совпадения.
// const books = [
//   { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
//   { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
//   { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
//   { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
// ];
// const BOOK_TITLE = "Сон смешного человека";
// const AUTHOR = "Роберт Шекли";
// // Пиши код ниже этой строки

// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// const bookByAuthor = books.find((book) => book.author === AUTHOR);

// ======================= 25 Задача. Пользователь с почтой
const getUserWithEmail = (users, email) => {
  return users.find((user) => user.email === email);
};

console.log(getUserWithEmail(users, "blackburndotson@furnigeer.com"));

// ========================= 26 Метод every()
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const eachElementInFirstIsEven = firstArray.every((value) => value % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every((value) => value % 2 !== 0);

const eachElementInSecondIsEven = secondArray.every((value) => value % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every((value) => value % 2 !== 0);

const eachElementInThirdIsEven = thirdArray.every((value) => value % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every((value) => value % 2 !== 0);

// ===================== 27 Задача. Все ли пользователи активны
// Пиши код ниже этой строки
const isEveryUserActive = (users) => {
  return users.every((user) => user.isActive);
};
// Пиши код выше этой строки

// ==================== 28 Метод some()
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const anyElementInFirstIsEven = firstArray.some((value) => value % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some((value) => value % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some((value) => value % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some((value) => value % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some((value) => value % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some((value) => value % 2 !== 0);

// ==================== 29 Задача. Есть ли активные пользователи
// Пиши код ниже этой строки
const isAnyUserActive = (users) => {
  return users.some((user) => user.isActive);
};
// Пиши код выше этой строки

// =================== 30 Метод reduce()
const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Пиши код ниже этой строки

const totalPlayTime = playtimes.reduce((acc, playtime) => {
  return acc + playtime;
}, 0);

// Пиши код выше этой строки
const averagePlayTime = totalPlayTime / playtimes.length;
console.log(totalPlayTime);

// =================== 31 Метод reduce() и массив объектов
// const players = [
//   { name: "Манго", playtime: 1270, gamesPlayed: 4 },
//   { name: "Поли", playtime: 469, gamesPlayed: 2 },
//   { name: "Аякс", playtime: 690, gamesPlayed: 3 },
//   { name: "Киви", playtime: 241, gamesPlayed: 1 },
// ];
// // Пиши код ниже этой строки

// const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
//   return acc + player.playtime / player.gamesPlayed;
// }, 0);

// =================== 32 Задача. Общий баланс пользователей
// Пиши код ниже этой строки
const calculateTotalBalance = (users) => {
  return users.reduce((acc, user) => {
    return acc + user.balance;
  }, 0);
};
// Пиши код выше этой строки
console.log(calculateTotalBalance(users));

// ==================== 33 Задача. Общее количество друзей
// Пиши код ниже этой строки
const getTotalFriendCount = (users) => {
  return users.reduce((acc, user) => {
    return acc + user.friends.length;
  }, 0);
};
// Пиши код выше этой строки
console.log(getTotalFriendCount(users));

// ==================== 34 Метод sort()
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Ли Танит",
  "Бернард Корнуэлл",
  "Роберт Шекли",
  "Федор Достоевский",
];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort();

// ==================== 35 Свой порядок сортировки чисел
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// ===================== 36 Свой порядок сортировки строк
// const authors = [
//   "Ли Танит",
//   "Бернард Корнуэлл",
//   "Роберт Шекли",
//   "Федор Достоевский",
//   "Говард Лавкрафт",
// ];
// // Пиши код ниже этой строки

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// ===================== 37 Сортировка объектов
// const books = [
//   { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
//   { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
//   { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
//   { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
//   { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
// ];
// // Пиши код ниже этой строки

// const sortedByAuthorName = [...books].sort((a, b) =>
//   a.author.localeCompare(b.author)
// );

// const sortedByReversedAuthorName = [...books].sort((a, b) =>
//   b.author.localeCompare(a.author)
// );

// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);

// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);

// console.log(sortedByAuthorName);

// ======================= 38 Задача. Сортировка по балансу
// Пиши код ниже этой строки
const sortByAscendingBalance = (users) => {
  return [...users].sort((a, b) => a.balance - b.balance);
};
// Пиши код выше этой строки

console.log(sortByAscendingBalance(users));

// ========================= 39 Задача. Сортировка по количеству друзей
// Пиши код ниже этой строки
const sortByDescendingFriendCount = (users) => {
  return [...users].sort((a, b) => b.friends.length - a.friends.length);
};
// Пиши код выше этой строки

// ========================= 40 Задача. Сортировка по имени
// Пиши код ниже этой строки
const sortByName = (users) => {
  return [...users].sort((a, b) => a.name.localeCompare(b.name));
};
// Пиши код выше этой строки

// ======================= 41 Цепочки методов (чейнинг, chaining)
const books = [
  { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
  { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
  { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
  { title: "Красна как кровь", author: "Ли Танит", rating: 8.14 },
  { title: "Сны В Ведьмином Доме", author: "Говард Лавкрафт", rating: 8.67 },
];
const MIN_BOOK_RATING = 8;
// Пиши код ниже этой строки

const names = books
  .filter((book) => book.rating > MIN_BOOK_RATING)
  .sort((a, b) => a.author.localeCompare(b.author))
  .map((book) => book.author);

// ===================== 42 Задача. Пользователи и друзья
// Дополни функцию getNamesSortedByFriendCount(users) так,
// чтобы она возвращала массив имён пользователей отсортированный
// по возрастанию количества их друзей(свойство friends).
// Пиши код ниже этой строки
const getNamesSortedByFriendCount = (users) => {
  return [...users]
    .sort((a, b) => a.friends.length - b.friends.length)
    .map((user) => user.name);
};
// Пиши код выше этой строки

// ======================== 43 Задача. Имена друзей
// Дополни функцию getSortedFriends(users) так, чтобы она возвращала
// массив уникальных имён друзей(свойство friends) отсортированный по алфавиту.
// Пиши код ниже этой строки
const getSortedFriends = (users) => {
  // разгладить, фильтрануть, сортирнуь по алфавиту
  return users
    .flatMap((user) => user.friends)
    .filter((friend, index, array) => array.indexOf(friend) === index)
    .sort((a, b) => a.localeCompare(b));
};
// Пиши код выше этой строки

console.log(getSortedFriends(users));

// =========================== 44 Задача. Общий баланс
// Дополни функцию getTotalBalanceByGender(users, gender) так,
// чтобы она возвращала общий баланс пользователей(свойство balance),
// пол которых(свойство gender) совпадает со значением параметра gender.

// Пиши код ниже этой строки
const getTotalBalanceByGender = (users, gender) => {
  return users
    .filter((user) => user.gender === gender)
    .reduce((acc, user) => acc + user.balance, 0);
};
// Пиши код выше этой строки
console.log(getTotalBalanceByGender(users, "female"));
