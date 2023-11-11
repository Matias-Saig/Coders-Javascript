import { arrayElemCreator, arrayElemToasty, btnAction, ending, elemCreator, restartGame, scrollToBottom, toast } from "../helpers/functions.js";
import { history, opening, tutorialItems, save } from "./messages.js";
import { questionsBase } from "./questions.js";

let successAnswer = 0;
let errorAnswer = 0;
let retry = 0;


/* --- Section Start ---  */

export const startGame = () => {

    // html
    const openingContent = `
        <p class="textContainer"> ${opening} </p>
        <div class="buttons">
            <input type="button" value="Tutorial" class="btn btn-second" id="btn-tutorial">        
            <input type="button" value="Registro" class="btn btn-third" id="btn-reg">
            <input type="button" value="Jugar" class="btn btn-first" id="btn-start">
            <input type="button" value="Salir" class="btn btn-four" id="btn-end">
        </div>
        `;

    const openingContainer = elemCreator('div', openingContent, '#root', 'openingContainer');

    // Register
    const btnReg = btnAction('#btn-reg', () => {

        /* 

const regUser = {
                nombre: name,
                respuestas: answers,
                aciertos: successAnswer,
                tasaAciertos: `${successRatio}%`,
                errores: errorAnswer,
                tasaErrores: `${errorRatio}%`,
                reintentos: retry,
                fecha: regDate,
            };

             localStorage.setItem("regUser", JSON.stringify(regUser));
*/


        const regUserIf = localStorage.getItem("regUser");

        if (regUserIf) {
            const { nombre, respuestas, aciertos, tasaAciertos, errores, tasaErrores, reintentos, fecha } = JSON.parse(regUserIf)
          
            const regContent = `Registro de ${nombre}\n\n
                                Respuestas totales: ${respuestas}\n
                                Aciertos: ${aciertos}\n
                                Tasa de aciertos: ${tasaAciertos}\n\n
                                Errores: ${errores}\n
                                Tasa de errores: ${tasaErrores}\n
                                Reintentos: ${reintentos}\n\n
                                (${fecha})            
            `
           toast('#root',regContent,10000,'userRegInit',true)

        } else {
            toast('#root', 'Sí hubiera algún registro, aquí habría un botón... cuando termine la partida se puede agregar el suyo, solo conservamos el ultimo', 'userRegInit', true)
        }


    });

    // Tutorial
    const btnTutorial = btnAction('#btn-tutorial', () => {
        toast(null, arrayElemToasty(tutorialItems), 1500, 'tutorial-toasty', true)
    });

    // Start
    const btnStart = btnAction('#btn-start', () => {
        openingContainer.remove();
        sectionHistory()
    });

    // End
    const btnEnd = btnAction('#btn-end', () => {
        openingContainer.remove();
        ending()
    })

}

/* --- Section History --- */

const sectionHistory = () => {

    const historyContent = `
        <h3> ${history[ 0 ]} </h3>
        ${arrayElemCreator(history[ 1 ], 'p')}
        <ul> ${arrayElemCreator(history[ 2 ], 'li')} </ul>
        <p> ${history[ 3 ]} </p>
        <input type="button" value="Ir a las preguntas" class="btn btn-history" id="btn-history">
        `;

    const historyContainer = elemCreator('div', historyContent, '#root', 'historyContainer');

    const btnGo = btnAction('#btn-history', () => {
        historyContainer.remove();
        sectionQuestions()
    });

}


/* --- Section Questions --- */

const sectionQuestions = () => {
    // selection
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

    // Questions
    const questionsContainer = elemCreator('div', '', '#root', 'questionsContainer');

    for (let i = 0; i < questions.length; i++) {

        let n = i + 1
        const qsOpt = [ questions[ i ].optA, questions[ i ].optB, questions[ i ].optC, questions[ i ].optD ]
        const qsClue = [ questions[ i ].clueA, questions[ i ].clueB, questions[ i ].clueC, questions[ i ].clueD ]
        const qsLetter = [ 'A', 'B', 'C', 'D' ]

        const questionsSubContent = `
            <h3> Pregunta ${n}: ${questions[ i ].q} </h3>
            <a class="questions question-${qsLetter[ 0 ]}" id="question${n}-${qsLetter[ 0 ]}"> ${qsOpt[ 0 ]} </a>
            <a class="questions question-${qsLetter[ 1 ]}" id="question${n}-${qsLetter[ 1 ]}"> ${qsOpt[ 1 ]} </a>
            <a class="questions question-${qsLetter[ 2 ]}" id="question${n}-${qsLetter[ 2 ]}"> ${qsOpt[ 2 ]} </a>
            <a class="questions question-${qsLetter[ 3 ]}" id="question${n}-${qsLetter[ 3 ]}"> ${qsOpt[ 3 ]} </a>
            `;

        const questionSubContainer = elemCreator('div', questionsSubContent, '#questionsContainer', 'questionSubContainer');

        const correctSelected = () => {
            successAnswer++
            toast(`#questionSubContainer${i}`, `Una respuesta correcta más, en total llevas ${successAnswer}\n\nSiguiente pregunta...`, 4000, 'questionsToast qSuccess')
            setTimeout(() => {
                questionSubContainer.remove()
            }, 500);
        }

        const wrongSelected = (msj) => {
            errorAnswer++
            toast(`#questionSubContainer${i}`, `${msj}...\n\nContador respuestas incorrectas: ${errorAnswer}\nSiguiente pregunta...`, 5000, 'questionsToast qError')
            setTimeout(() => {
                questionSubContainer.remove()
            }, 500);
        }

        qsOpt.forEach((opt, j) => {
            btnAction(`#question${n}-${qsLetter[ j ]}`, () => {

                (qsClue[ j ] === 'correcta') ? correctSelected() : wrongSelected(qsClue[ j ]);

            })
        });

    }

    // Retry

    if (retry === 0) {
        const btnRetry = `<input type="button" value="Reintentar" class="btn-questions-retry" id="btn-questions-retry">`
        const retryContainer = elemCreator('div', btnRetry, '#questionsContainer', 'retryContainer')

        btnAction('#btn-questions-retry', () => {

            retry++
            questionsContainer.remove()
            sectionQuestions()
        })
    }

    else {
        toast('#questionsContainer', 'Estas en el reintento del juego\nRecuerda que se suman los aciertos y errores anteriores', 5000, 'questionsToast retryToast', true)
    }


    // Close
    const btnClose = `<input type="button" value="Terminar juego" class="btn-questions-close" id="btn-questions-close">`
    elemCreator('div', btnClose, '#questionsContainer', 'closeContainer')

    btnAction('#btn-questions-close', () => {
        questionsContainer.remove()
        assessment()
    })

}


/* --- Section Assessment --- */

const assessment = () => {
    const answers = successAnswer + errorAnswer;
    const successRatio = Math.round(successAnswer * 100 / answers);
    const errorRatio = Math.round(errorAnswer * 100 / answers)
    const DateTime = luxon.DateTime
    const date = DateTime.now();
    const regDate = date.toLocaleString(DateTime.DATETIME_MED);

    const asmContent = `
        <h3>Resultados</h3>
        <p> Con esto concluye el juego, estos son tus resultados... </p>
        <p> ${answers} respuestas marcadas </p>
        <p> ${successAnswer} aciertos... ${successRatio}%</p>
        <p> ${errorAnswer} errores... ${errorRatio}%</p>
        <p class="asm-date">${regDate}</p>
        <div class="buttons">
            <input type="button" value="Guardar resultados y salir" class="btn-asm btn-asm-save" id="btn-asm-save">
            <input type="button" value="Finalizar sin guardar" class="btn-asm btn-asm-nosave" id="btn-asm-nosave">
        </div>
        `;

    const asmContainer = elemCreator('div', asmContent, '#root', 'asmContainer')

    btnAction('#btn-asm-nosave', () => {
        asmContainer.remove();
        ending();
        restartGame()
    })

    btnAction('#btn-asm-save', () => {

        const regFormContent = `<label for="regName">Nombre: </label>
        <input type="text" id="regName" placeholder="Introduce tu nombre">
        <input type="submit" class="btn-reg-form" id="btn-reg-form" value="Guardar">
        `;

        const regForm = elemCreator('form', regFormContent, '#asmContainer', 'regForm');
        scrollToBottom()

        const regFormSelect = document.querySelector("#regForm");
        const regName = document.querySelector("#regName");

        regFormSelect.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = regName.value;

            const regUser = {
                nombre: name,
                respuestas: answers,
                aciertos: successAnswer,
                tasaAciertos: `${successRatio}%`,
                errores: errorAnswer,
                tasaErrores: `${errorRatio}%`,
                reintentos: retry,
                fecha: regDate,
            };

            localStorage.setItem("regUser", JSON.stringify(regUser));

            toast('#asmContainer', save, 2000, 'regUserToast');

            setTimeout(() => {
                asmContainer.remove();
                ending();
                restartGame()
            }, 2000);


        });
    })

}

