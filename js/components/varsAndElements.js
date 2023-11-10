import { arrayElemCreator, arrayElemToasty, btnAction, elemCreator, scrollToBottom, toast } from "../helpers/functions.js";
import { ending, history, opening, tutorialItems } from "./messages.js";
import { questionsBase } from "./questions.js";

let successAnswer = 0;
let errorAnswer = 0;


/* --- Section Start ---  */

export const startGame = () => {

    // html
    const openingContent = `<p class="textContainer"> ${opening} </p>
    <input type="button" value="Tutorial" class="btn btn-second" id="btn-tutorial">
    <input type="button" value="Registro" class="btn btn-third" id="btn-reg">
    <input type="button" value="Jugar" class="btn btn-first" id="btn-start">
    <input type="button" value="Salir" class="btn btn-four" id="btn-end">
    `;
    const openingContainer = elemCreator('div', openingContent, '#root', 'openingContainer');

    // Register
    const btnReg = btnAction('#btn-reg', () => {

        /* 
        const asmRecIf = localStorage.getItem("asmRec");

        if (asmRecIf) {
            const asmRecStore = JSON.parse(asmRecIf)
        
            const BtnAsmRec = btnStart('Ultimo registro', '#openingSubCont', () => {
                const asmRecStoreCont = containerElem('asmRecStore');
                elemCreator('ul', `
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
 */

    });

    // Tutorial
    const btnTutorial = btnAction('#btn-tutorial', () => {
        toast(null, arrayElemToasty(tutorialItems), 1500, 'top', 'center', 'tutorial-toasty', true)
    });

    // Start
    const btnStart = btnAction('#btn-start', () => {
        openingContainer.remove();
        sectionHistory()
    });

    // End
    const btnEnd = btnAction('#btn-end', () => {
        openingContainer.remove();
        const endingContent = `<p class="textOut"> ${ending} </p>`
        elemCreator('div', endingContent, '#root', 'endingContainer')
    })

}

/* --- Section History --- */

const sectionHistory = () => {

    const historyContent = `<h3> ${history[ 0 ]} </h3>
                            ${arrayElemCreator(history[ 1 ], 'p')}
                            <ul> ${arrayElemCreator(history[ 2 ], 'li')} </ul>
                            <p> ${history[ 3 ]} </p>
                            <input type="button" value="Ir a las preguntas" class="btn btn-history" id="btn-history">
                            `
    const historyContainer = elemCreator('div', historyContent, '#root', 'historyContainer');

    const btnGo = btnAction('#btn-history', () => {
        historyContainer.remove();
        sectionQuestions()
    });

}

/* --- Section Questions --- */

const sectionQuestions = () => {

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

    const questionsContainer = elemCreator('div', '', '#root', 'questionsContainer');
    console.log(questions)



    for (let i = 0; i < questions.length; i++) {


        const assessment = (asm) => {

            if (asm === 'correcta') {
                toast(`#questionSubContainer${i}`, `La respuesta es ${asm}`, 3000, 'top', 'center', 'questionsToast')
                setTimeout(() => {
                    questionSubContainer.remove()
                }, 1000);
                successAnswer++
            } else {
                toast(`#questionSubContainer${i}`, `${asm}\n\n Te queda un intento `, 3000, 'top', 'center', 'questionsToast')
                errorAnswer++
            }
        }

        let n = i + 1
        const questionsSubContent = `
         <h3> Pregunta ${n}: ${questions[ i ].q} </h3>
         <input type="button" value="${questions[ i ].optA}" class="btn btn-question-A" id="btn-question${n}-A">
         <input type="button" value="${questions[ i ].optB}" class="btn btn-question-B" id="btn-question${n}-B">
         <input type="button" value="${questions[ i ].optC}" class="btn btn-question-C" id="btn-question${n}-C">
         <input type="button" value="${questions[ i ].optD}" class="btn btn-question-D" id="btn-question${n}-D">
         `

        const questionSubContainer = elemCreator('div', questionsSubContent, '#questionsContainer', 'questionSubContainer');

        const btnQuestionA = btnAction(`#btn-question${n}-A`, () => {
            let asm = questions[ i ].clueA
            assessment(asm)
        })

        const btnQuestionB = btnAction(`#btn-question${n}-B`, () => {
            let asm = questions[ i ].clueB
            assessment(asm)
        })

        const btnQuestionC = btnAction(`#btn-question${n}-C`, () => {
            let asm = questions[ i ].clueC
            assessment(asm)
        })

        const btnQuestionD = btnAction(`#btn-question${n}-D`, () => {
            let asm = questions[ i ].clueD
            assessment(asm)
        })





    }
}



// Cierre
/* btnClose('Teminar juego', '#questionCont', () => {
    questionCont.remove()
    assessment()
    scrollToBottom()
}) */




/* --- Section Assessment --- */
/* 

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

 */