//task-1
'use strict' // используем строгий .
let degCels = prompt('введите число');
let degFahr  = ( 9/5 ) * degCels + 32;//Tf = (9 / 5) * Tc + 32, где Tf – температура по Фаренгейту, Tc – температура по Цельсию 
alert( degFahr );
//task-2
let admin = 'Василий';
let name = admin;
alert( name );
//task-3
let resultOne = 10 + 10 + '10';// 20+string 2030
let resultTwo = 10 + '10' + 10; //10+string+10 "преврощение в строку" 101010
let resultThree = 10 + 10 + +'10';// 10+10+10  " +'10' " знак "+" вывод трансформирует в число
let resultFour = 10 / -'' ; // -infinity как с "-0"
let resultFive = 10 / +'2,5'; // подглядел в видео запятая =) думал почему унарный не сработал
console.log (resultOne);
console.log (resultTwo);
console.log (resultThree);
console.log (resultFour);
console.log (resultFive);

let mode = "normal"; 
let my_valu3 = 102; 
// let 3my_value3 = "102"; // error
let __hello__ = "world"; 
let $$$ = "money"; 
// let !0_world = true;  // error