// /* ==========================  JS tasks ==================================*/

// // 1. Преобразовать строку в массив слов
// const str = 'раз два три четыре пять';
// const arr = str.split(' ');
// console.log(arr);


// // 2. Сделать первую букву строки прописной
// const str = "string not starting with capital";
// const arr = str.split(' ');
// arr[0] = arr[0].replace(arr[0][0], arr[0][0].toUpperCase());
// const newStr = arr.join(' ');
// console.log(newStr);


// // 3. Сравните строки без учёта регистра
// const firstStr = 'string';
// const secondStr = 'StRiNg';
// const trueOrFalse = firstStr.toLowerCase() === secondStr.toLowerCase();
// console.log(trueOrFalse);


// // 4. Удалить лишние пробелы из строки
// let str = "       Max is a good boy    ";
// let arr = str.split(' ');
// let newArr = [];
// arr.forEach((el) => {
//     if (el !== '') {
//         newArr.push(el);
//     }
// });
// str = newArr.join(' ');
// console.log(str);


// // 5. Удалить повторяющиеся элементы массива
// const array = ["php", "php", "css", "css", "script", "script", "html", "html", "java"];
// const newArr = array.filter((el, i, arr) => arr.indexOf(el) === i);
// console.log(newArr);

// // 5. (Вар 2) Удалить повторяющиеся элементы массива 
// let array = ["php", "php", "css", "css", "script", "script", "html", "html", "java"];
// const newArrUniq = new Set(array);
// array = [...newArrUniq];
// console.log(array);



// // 6. Найдите элемент в массиве который будет без остатка делиться на 2
// const array = [0, 1, 2, 3, 5, 7];
// const newArr = array.filter(el => el % 2 === 0 && el !== 0);
// console.log(newArr);



// // 7. Сумма элементов двух массивов
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [4, 5, 6];

// const newArr = arr1.concat(arr2);
// const sum = newArr.reduce((prevVal, curVal) => {
//     return prevVal + curVal;
// });
// console.log(sum);



// // 8. Разница между двумя массивами
// // Напишите функцию union, которая возвращает массив, содержащий все элементы arr1, которые не находятся в arr2
// let arr1 = [1, 2, 'a'];
// let arr2 = [1, 2, 3, 4, 'b'];

// function union() {
//     let newArr = arr1.filter(el => arr2.indexOf(el) < 0);
//     return newArr;
// }
// console.log(union());



// // 9. Сортировка массива по убыванию
// const numbers = [3, 8, 7, 6, 5, -4, 3, 2, 1];
// const newArr = numbers.sort((a, b) => b - a);
// console.log(newArr);



// // 10. преобразуйте массив к виду  [1, 2, 3]
// const arr = [{ id: 1 }, { id: 2, name: 'John' }, { id: 3 }];
// const newArr = arr.map((el) => el.id);
// console.log(newArr);


// // 11. Напишите функцию findLongestWord(str), которая принимает строку 
// // в качестве параметра и находит самое длинное слово в строке
// function findLongestWord(str) {
//     let arr = str.split(' ');
//     let longest = arr.reduce((firstEl, nextEl) => (firstEl.length > nextEl.length) ? firstEl : nextEl);
//     return longest;
// }
// console.log(findLongestWord('str js react'));


// // 12. Напишите функцию detectDataType(value), которая принимает аргумент и возвращает тип
// function detectDataType(value) {
//     return typeof value;
// }
// console.log(detectDataType(7));



// // 13. Напишете метод который преобразует число 2500 в валюту в зависимости 
// // от параметра yourMethod('en-US', 'USD', 2500) =>  $2,500.00. 
// //  yourMethod('de-DE', 'EUR', 2500) => 2.500,00 €

// function yourMethod(locales, currency, amount) {
//     return new Intl.NumberFormat(locales, { style: 'currency', currency: currency }).format(amount);
// }
// console.log(yourMethod('en-US', 'USD', 2500));
// console.log(yourMethod('de-DE', 'EUR', 2500));


// // 14. Узнать количество дней в месяце
// // Напишите функцию JavaScript, чтобы получить количество дней в месяце.
// // Пример ввода: // console.log(getDaysInMonth(5, 2021));  Вывод: 31

// function getDaysInMonth(setMonth, setYear) {
//     const date = new Date(setYear, setMonth, 0).getDate();
//     return date;
// }
// console.log(getDaysInMonth(5, 2021));


// // 15. Сравнение двух дат. Напишите функцию для сравнения дат (т.е. больше, меньше или равно)
// function compareDates(firstDate, secondDate) {
//     if (new Date(firstDate) > new Date(secondDate)) {
//         return `Дата ${firstDate} более поздняя!`;
//     } else if (new Date(firstDate) < new Date(secondDate)) {
//         return `Дата ${secondDate} более поздняя!`;
//     } else {
//         return `Даты равны!`;
//     }
// }
// console.log(compareDates('01 / 01 / 1990', '01 / 01 / 2021'));



// // 16. Разница между двумя датами в днях
// // Напишите функцию JavaScript, чтобы узнать разницу между двумя датами в днях.
// // Пример ввода:   console.log(difference('04/02/2021', '11/04/2021'));   Вывод:216

// function daysBetweenDates(firstDate, secondDate) {
//     const result = (Math.abs(new Date(firstDate) - new Date(secondDate))) / 8.64e+7;
//     return result;
// }
// console.log(daysBetweenDates('04/02/2021', '11/04/2021'));



// // 17. 1. Написать функцию loop, которая будет принимать параметры: times (значение по умолчанию = 0), callback (значение по умолчанию = null) 
// // и будет в цикле (times раз), вызывать функцию callback. Если функцию не передана, то цикл не должен отрабатывать ни разу. Покажите 
// // применение этой функции

// const loop = (times = 0, callback = null) => {
//     if (typeof callback !== 'function') {
//         console.log('callback != function');
//         return false;
//     }
//     for (let i = 0; i < Math.floor(times); i++) {
//         callback();
//     }
//     return true;
// }

// const someF = () => {
//     console.log('someF!');
//     return true;
// }
// console.log(loop(5, someF));
// loop(5, someF);
// loop(5, 'someF');
// loop(-1, someF);
// loop(5.5, someF);



// // 18. 2. Написать функцию calculateArea, которая будет принимать параметры, для вычисления площади (можете выбрать 
// // какую то конкретную фигуру, а можете, основываясь на переданных параметрах, выполнять требуемый алгоритм вычисления площади для переданной 
// // в параметрах фигуры) и возвращать объект вида: { area, figure, input }, где area - вычисленная площадь, figure - название фигуры, для 
// // которой вычислялась площадь, input - входные параметры, по которым было произведено вычисление.

// function calculateArea(num1, num2, figure) {
//     let data = {};
//     let area = num1 * num2;
//     data.area = area;
//     data.figure = figure;
//     data.inputData = { num1: num1, num2: num2 };
//     return data;
// }

// console.log(calculateArea(2, 3, 'прямоугольник'));   //{area: 6, figure: "прямоугольник", inputData: {…}}



// 19. Написать цикл, который создаёт массив промисов, внутри каждого промиса происходит обращение к ресурсу 
// (​https://jsonplaceholder.typicode.com/users/number​), где вместо number подставляется число от 1 до 10, в итоге должно 
// получиться 10 пром-в. Следует дождаться выполнения загрузки всеми пром-и и далее вывести массив загруженных данных.

// const arrProm = [];
// for (let i = 1; i <= 10; i++) {
//     const url = `https://jsonplaceholder.typicode.com/users/${i}`;
//     const getUsers = async () => {
//         try {
//             const response = await fetch(url);
//             const user = await response.json();
//             arrProm.push(user);
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     getUsers();
// }
// // // Вар. 1
// // Promise.all(arrProm).then(result => {
// //     console.log(result);
// // });

// // Вар. 2
// console.log(arrProm);
//ДОРАБОТАТЬ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

