'use strict'
let render = {
    renderCard() {
         let result = this.generateCard();
        // let cont = '<div id="card"><button>puch</button></div>';
        document.body.insertAdjacentHTML('afterbegin',`<div class="container">${result}</div>`);
    },
    generateCard() {
        let cont = '';
        for (let i = 0; i < 3; i++) {
        cont += `<div id="card">${text.value}<button>puch</button></div>`;
        }
        return cont;
    }
}