import { elemCreator, arrayElemCreator } from "../helpers/functions.js";
import { endGame, history, opening, tutorial } from "./messages.js";
import { questionsBase } from "./questions.js";

let successAnswer = 0;
let errorAnswer = 0;


// Containers
const containerElem = (id) => elemCreator('div', 1, '', '#root', id)

// Botones
const btnStart = (content, attach, fx) => elemCreator('input', 1, null, attach, null, 'btn-firts', 'button', content, 'click', fx);

const btnClose = (content, attach, fx) => elemCreator('input', 1, null, attach, null, 'btn-third', 'button', content, 'click', fx);

const btnCloseSub = (attach, content, fx) => elemCreator('input', 1, null, attach, null, 'btn-third btn-sub', 'button', content, 'click', fx);

const btnQuestion = (id, attach, content, fx) => elemCreator('input', 1, null, attach, id, 'btn-question', 'button', content, 'click', fx);

// Scroll
const scrollToBottom = () => {
    const documentHeight = document.body.scrollHeight;
    window.scrollTo(0, documentHeight, { behavior: "smooth" });
}


/* --- Section Start ---  */

// Opening
const openingCont = containerElem('openingCont');
const openingSubCont = containerElem('openingSubCont');

export const openingText = elemCreator('p', 1, opening, '#openingSubCont', null, 'textContainer');
export const startGame = btnStart('Jugar', '#openingSubCont', () => {
    openingSubCont.remove();
    sectionHistory()
});

// Tutorial
export const tutorialStart = elemCreator('input', 1, null, '#openingSubCont', null, 'btn-second', 'button', 'Tutorial', 'click', () => {
    const tutorialCont = containerElem('tutorialCont');
    arrayElemCreator(tutorial, 'p', '#tutorialCont', 'textSubContainer');
    scrollToBottom();
    // cierre y eliminación de contenedor
    btnCloseSub('#tutorialCont', 'Cerrar tutorial', () => tutorialCont.remove())
})

// Storage
const asmRecIf = localStorage.getItem("asmRec");

if (asmRecIf) {
    const asmRecStore = JSON.parse(asmRecIf)

    const BtnAsmRec = btnStart('Ultimo registro', '#openingSubCont', () => {
        const asmRecStoreCont = containerElem('asmRecStore');
        elemCreator('ul', 1, `
            <ul>
                <li>Nombre: ${asmRecStore.nombre}</li>
                <li>Total de respuestas: ${asmRecStore.respuestas}</li>
                <li>Aciertos: ${asmRecStore.aciertos}</li>
                <li>Tasa de aciertos: ${asmRecStore.tasaAciertos}</li>
                <li>Errores: ${asmRecStore.errores}</li>
                <li>Tasa de errores: ${asmRecStore.tasaErrores}</li>
            </ul>`,
            '#asmRecStore', 'asmRec');
    
            btnCloseSub('#asmRecStore', 'Cerrar registro', () => asmRecStoreCont.remove())
    })
    scrollToBottom();

} else {
elemCreator('p',1,'Sí hubiera algún registro, aquí habría un botón... cuando termine la partida se puede agregar el suyo, solo conservamos el ultimo','#openingSubCont')
}



// Exit
export const exitGame = btnClose('Terminar', '#openingSubCont', () => { openingSubCont.remove(); elemCreator('p', 1, endGame, '#openingCont', null, 'textOut') })


/* --- Section History --- */

const sectionHistory = () => {
    const historyCont = containerElem('historyCont');
    const elemCreatorHistory = (elem, position) => elemCreator(elem, 1, position, '#historyCont', null, 'textContainer');
    // titulo
    elemCreatorHistory('h3', history[ 0 ]);
    // parrafo
    arrayElemCreator(history[ 1 ], 'p', '#historyCont');
    // lista
    elemCreatorHistory('ul', null);
    arrayElemCreator(history[ 2 ], 'li', '#historyCont > ul', 'listContainer');
    // parrafo
    elemCreatorHistory('p', history[ 3 ]);

    btnStart('Ir a las preguntas', '#historyCont', () => {
        historyCont.remove();
        sectionQuestions()
    })

}


/* --- Section Questions --- */

const sectionQuestions = () => {

    const questionCont = containerElem('questionCont');

    // selección
    const qBaseArray = Object.values(questionsBase);
    const qAlterFirst = [ ...qBaseArray ].sort((a, b) => a.q.localeCompare(b.q));
    const qAlterSecond = [ ...qBaseArray ].sort((a, b) => b.q.localeCompare(a.q));

    let questions = [];

    const selectQuestion = (q0, q1, q2) => {
        let selectorRandom = Math.floor(Math.random() * 3);
        if (selectorRandom <= 1) {
            questions = q0;
        } else if (selectorRandom > 1 && selectorRandom < 2) {
            questions = q1;
        } else {
            questions = q2;
        }
        return questions
    }

    selectQuestion(qBaseArray, qAlterFirst, qAlterSecond)

    // Preguntas
    for (let i = 0; i < questions.length; i++) {

        const cont = containerElem(`questionSubCont${i}`);
        const assessment = (a) => {

            if (a === 'correcta') {
                cont.remove()
                elemCreator('p', 1, `${i + 1}) Bien, pasa a la siguiente....`, '#questionCont');
                successAnswer++
            } else {
                clue('vuelve a intentar');
                errorAnswer++
            }
        }

        elemCreator('h3', 1, `Pregunta ${i + 1}: ${questions[ i ].q}`, `#questionSubCont${i}`);

        const clue = (elem) => elemCreator('p', 1, elem, `#questionSubCont${i}`, null, 'clue')

        btnQuestion(null, `#questionSubCont${i}`, questions[ i ].optA, () => { clue(questions[ i ].clueA); assessment(questions[ i ].clueA); });
        btnQuestion(null, `#questionSubCont${i}`, questions[ i ].optB, () => { clue(questions[ i ].clueB); assessment(questions[ i ].clueB); });
        btnQuestion(null, `#questionSubCont${i}`, questions[ i ].optC, () => { clue(questions[ i ].clueC); assessment(questions[ i ].clueC); });
        btnQuestion(null, `#questionSubCont${i}`, questions[ i ].optD, () => { clue(questions[ i ].clueD); assessment(questions[ i ].clueD); });
    }

    // Cierre
    btnClose('Teminar juego', '#questionCont', () => {
        questionCont.remove()
        assessment()
        scrollToBottom()
    })

}

/* --- Section Assessment --- */

const assessment = () => {
    const answers = successAnswer + errorAnswer;
    const successRatio = Math.round(successAnswer * 100 / answers);
    const errorRatio = Math.round(errorAnswer * 100 / answers)
    const formContent = `<label for="nombre">Nombre: </label>
    <input type="text" id="nombre" placeholder="Introduce tu nombre">
    <button type="submit" class="btn-form">Guardar</button>`
    const asmCont = containerElem('asmCont');
    elemCreator('p', 1, "Con esto concluye el juego, estos son tus resultados...", '#asmCont');
    elemCreator('p', 1, `${answers} respuestas marcadas`, '#asmCont');
    elemCreator('p', 1, `${successAnswer} aciertos... ${successRatio}%`, '#asmCont', 'success');
    elemCreator('p', 1, `${errorAnswer} errores... ${errorRatio}%`, '#asmCont', 'success');
    elemCreator('p', 1, "Quieres que guardemos tu progreso?", '#asmCont');

    // Storage
    btnClose('NO', '#asmCont', () => exitGame)
    btnStart('SI', '#asmCont', () => {
        elemCreator('form', 1, formContent, '#asmCont', 'asmForm');
        scrollToBottom();
        const asmForm = document.querySelector("#asmForm");
        const asmName = document.querySelector("#nombre");

        asmForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = asmName.value;

            const asmRec = {
                nombre: `${name}`,
                respuestas: `${answers}`,
                aciertos: `${successAnswer}`,
                tasaAciertos: `${successRatio}%`,
                errores: `${errorAnswer}`,
                tasaErrores: `${errorRatio}%`,
            };

            localStorage.setItem("asmRec", JSON.stringify(asmRec));
            elemCreator('p', 1, "Guardado... cuando reinicies el juego lo puedes ver", '#asmForm')
            elemCreator('h3', 1, endGame, '#asmCont')
        });
    })
}