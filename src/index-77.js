"use strict";

function multiply(a, b) {
  return a * b;
}

// 1
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  var vowelsCount = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  const letters = str.split("");
  for (const letter of letters) {
    if (vowels.includes(letter)) {
      vowelsCount += 1;
    }
  }

  return vowelsCount;
}

console.log(getCount("mama mama mama"));

// best practices
// function getCount(str) {
//  return (str.match(/[aeiou]/gi) || []).length;
// }

// 2 It should remove all values from list a, which are present in list b keeping their order.

function arrayDiff(a, b) {
  const resultArr = [];
  for (const element of a) {
    if (b.includes(element)) {
      continue;
    }
    resultArr.push(element);
  }
  return resultArr;
}

console.log(arrayDiff([1, 2, 3, 4, 5, 2, 3, 7], [2, 3]));

// best practices
//function array_diff(a, b) {
//  return a.filter(e => !b.includes(e));
// }

// /////////////////////////////////////////////////////////3
// Create a function named divisors / Divisors that takes an integer n > 1
// and returns an array with all of the integer's divisors(except for 1 and the number itself),
// from smallest to largest.If the number is prime return the string '(integer) is prime'

function divisors(integer) {
  const testDivisors = [];
  for (let i = 2; i < integer; i += 1) {
    testDivisors.push(i);
  }

  let result = [];
  for (const divisior of testDivisors) {
    if (integer % divisior === 0) {
      result.push(divisior);
    }
  }

  if (result.length === 0) {
    result = `${integer} is prime`;
  }

  return result;
}

console.log(divisors(15));

// best practices
//function divisors(integer) {
//  var res = []
// for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
//  return res.length ? res : integer + ' is prime'
//};

// ////////////////////////////4 Count the number of Duplicates
//Write a function that will return the count of distinct case-insensitive alphabetic
//characters and numeric digits that occur more than once in the input string.The input
//string can be assumed to contain only alphabets(both uppercase and lowercase)
//and numeric digits. "aA11" -> 2 # 'a' and '1'

function duplicateCount(text) {
  const duplicateArr = text
    .toLowerCase()
    .split("")
    .filter((item, index, array) => array.indexOf(item) !== index);

  const result = duplicateArr.filter(
    (item, index, array) => array.indexOf(item) === index
  ).length;

  return result;
}

console.log(duplicateCount("Indivisibilities"));

// best practices
// function duplicateCount(text) {
//   return (
//     text
//       .toLowerCase()
//       .split("")
//       .sort()
//       .join("")
//       .match(/([^])\1+/g) || []
//   ).length;
// }

// ///////////////////////////// 5 Duplicate Encoder
//The goal of this exercise is to convert a string to a new string where each character
//in the new string is "(" if that character appears only once in the original string,
//or ")" if that character appears more than once in the original string.Ignore capitalization
//when determining if a character is a duplicate.

function duplicateEncode(word) {
  let newString = [];
  const array = word.toLowerCase().split("");
  const arrayOfRepeated = array.filter(
    (item, index, array) => array.indexOf(item) !== index
  );

  // for (const character of array) {
  //   if (!arrayOfRepeated.includes(character)) {
  //     newString.push("(");
  //   }
  //   if (arrayOfRepeated.includes(character)) {
  //     newString.push(")");
  //   }
  // }

  //

  array.forEach((element) => {
    !arrayOfRepeated.includes(element)
      ? newString.push("(")
      : newString.push(")");
  });

  return newString.join("");
}

console.log(duplicateEncode("recede"));

// best practice
// function duplicateEncode(word) {
//   return word
//     .toLowerCase()
//     .split("")
//     .map(function (a, i, w) {
//       return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
//     })
//     .join("");
// }

///////////////// 6 Find The Parity Outlier
//You are given an array (which will have a length of at least 3, but could be very large)
//containing integers.The array is either entirely comprised of odd integers or entirely
//comprised of even integers except for a single integer N.Write a method that takes the
//array as an argument and returns this "outlier" N.

function findOutlier(integers) {
  // const arrOfEven = [];
  // const arrOfOdd = [];

  // integers.forEach((element) => {
  //   if (element % 2 === 0) {
  //     arrOfEven.push(element);
  //   }
  //   if (element % 2 !== 0) {
  //     arrOfOdd.push(element);
  //   }
  // });

  // if (arrOfEven.length === 1) {
  //   return arrOfEven[0];
  // }

  // return arrOfOdd[0];

  const arrOfEven = integers.filter((a) => a % 2 === 0);
  const arrOfOdd = integers.filter((a) => a % 2 !== 0);

  return arrOfEven.length === 1 ? arrOfEven[0] : arrOfOdd[0];
}

console.log(findOutlier([1, 1, 0, 1, 1]));

//best practice
//function findOutlier(int){
//   var even = int.filter(a=>a%2==0);
//   var odd = int.filter(a=>a%2!==0);
//   return even.length==1? even[0] : odd[0];
// }
