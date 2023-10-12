// Objetos

const history = {
	part1: "Aquí tienes una pequeña historia sobre Pac-man\n\nParte I:\n\n Pac-Man es un icónico videojuego arcade creado por Toru Iwatani y lanzado por Namco en 1980. El juego se centra en un personaje amarillo con forma de pizza llamado Pac-Man, que vive en un laberinto y su objetivo es comer todos los puntos mientras evita a los fantasmas. Cuando come una 'superpíldora', puede volverse temporalmente invulnerable y comer a los fantasmas",

	part2: "Parte II:\n\nEstos fantasmas son Blinky (rojo), Pinky (rosa), Inky (azul) y Clyde (naranja), y cada uno tiene su estrategia única para perseguir a Pac-Man: \n· Blinky, es el más agresivo y siempre trata de acercarse a Pac-Man directamente, su objetivo principal es atrapar a Pac-Man.\n· Pinky, su estrategia puede ser un poco más impredecible, ya que trata de emboscar a Pac-Man posicionándose por delante y cortando su camino.\n· Inky, es un poco más complejo, su movimiento se basa en la posición de Blinky manteniéndose a cierta distancia de este mientras persigue a Pac-Man.\n· Clyde, tiene un comportamiento más errático, a veces persigue a Pac-Man, pero a veces se aleja de él\n\n Estas estrategias combinadas crean un desafío dinámico para el jugador, ya que deben tener en cuenta los movimientos de los fantasmas para evitar ser atrapados mientras recolectan los puntos en el laberinto."
}

const questions = {

	nr1: {
		q: "Pregunta 1: Cómo es Pac-Man?:\n\n A - Naranja y con forma de pizza\n B - Azul y cuadrado\n C - Amarillo y con forma de pizza\n D - Rojo y redondo\n",
		clueA: "el color no es el correcto",
		clueB: "es algo más redondeado",
		clueD: "tiene forma de comida",
		correct: "C"
	},

	nr2: {
		q: "Pregunta 2: Cuál es su objetivo?\n\n A - Comer todos los puntos\n B - Evitar los fantasmas\n C - Ir directo por la superpildora\n D - A y B son correctas",
		clueA: "es correcta en parte, falta algo más",
		clueB: this.clueA,
		clueC: "no sería lo principal",
		correct: "D"
	},

	nr3: {
		q: "Pregunta 3: Que pasa cuando Pac-Man come la superpildora?\n\n A - Se vuelve invulnerable y puede comer a los fantasmas\n B - Cambia de color y duplica la velocidad\n C - Detiene el tiempo\n D - Aumenta de tamaño y puede comer los fantasmas",
		clueB: "eso le puede pasar a un erizo azul",
		clueC: "no sería su función",
		clueD: "es correcto solo en parte",
		correct: "A"
	},

	nr4: {
		q: "Pregunta 4: Cómo se llaman los fantasmas?\n\n A - Tinky Winky, Dipsy, Laa-Laa, Po\n B - Blinky, Pinky, Inky y Clyde\n C - Leonardo, Donatello, Michelangelo, Raphael\n D - Casper, Slimer, Boo, Canterville",
		clueA: "Tienen colores pero son Teletubbies, aunque el nombre del primero se parece un poco al de los fantasmas",
		clueC: "Estas son tortugas, aunque los colores de las máscaras se parecen a los fantasmas",
		clueD: "Estos fantasmas no son de este juego",
		correct: "B"
	},

	nr5: {
		q: "Pregunta 5: Cual es el color de los fantasmas?\n\n A - Rosa, amarillo, verde, celeste\n B - Rojo, morado, verde, amarillo\n C - Rojo, azul, morado, naranja\n D - Rojo, rosa, azul, naranja",
		clueA: "Uno de los colores es correcto",
		clueB: "Dos de los colores que son correctos",
		clueC: "Se parece, pero este no es",
		correct: "D"
	},

	nr6: {
		q: "Pregunta 6: Como es la estrategia de los fantasmas?\n\n A - Pinky busca cortar la huida de Pac-Man posicionándose detrás de él\n B - Clyde es el más predecible y va de frente\n C - Blinky es más errático, a veces se acerca y otras se aleja\n D - Inky se mueve dependiendo de donde este Blinky",
		clueA: "sería lo contrario",
		clueB: this.clueA,
		clueC: "no es su comportamiento característico",
		correct: "D"
	},

	nr7: {
		q: "Pregunta 7: En que año se lanzo el juego?\n\n A - 1980\n B - 1995\n C - 1960\n D - 1810",
		clueB: "esta más cerca de la época de la música disco",
		clueC: "es un par de décadas más adelante",
		clueD: "existían los videojuegos en esta década?",
		correct: "A"
	}

}



/* Funciones */


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
		answer = prompt(question);
		if (answer !== opt1 && answer !== opt2) {
			alert("La respuesta no es correcta. Por favor, elige un número de los asignados");
		}
	} while (answer !== opt1 && answer !== opt2);

	return answer
}

function gameAsk(question, correct, answer1, clue1, answer2, clue2, answer3, clue3, answer4, clue4) {
	let answer = prompt(question).toUpperCase();

	if (answer !== correct) {
		switch (answer) {
			case answer1:
				alert("La respuesta no es correcta, puedes intentar una vez más\nPista: " + clue1);
				break;
			case answer2:
				alert("La respuesta no es correcta, puedes intentar una vez más\nPista: " + clue2);
				break;
			case answer3:
				alert("La respuesta no es correcta, puedes intentar una vez más\nPista: " + clue3);
				break;
			case answer4:
				alert("La respuesta no es correcta, puedes intentar una vez más\nPista: " + clue4);
				break;
			default:
				alert("Esa no era una respuesta posible");
				break;
		}
		answer = prompt(question).toUpperCase();
		if (answer !== correct) {
			alert("La respuesta es incorrecta. Pasamos a la siguiente pregunta");
		} else { alert("Es la respuesta correcta :)") }
		return answer

	} else {
		alert("Es la respuesta correcta :)");
		return answer;
	}

}

// Preguntas, aciertos y errores
function successAndError(gameAnswer, correct) {
	if (gameAnswer === correct) {
		successAnswer += 1;
	} else {
		errorAnswer += 1;
	}
	return
}

function resultAnswer() {
	successAndError(gameAnswer = gameAsk(gameQuestion, correct, answerA, clueA, answerB, clueB, answerC, clueC, answerD, clueD), correct);
}

function sumResultAnswer() {
	let result = ("RESULTADO FINAL\n\n Aciertos: " + successAnswer + "\n Errores: " + errorAnswer + "\n\n");
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
		default:
			alert("ups! algo salio mal, parece que hubo 0 aciertos");
			return;
	}

}

// Inicio y cierre
function endGame() {
	alert("Gracias por su visita, vuelva pronto");
}

function startGame() {

	successAnswer = 0;
	errorAnswer = 0;

	const introductionQuestion = "\nListo para comenzar? \n\n 1 - Ver tutorial primero \n\n 2 - Empezar a jugar";

	let introductionAnswer = ask(introductionQuestion, answer1, answer2);
	if (introductionAnswer === "1") {
		const tutorial = alert("# Tips para el juego:\n\n	- Lee atentamente y presta atención a los detalles\n	- Las preguntas tienen varias opciones, solo tienes que escribir la letra y enviar\n	- Sí te equivocas puedes probar de nuevo una vez\n	- Se contaran los aciertos y errores, pero no los reintentos\n	- Al final se hará una valoración de tu desempeño con emoticones clásicos o retro\n");
	};

	// Historia
	alert(history.part1);
	alert(history.part2);




	1

	resultAnswer();

	2

	resultAnswer();

	3

	resultAnswer();

	4

	resultAnswer();

	5

	resultAnswer();

	6

	resultAnswer();

	7

	resultAnswer();

	sumResultAnswer();

	// Ending
	const endingQuestion = "El juego ha terminado ¿como quieres seguir?\n\n 1 - Reiniciar juego\n 2 - Finalizar";
	const endingAnswer = ask(endingQuestion, answer1, answer2);
	selector(endingAnswer, answer1);
}

// Variables globales

let successAnswer = 0;
let errorAnswer = 0;

const answerA = "A";
const answerB = "B";
const answerC = "C";
const answerD = "D";

const answer1 = "1";
const answer2 = "2";

let gameQuestion;
let gameAnswer;

let correct;
let clueA;
let clueB;
let clueC;
let clueD;


// Opening
const opening = alert("CEREBROSIDOS CON MIELINA \n\n Colección de minijuegos de agilidad mental \n\n Estamos en construcción, pero puedes probar nuestro primer minijuego de memoria");

const openingQuestion = "\nQue quieres hacer? \n\n\ 1 - Probar PacMemory \n\n 2 - Salir \n\n *Indicar la respuesta con el número";

let openingAnswer = ask(openingQuestion, answer1, answer2);

selector(openingAnswer, answer1);