//lesson-1
//task-1
'use strict' // используем строгий .
// let degCels = prompt('введите число');
// let degFahr  = ( 9/5 ) * degCels + 32;//Tf = (9 / 5) * Tc + 32, где Tf – температура по Фаренгейту, Tc – температура по Цельсию 
// alert( degFahr );
// //task-2
// let admin = 'Василий';
// let name = admin;
// alert( name );
//task-3
// let resultOne = 10 + 10 + '10';// 20+string 2030
// let resultTwo = 10 + '10' + 10; //10+string+10 "преврощение в строку" 101010
// let resultThree = 10 + 10 + +'10';// 10+10+10  " +'10' " знак "+" вывод трансформирует в число
// let resultFour = 10 / -'' ; // -infinity как с "-0"
// let resultFive = 10 / +'2,5'; // подглядел в видео запятая =) думал почему унарный не сработал
// console.log (resultOne);
// console.log (resultTwo);
// console.log (resultThree);
// console.log (resultFour);
// console.log (resultFive);

// let mode = "normal"; 
// let my_valu3 = 102; 
// // let 3my_value3 = "102"; // error
// let __hello__ = "world"; 
// let $$$ = "money"; 
// // let !0_world = true;  // error
//------------------------------------------------------------------------------------------------------------||
//lessin-2
//task-1 Объясните почему код даёт именно такие результаты ?
    //пример 1 
    // let a = 1, 
    // b = 1, 
    // c, //undefined понятно нет не чего
    // d; //undefined
    // c = ++a; // работает префикс 1+1.
    // alert(c); // ответ: 2  
    // //пример 2 
    // d = b++; // "d" пустая работает поспрефикс присвоим 1 и гдето там в уме держим еще+1
    // alert(d); //ответ: 1  
    // //пример 3 
    // c = 2 + ++a; // в переменной "c" уже есть значение 2 и оно перезаписывается 2 + ++а в "а" уже лежит 2 и префикс добавит +1 и того 2+3. ++a;
    //              //В префиксной форме инкрементирование производится сразу, а возврат — уже с обновленным значением.
    // alert(c); //ответ: 5  
    // //пример 4 
    // d = 2 + b++; // в переменной "d" лежит значение 1 перезаписывается 2 + поспрефикс добавил к занчению 1+1 в примере выше по факту это видемоя 2 которая и присуждается ну и в уме +1
    //              // ответ 4 . ну делаю вывод невидемого накопления что ли . то есть следующий постпрефикс даст 3 + (1 гдето там в уме) но отображение без префикса покажет 3 . 
    // alert(d); //ответ: 4  
    // alert(a); //3 эфект накопления )) ну извените Игорь как понял )))
    // alert(b); //3 собственно и "3"! магия черт возьми )))
//task-2
    // let a = 2; 
    // let x = 1 + (a *= 3);// еее я понял! учим учим ! =) 
    //  alert(x);   
//task-3
    // let a = prompt('введите число');
    // let b = prompt('введите число');
    // if (a && b >= 0) {
    //     a - b;
    //     alert(a - b);
    // } else if (a && b < 0) {
    //     a * b;
    //     alert(a * b);
    // }
    //   if (a || b < 0) {
    //     alert(+a + +b); // Хелп Игорь я в ступоре! если в alert указать (a + b) то происходит конкатенация !!! Я пробовал конечно и ваш пример с видео "идеальный подход" но я воюю со своей логикой
    // }
//task-4
    // /**
    //  * фуекция складывает 2 переданных числа.
    //  * @param {number} a первое число.
    //  * @param {number} b второе число.
    //  * @returns {number} вернет сумму чисел.
    //  */
    // function addition (a, b) {
    //   return (a + b);
    // }
    // let sum = addition(5, 5);
    // console.log(sum);
    // /**
    //  * фуекция вычитает 2 переданных числа.
    //  * @param {number} a первое число.
    //  * @param {number} b второе число.
    //  * @returns {number} вернет разность чисел.
    //  */
    // function subtraction (a, b) {
    //   return (a - b);
    // }
    // let sum1 = subtraction(10, 5);
    // console.log(sum1);
    // /**
    //  * фуекция делит 2 переданных числа.
    //  * @param {number} a первое число делимое.
    //  * @param {number} b второе число делитель.
    //  * @returns {number} вернет отношение чисел.
    //  */
    // function division (a, b) {
    //   return (a / b);
    // }
    // let sum2 = division(10, 5);
    // console.log(sum2);
    // /**
    //  * фуекция умножает 2 переданных числа.
    //  * @param {number} a первое число .
    //  * @param {number} b второе число .
    //  * @returns {number} вернет произведение чисел.
    //  */
    // function multiplication (a, b) {
    //   return (a * b);
    // }
    // let sum3 = multiplication(10, 5);
    // console.log(sum3);
//task-5
    // let operation = prompt('введите операцию');
    //  /**
    //   * функция содержит в себе 4 функции каждая из них возвращает результат математической операции в зависимости от строковой команды.
    //   * @function subtraction - вычитает.
    //   * @function ddition - сложение.
    //   * @function multiplication - умножение.
    //   * @function ivision - деление.
    //   * @param {number} arg1 - значение аргументов функции. 
    //   * @param {number} arg2 - значение аргументов функции.
    //   * @param {string} operation - let operation = prompt('введите операцию');
    //   */
    // function meticOperations (arg1, arg2, operation) {
    //     switch (operation) {
    //         case 'вычитание':
    //             /**
    //             * фуекция вычитает 2 переданных числа.
    //             * @param {number} arg1 первое число.
    //             * @param {number} arg2 второе число.
    //             * @returns {number} вернет разность чисел.
    //             */
    //             function subtraction (arg1, arg2) {
    //               return (arg1 - arg2);
    //             }
    //             let sum1 = subtraction(arg1, arg2);
    //             alert(sum1);
    //         break;
    //         case 'сложение':
    //             /**
    //             * фуекция складывает 2 переданных числа.
    //             * @param {number} arg1 первое число.
    //             * @param {number} arg2 второе число.
    //             * @returns {number} вернет сумму чисел.
    //             */
    //             function addition (arg1, arg2) {
    //               return (arg1 + arg2);
    //             }
    //             let sum = addition(arg1, arg2);
    //             alert(sum);
    //         break;
    //         case 'умножение':
    //             /**
    //             * фуекция умножает 2 переданных числа.
    //             * @param {number} aeg1 первое число .
    //             * @param {number} aeg2 второе число .
    //             * @returns {number} вернет произведение чисел.
    //             */
    //             function multiplication (arg1, arg2) {
    //              return (arg1 * arg2);
    //             }
    //             let sum3 = multiplication(arg1, arg2);
    //             alert(sum3);
    //         break;
    //         case 'деление':
    //             /**
    //             * фуекция делит 2 переданных числа.
    //             * @param {number} arg1 первое число делимое.
    //             * @param {number} arg2 второе число делитель.
    //             * @returns {number} вернет отношение чисел.
    //             */
    //             function division (arg1, arg2) {
    //              return (arg1 / arg2);
    //             }
    //             let sum2 = division(arg1, arg2);
    //             console.log(sum2);
    //         break;
    //         default:
    //             alert('введите команды в формате: вычитание, сложение, умножение, деление');
    //         break;
    //     }
    // }
    // meticOperations(10, 5, operation);
//task-6
    // let addAmount = prompt('Введите сумму для зачисления на счет');
    // let lastNumber = addAmount.charAt(addAmount.length -1);
    // if (lastNumber == '1') {
    //     alert(`Ваша сумма в ${addAmount} рубль успешно зачислена.`);
    // } else if (lastNumber == '2' || lastNumber == '3' || lastNumber == '4') {
    //     alert(`Ваша сумма в ${addAmount} рубля успешно зачислена.`);
    // } else if (lastNumber) {
    //     alert(`Ваша сумма в ${addAmount} рублей успешно зачислена.`);
    // };
//Lesson-3
//task-2
    //
    // let zero = "это ноль ",
    //     evenNumber = 'четное число',
    //     oddNumber = 'нечетное число';
    // for (let i = 0; i <= 10; i++) {
    //     if (i == 0) {
    //         console.log(`${i}-${zero}`);
    //     } else if (i % 2 == 0) {
    //        console.log(`${i}-${evenNumber}`)
    //     } else if (!i % 2 == 0) {
    //         console.log(`${i}-${oddNumber}`)
    //     }
    // };
//task-3
    // const post = {
    //     autor: 'john', //вывести этот текст 
    //     postId: 23,
    //     comments:[
    //         {
    //             userId: 10,
    //             userName: 'Alex',
    //             text: 'lorem ipsum',
    //             rating: {
    //                 likes: 10,
    //                 dislikes: 2 //вывести это число 
    //             }
    //         },
    //         {
    //             userId: 5,  //вывести это число 
    //             userName: 'Jane',
    //             text: 'lorem ipsum 2', //вывести этот текст 
    //             rating: {
    //                likes: 3,
    //                dislikes: 1
    //             }
    //         },
    //     ]
    // }   
    // console.log(post.autor);
    // console.log(post.comments[0].rating.dislikes);
    // console.log(post.comments[1].userId);
    // console.log(post.comments[1].text);
//task-4
    // const products = [
    //     {
    //         id: 3,
    //         price: 200,
    //     },
    //     {
    //         id: 4,
    //         price: 900,
    //     },
    //     {
    //         id: 1,
    //         price: 1000,
    //     },
    // ];
    // let considersDiscount = products.map(item => item.price - (item.price) / 100 * 15) 
    // console.log(considersDiscount);

//task-5
    // const products = [
    //     {
    //         id: 3,
    //         price: 127,
    //         photos: [
    //             '1.jpg',
    //             '2.jpg',
    //         ]
    //     },
    //     {
    //         id: 5,
    //         price: 499,
    //         photos: []
    //     },
    //     {
    //         id: 10,
    //         price: 26,
    //         photos: [
    //             '3.jpg'
    //         ]
    //     },
    //     {
    //         id: 8,
    //         price: 78,
    //     }
    // ];
    // let photoSearch = products.filter(function(item){   
    //     return item.photos && item.photos.length > 0 
    // });
    // console.log(photoSearch);
    // let sortsPrice = products.sort((item1, item2) => {
    //     return item1.price - item2.price;
    // })
    // console.log(sortsPrice);
//task-6
    // for (let i = 0; i < 10; i++) console.log(i);
//task-7

// for (let i = 'x'; i.length <= 20; i++) {     
//     i+="x"
//     console.log(i)
// }