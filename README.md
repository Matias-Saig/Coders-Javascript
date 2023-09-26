# Cerebrosidos con mielina
Es una colección de minijuegos de agilidad mental
Pac-Memory es el primero de varios

# Descripción técnica

## Funciones

- startGame > contiene el minijuego Pac-Memory
- endGame > finaliza el juego
- selector > inicia y termina el minijuego
- ask y gameAsk > ambos contienen prompt de interacción con el usuario
- SuccessAndError > registra la cantidad de aciertos y errores en cada respuesta
- resultAnswer > contiene funciones successAndError y gameAsk
- SumResultAnswer > es la sumatoria de todos los errores y aciertos y retorna una calificación según el resultado

## Ciclos
- do while dentro de función Ask para verificar que la respuesta del usuario sea valida y reiterar pregunta en caso de error

## Condicionales
### if / else
- Dentro de la función selector para iniciar o finalizar el juego
- En función gameAsk if anidados para verificar respuesta correcta o incorrecta
- En función SuccessAndError para registrar si la respuesta es acierto o error
- Junto con introductionAnswer para acceder al tutorial o seguir con el juego

### Switch
- En función gameAsk, dentro de if anidados para verificar las posibles respuestas
- En función sumResultAnswer para retornar calificación según resultado

## Variables globales
- successAnswer > Aciertos
- errorAnswer > Errores
- answer1, answer2 > Opciones de respuestas de función selector y tutorial 
- gameQuestion > Preguntas del minijuego
- gameAnswer > Respuestas del usuario
- correct > Respuesta correcta
- answerA, answerB, answerC, answerD > Opciones de respuestas de gameAsk
- clueA, clueB, clueC, clueD > Pistas