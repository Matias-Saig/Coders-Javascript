import { questions, questionContent, btnStart, btnClose, tutorialStart,  containerElem } from "./components/varsAndElements.js";


// Messages
import { history, opening, tutorial } from "./components/messages.js";

// Questions
import { questionsBaseArray, questionsAlterFirst, questionsAlterSecond, } from "./components/questions.js";


// Functions
import { elemCreator } from "./helpers/functions.js";




const openingCont = containerElem('openingCont')
const openingText = elemCreator('p',1,opening,'#openingCont',null,'textContainer')

btnStart('Jugar', '#openingCont')

tutorialStart()


/* 

// Selector

function selector(answer, opt) {
	if (answer === opt) {
		startGame();
	} else {
		endGame();
	}
}


// Preguntar y reiterar
function ask(question, opt1, opt2) {
	let answer;

	do {
		answer = prompt(question).trim();
		if (answer !== opt1 && answer !== opt2) {
			alert("La respuesta no es correcta. Por favor, elige un número de los asignados");
		}
	} while (answer !== opt1 && answer !== opt2);

	return answer
}

function gameAsk(question, correct, answer1, clue1, answer2, clue2, answer3, clue3, answer4, clue4) {
	let answer = prompt(question).trim().toUpperCase();
	const clue0 = "La respuesta no es correcta, puedes intentar una vez más\nPista: "
	const correctAnswer = "Es la respuesta correcta :)";

	if (answer !== correct) {
		switch (answer) {
			case answer1:
				alert(clue0 + clue1);
				break;
			case answer2:
				alert(clue0 + clue2);
				break;
			case answer3:
				alert(clue0 + clue3);
				break;
			case answer4:
				alert(clue0 + clue4);
				break;
			default:
				alert("Esa respuesta no es posible... las opciones son A, B, C o D, elige entre ellas");
				break;
		}
		answer = prompt(question).trim().toUpperCase();
		if (answer !== correct) {
			alert("La respuesta es incorrecta. Pasamos a la siguiente pregunta");
		} else { alert(correctAnswer) }
		return answer

	} else {
		alert(correctAnswer);
		return answer;
	}

}

// Preguntas, aciertos y errores
function successAndError(gameAnswer, correct, id) {
	if (gameAnswer === correct) {
		successAnswer += 1;
		userAnswers.push(`\n  Pregunta ${id}: Bien!`);
	} else {
		errorAnswer += 1;
		userAnswers.push(`\n  Pregunta ${id}: oh...`);
	}
	return
}

function resultAnswer() {
	successAndError(gameAnswer = gameAsk(gameQuestion, correct, answerA, clueA, answerB, clueB, answerC, clueC, answerD, clueD), correct, gameQuestionId);
}

const date = new Date();
const y = date.getFullYear().toLocaleDateString();
const m = date.getMonth();
const d = date.getDate();
const h = date.getHours();
const mm = date.getMinutes();

console.log(`${y},${m},${d},${h},${mm}`)

function sumResultAnswer() {

	let successRatio = Math.round(successAnswer * 100 / questionNr);
	let errorRatio = Math.round(errorAnswer * 100 / questionNr);
	const date = new Date();
	console.log(date.getTime)

	let result = (`RESULTADO FINAL\n_______________\n\n  
	Tus respuestas fueron: ${userAnswers}\n\n  Aciertos:  ${successAnswer} = ${successRatio}%\n\n  Errores:  ${errorAnswer} = ${errorRatio}%\n_______________\n\n${date}\n_______________\n\n`);
	switch (successAnswer) {
		case 1:
		case 2:
			alert(result + "... :( ... con práctica se puede mejorar")
			return;
		case 3:
		case 4:
			alert(result + "... :s ... esta bien, un poco más de atención al leer y mejorarás mucho")
			return;
		case 5:
		case 6:
			alert(result + "... :) ... bien, te felicito!");
			return;
		case 7:
			alert(result + "... :D ... Perfecto, 7 de 7!!!");
			return;
	}

}

// Inicio y cierre

function startGame() {

	successAnswer = 0;
	errorAnswer = 0;
	const introductionQuestion = "\nListo para comenzar? \n\n 1 - Ver tutorial primero \n\n 2 - Empezar a jugar";

	let introductionAnswer = ask(introductionQuestion, answer1, answer2);
	if (introductionAnswer === "1") {
		
	};

	// Historia
	alert(history.part1);
	alert(history.part2);
	selectorOpt();

	resultAnswer();
	gameQuestionId = questions.nr7.id;
	gameQuestion = questions.nr7.q;
	clueA = questions.nr7.clueA
	clueB = questions.nr7.clueB
	clueC = questions.nr7.clueC
	clueD = questions.nr7.clueD
	correct = questions.nr7.correct;

	resultAnswer();

	sumResultAnswer();

	// Ending
	const endingQuestion = "El juego ha terminado ¿como quieres seguir?\n\n 1 - Reiniciar juego\n 2 - Finalizar";
	const endingAnswer = ask(endingQuestion, answer1, answer2);
	selector(endingAnswer, answer1);
}

function endGame() {
	alert("Gracias por su visita, vuelva pronto");
}


// Opening

alert(correctAnswers)


const openingQuestion = "\nQue quieres hacer? \n\n\ 1 - Probar PacMemory \n\n 2 - Salir \n\n *Indicar la respuesta con el número";

let openingAnswer = ask(openingQuestion, answer1, answer2);

selector(openingAnswer, answer1);


 */