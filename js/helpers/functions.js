export function elemCreator(elem, num, content, attach, id, className, type, value, ev, fx) {

	for (let i = 0; i < num; i++) {
		const elemCreation = document.createElement(elem);
		elemCreation.innerHTML = content;
		elemCreation.type = type;
		elemCreation.value = value;
		elemCreation.className = className;
		elemCreation.id = id;  
		document.querySelector(attach).append(elemCreation);
		elemCreation.addEventListener(ev, fx);
		return elemCreation

	}

}

export function arrayElemCreator(array,elem, attach, className) {array.forEach(content => { elemCreator(elem, 1, content, attach, className)});}

export const addQuestionContent = () => {
	questionsBaseArray.forEach((question) => {
		questionContent.push(question);
	});
};


function selectQuestion() {
	let selectorRandom = Math.floor(Math.random() * 3);
	if (selectorRandom <= 1) {
		questions = questionsAlterFirst;
	} else if (selectorRandom > 1 && selectorRandom < 2) {
		questions = questionsAlterSecond;
	} else {
		questions = questionsBaseArray;
	}
	return questions
}

