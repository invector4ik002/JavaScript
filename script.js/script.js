'use strict';

// document.addEventListener('contextmenu', function(event) {
//     console.log('context menu');
//     console.log(event.clientX, event.clientY);
// });

/**
 * 'copy' - событие копирования.
 * const copiedText = document.getSelection().toString(); - сохранение скопированого пользователем в переменную.
 * event.clipboardData.setData('text/plain', copiedText + 'Этот текст скопирован оттуда то'); - указать, какие данные следует помещать в буфер обмена из обработчиков событий вырезания и копирования, как правило, с помощью вызова setData (format, data);
 */
// document.addEventListener('copy', function(event){
//     const copiedText = document.getSelection().toString();
//     event.clipboardData.setData('text/plain', copiedText + 'Этот текст скопирован оттуда то');
// });

/**
 * 'cut' - событие копирования.
 * const selection = document.getSelection(); - сохранили в переменную то что вырезали.
 * event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
 * event.clipboardData. - буфер обмена
 * 'text/plain' - говорим что это будет текст. 
 * selection.toString() - проеобразователь текста.
 * .toUpperCase() - преобразователь в заглавные.
 * selection.deleteFromDocument(); - то что вырезали удаляется из видемости.
 * event.priventDefault(); - поведение по умолчанию останавливаем.
 */
// document.addEventListener('cut', function(event) {
//  const selection = document.getSelection();
//  event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
//  selection.deleteFromDocument();
//  event.priventDefault();
// });

/**
 * 'dblclick' - событие двойного клика.
 * document.querySelector('p') - получили параграф.
 * .addEventListener('dblclick', function(event) {}) - двойной клик в параграфе на тексте.
 */
// document.querySelector('p').addEventListener('dblclick', function(event) {
//     console.log('p double clicked');
// });

/**
 * 'resize' - событие изменения размера окна
 * window.addEventListener('resize', function(event){} - слушаем событие окна.
 * console.log(event.target.innerWidth, event.target.innerHeight); - размер в координатах .
 * event.target.innerWidth, - ширина.
 * event.target.innerHeight - высота.
 */
// window.addEventListener('resize', function(event) {
//     console.log(event.target.innerWidth, event.target.innerHeight);
// });

/**
 * 'scroll' - событие скролла 
 * console.log(window.pageYOffset); - на сколько отошла прокрутка от верхнего края. в пикс
 */
// window.addEventListener('scroll', function(event) {
//    console.log(window.pageYOffset);
// });

// Видео проигрователь ! 
const video = document.querySelector('video');
const playBtn =  document.querySelector('.fa-play');
const pauseBtn =  document.querySelector('.fa-pause');
const valume = document.querySelector('.valume');
const timing = document.querySelector('.timing');
const currentTimeEl = document.querySelector('.currentTime');

/**
 * Подключаем спан - <input type="range" class="timing" value="0" step="0.001">
 * 'load' - событие прогрузки (бегунок под видео).
 * добавляем интервал для - const timing = document.querySelector('.timing');
 * timing.min = 0; - минимальная = 0.
 * timing.max = video.duration; video.duration; - вся длительность видео.
 */
window.addEventListener('load', () => {
    timing.min = 0;
    timing.max = video.duration;
});
/**
 * playBtn.addEventListener('click', - принемает событие '.fa-play'
 * video.play(); - у видео есть метод ;) 
 * setInterval(changeProgress, 100); - специальная функция которая принемает 2 параметра 1й функция, второй время через которое запускается эта функция.
 * setInterval - еще возвращает id по которому можно прекратить запущеное ей сохранив предварительно id в переменную через метод clearInterval.
 */
let progressIdentifier = null;

playBtn.addEventListener('click', () => {
    if(video.paused){//если видео на паузе то тогда мы можем его запустить
       video.play();
       progressIdentifier = setInterval(changeProgress, 100);
    }
});
/**
 * pauseBtn.addEventListener('click' - принемает событие '.fa-pause'
 * video.pause(); - у видео есть метод ;) 
 * 
 */
pauseBtn.addEventListener('click', () => {
    // добавим проверку 
    if(!video.paused){// если видео не на паузе тогда мы можем его поставить на паузу
       video.pause();
       clearInterval(progressIdentifier);
    }
});
timing.addEventListener('change', () => {
    video.currentTime = timing.value;
    if(wasVideoPlaying) {
       video.play();
       progressIdentifier = setInterval(changeProgress, 100);
    };
    currentTimeEl.innerHTML = video.currentTime;
})
/**
 * 'mousedown' - событие нажатие на клавишу мыши
 * вызывается пауза при нажатии на бигунок длинны видео
 */
let wasVideoPlaying = false;// воспроизводилось ли видео = false
timing.addEventListener('mousedown', (event) => {
   clearInterval(progressIdentifier);// остановки интервала воспроизведения видео.
    wasVideoPlaying = !video.paused;
    if(wasVideoPlaying){// если видео воиспроизводилось(воспроизвелось) тогда ставим на паузу.
      video.pause();
    }
});
/**
 * 
 */ 
function changeProgress(){
    currentTimeEl.innerHTML = video.currentTime;
    timing.value = video.currentTime;
};
valume.addEventListener('change', () => {
    video.valume = valume.value;  
    console.log('work')
});
