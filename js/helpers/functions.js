import { questionContent } from "../components/globalVars";

export const addQuestionContent = () => {
    questionsBaseArray.forEach((question) => {
        questionContent.push(question);
    });
};


function selectorOpt() {
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

