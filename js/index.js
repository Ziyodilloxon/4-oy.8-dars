// 1 misol
// function isEmpty(obj) {
//   if (Object.keys(obj).length === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// let exampleObject = {
//   name: "John",
//   age: 30,
// };
// console.log(isEmpty(exampleObject));
// let emptyObject = {};
// console.log(isEmpty(emptyObject));

// 2 misol
// function calculateTotalSalary(salaries) {
//   const salaryValues = Object.values(salaries);
//   const totalSalary = salaryValues.reduce((total, salary) => total + salary, 0);
//   return totalSalary;
// }
// let salaries = { John: 100, Ann: 160, Pete: 130 };
// console.log(calculateTotalSalary(salaries));

// 3 misol
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumeric(menu);

console.log(menu); // { width: 400, height: 600, title: "My menu" }

// 4 misol
// function raqamlarnisortlash() {
//   let arr = [5, 2, 1, -10, 8];
//   arr.sort((a, b) => b - a);
//   console.log(arr);
// }
// raqamlarnisortlash();

// 5 misol
// function inputNumber() {
//   let numbers = [];
//   while (true) {
//     let input = +prompt("Iltimos, raqam kiriting:");
//     if (input === null || isNaN(Number(input))) {
//       break;
//     }
//     numbers.push(Number(input));
//   }
//   return numbers;
// }
// let numbersArray = inputNumber();
// console.log(numbersArray);
