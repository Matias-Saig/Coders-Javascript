/* Funciones */

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

// Preguntar y repetir una vez
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
		answer = prompt(question);
		return answer

	} else {
		alert("Es la respuesta correcta :)");
		return answer;
	}

}




// Aciertos y errores

function successAndError(gameAnswer) {
	if (gameAnswer === correct) {
		successAnswer = successAnswer++;
	} else {
		errorAnswer = errorAnswer ++;
	}	
}


// finalizar juego
function endGame() {
	alert("Gracias por su visita, vuelva pronto")
}

// iniciar juego





// Variables globales
let successAnswer = 0;
let errorAnswer = 0;

let answerA = "A";
let answerB = "B";
let answerC = "C";
let answerD = "D";

let answer1 = "1";
let answer2 = "2";

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
/* 
if (openingAnswer === "1") {
	startGame();
} else {
	endGame();
} */

const introductionQuestion = "\nListo para comenzar? \n\n 1 - Ver tutorial primero \n\n 2 - Empezar a jugar";

let introductionAnswer = ask(introductionQuestion, answer1, answer2);
if (introductionAnswer === "1") {
	let tutorial = alert("# Tips para el juego:\n\n	- Lee atentamente y presta atención a los detalles\n	- Las preguntas tienen varias opciones, solo tienes que escribir la letra y enviar\n	- Sí te equivocas puedes probar de nuevo una vez\n	- Se contaran los aciertos y errores, pero no los reintentos\n	- Al final se hará una valoración de tu desempeño con emoticones clásicos o retro\n");
};

// respuestas y pistas


gameQuestion = "Pregunta 1: Cómo es Pac-Man?:\n\n A - Naranja y con forma de pizza\n B - Azul y cuadrado\n C - Amarillo y con forma de pizza\n D - Rojo y redondo\n"

correct = answerC
clueA = "el color no es el correcto"
clueB = "es algo más redondeado"
clueC = ""
clueD = "tiene forma de comida"

gameAnswer = gameAsk(gameQuestion, correct, answerA, clueA, answerB, clueB, answerC, clueC, answerD, clueD);


successAndError(gameAnswer);




/* 

Aquí tienes una pequeña historia sobre Pac-man

	Pac-Man es un icónico videojuego arcade creado por Toru Iwatani y lanzado por Namco en 1980. El juego se centra en un personaje amarillo con forma de pizza llamado Pac-Man, que	vive en un laberinto y su objetivo es comer todos los puntos mientras evita a los fantasmas. Cuando come una "superpíldora", puede volverse temporalmente invulnerable y comer a los fantasmas.
	Estos fantasmas son Blinky (rojo), Pinky (rosa), Inky (azul) y Clyde (naranja), y cada uno tiene su estrategia única para perseguir a Pac-Man: 
· Blinky, es el más agresivo y siempre trata de acercarse a Pac-Man directamente, su objetivo principal es atrapar a Pac-Man.
· Pinky, su estrategia puede ser un poco más impredecible, ya que trata de emboscar a Pac-Man posicionándose por delante y cortando su camino.
· Inky, es un poco más complejo, su movimiento se basa en la posición de Blinky manteniéndose a cierta distancia de este mientras persigue a Pac-Man.
· Clyde, tiene un comportamiento más errático, a veces persigue a Pac-Man, pero a veces se aleja de él

Estas estrategias combinadas crean un desafío dinámico para el jugador, ya que deben tener en cuenta los movimientos de los fantasmas para evitar ser atrapados mientras recolectan los puntos en el laberinto.
	

1 - Tips	2 - Jugar




# Juego

Correcta: O
Incorrecta: X → pista + repreguntar o 'pasar a siguiente pregunta'
Reintento: -

Pregunta 1: 
Cómo es Pac-Man?:
A - Naranja y con forma de pizza → pista: el color no es el correcto
B - Azul y cuadrado → pista: es algo más redondeado
C - Amarillo y con forma de pizza → Correcta
D - Rojo y redondo → pista: tiene forma de comida

Pregunta 2:
Cuál es su objetivo?
A - Comer todos los puntos → Pista: es correcta en parte, falta algo más
B - Evitar los fantasmas → Pista: es correcta en parte, falta algo más
C - Ir directo por la superpildora → Pista: no seria lo principal
D - A y B son correctas → correcta

Pregunta 3:
Que pasa cuando Pac-Man come la superpildora?
A - Se vuelve invulnerable y puede comer a los fantasmas → Correcto
B - Cambia de color y duplica la velocidad → pista: eso no pasa en este juego
C - Detiene el tiempo → Pista: no seria su función
D - Aumenta de tamaño y puede comer los fantasmas → Pista: es correcto en parte

Pregunta 4:
Cómo se llaman los fantasmas?
A - Tinky Winky, Dipsy, Laa-Laa, Po → Pista: Tienen colores pero son Teletubbies, aunque el nombre del primero se parece un poco al de los fantasmas
B - Blinky, Pinky, Inky y Clyde → correcto
C - Leonardo, Donatello, Michelangelo, Raphael → Pista: Estas son tortugas, aunque los colores de las máscaras se parecen a los fantasmas
D - Casper, Slimer, Boo, Canterville → Pista: Estos fantasmas no son de este juego

Pregunta 5:
Cual es el color de los fantasmas?
A - Rosa, amarillo, verde, celeste → pista: Uno de los colores es correcto
B - Rojo, morado, verde, amarillo → pista: Dos de los colores que son correctos
C - Rojo, azul, morado, naranja → pista: se parece, pero este no es
D - Rojo, rosa, azul, naranja  → correcto

Pregunta 6:
Como es la estrategia de los fantasmas?
A - Pinky busca cortar la huida de Pac-Man posicionándose detrás de él → pista: es lo contrario
B - Clyde es el más predecible y va de frente → pista: sería lo contrario
C - Blinky es más errático, a veces se acerca y otras se aleja → pista: no es su comportamiento característico 
D - Inky se mueve dependiendo de donde este Blinky → correcto

Pregunta 7:
En que año se lanzo el juego?
A - 1980 → corecto
B - 1995 → pista: esta más cerca de la época de la música disco
C - 1960 → pista: es un par de décadas más adelante
D - 1810 → pista: existían los videojuegos en esta década?


# fin de juego
Aciertos = x
Reintentos = x
Errores = x


Calificación
	1-2 → :( ... con práctica se puede mejorar

	3-4 → :s ... esta bien  

	5-6 → :) ... bien, te felicito!

	7 → :D ... Perfecto, 7 de 7 !!!


# Reiniciar juego
1 - Reiniciar juego		2 - Finalizar → Gracias por su visita
 */