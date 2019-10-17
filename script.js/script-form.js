'use strict';
const inputEl = document.querySelector('.text-form');
const selectEl = document.querySelector('select');

const formGetName = document.querySelector('.form-get-name');
/**
 * С работой с формой не требуется отдельно выводить эл.в переменные все с коробки
 */
// const InputName = document.querySelector('#textName');
// const btnSubmit = document.querySelector('.btn-submit');
// const btnReset = document.querySelector('.btn-reset');
/**
 *'change' - получили данные с ввода в input
 */
inputEl.addEventListener('change', (event) => {
   console.log(event.target.value);
});
/**
 * 'change' - получили данные из селекта
 */
selectEl.addEventListener('change', (event) => {
   console.log(event.target.value);
   console.log(event.target.options[event.target.options.selectedIndex].innerText);
});
/**
 *'blur'- срабатывает при убирании-клика курсора в другое поле
 */
inputEl.addEventListener('blur', () => {
   console.log('work');
});
/**
 * 'focus' - событие положения сурсора в инпут например
 * функция реализует добавление стиля в css outline: 3px solid green; при клике внутри input 
 * event - событие.
 * .target - перевод как цель наводка
 * .style - стиль
 * .cssText - Свойство cssText представляет текущее вычисленное значение свойства CSS.
 */
inputEl.addEventListener('focus', (event) => {
   const styles = 'outline: 3px solid green;';
   event.target.style.cssText = styles;
});
/**
 * 'blur' - срабатывает при убирании-клика курсора в другое поле
 * функция реализует по событию 'blur'
 * event - событие
 * .target - перевод: как цель наводка
 * Интерфейс метода CSSStyleDeclaration.removeProperty () удаляет свойство из объекта объявления стиля CSS.
 */
inputEl.addEventListener('blur', (event) => {
   event.target.style.removeProperty('outline');
});
/**
 * 'reset' - Событие сброса срабатывает при сбросе <form>.
 * if(!confirm('Вы уверены, что хотите очистить форму?')) - confirm возвращает true, если пользователь нажал "ок" и false, если он нажал "отмена". Логическое "не" просто меняет истину на ложь или ложь на истину, в зависимости от того что вернет confirm
 * event.preventDefault(); - предотвращает работу по умолчанию работа по умолчанию "reset"
 * шиворотная функция 
 */
formGetName.addEventListener('reset', (event) => {
   if(!confirm('Вы уверены, что хотите очистить форму?')) {
      event.preventDefault();
   }
});

const inputLogin = document.querySelector('#text-login');
const formGetLogin = document.querySelector('.form-get-login');
const divError = document.querySelector('.error');
/**
 * 'submit' - событие отправки данных формы
 * функция проверки input в форме на пустую строку 
 * if(inputLogin.value == '') - проверка на пустую строку
 * event.preventDefault(); - предотвращает отправку формы.
 * 
 */
formGetLogin.addEventListener('submit', (event) => {
   if(inputLogin.value == '') {
      event.preventDefault();
      const styleDivError = 'color: red;'
      event.target.style.cssText = styleDivError;
      divError.innerText = 'input не может быть пустым';
   }
});



































































