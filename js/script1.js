//** Лекция 2.1****************/ 
//проверка на массив is.Array
const array = ['Hello', null, true, 15];
const firstE1 = array[0]; // перший єлемен
const lastE1 = array.length -1; // останній єлемент



// Перебір масиву
// const array = ['Hello', null, true, 15];

// Цикл for (Якщо треба знати індекс елементу)
// for (let i = 0; i < array.length; i+=1) {
//     // const item = array[i]
//     if (item === null) {
//       array[i] = 'I love'     // перевизначення масиву
//     }
//     console.log(item);

// }
// console.log(array);


// const array = ['Hello', null, true, 15];
// //цикл for ...of
// for(const item of array){
//     console.log(item);
// }


// const array = ['Hello', null, true, 15];
//складний тип даних присвоєння за посиланням (a i b однакові)
// примітивні типи даних за значенням (a i b це копіі вони різні)



//task 1 Скрипт який перебирає масив ті видвляє що не є Number
// const arr = [3, 'Hello', null, 42, false];

// for(let i = 0; i<arr.length, i+=1) {
//     if (typeof arr[i] !=='number') {
//         console.log(arr[i]);
//         i-=1;
//     }
// }
// console.log(arr);

//task 2
// function getCommonElements(arr) {
//     for (let i = 0; i < arr.length; i+=1) {
//         if(arr.includes(arr[i],))
//     }
// }
//task 1
// function checkAge(age) {
//     if (age >= 20) { // Change this line
//       return "You are an adult";
//     }
  
//     return "You are a minor";
//   }


//task 2
// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
        
//    if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//    }
//           return "Access denied, wrong password!"
// }
//ЗАДАЧА: СКЛАД ТОВАРОВ 3.0

// function calculateEngravingPrice(message, pricePerWord) {
//     // Change code below this line
//  const word = message.split(" ")
//    const totalPrice = pricePerWord * word.length
   
 
//  return totalPrice
//     // Change code above this line
//  }

//slug
// function slugify(title) {
//     // Change code below this line
//   let slug
//       slug = title.toLowerCase().split(' ').join('-')
//       return slug
//        }

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
    
// const newArray = firstArray.concat(secondArray);
  
//   if (newArray.length > maxLength) {
//      return newArray.slice(0, maxLength)
//   }
//   return newArray
   
// }
//Задача 21
// function findLongestWord(string) {
//     // Change code below this line
//   let stringSplit = string.split(" ")
//     let word = stringSplit[0] 
//     for (let i = 1; i < stringSplit.length-1; i += 1) {
//       if (stringSplit[i].length > word.length){
//         word = stringSplit[i]
//       }
//        }
//       return word
   
//     }


//************* Лекция 2.2****************/ 