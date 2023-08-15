
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


const array = ['Hello', null, true, 15];
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
function getCommonElements(arr) {
    for (let i = 0; i < arr.length; i+=1) {
        if(arr.includes(arr[i],))
    }
}