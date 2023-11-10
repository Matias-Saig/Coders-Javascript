// Creators

export const elemCreator = (elem, content, attach, id) => {
	const elemCreation = document.createElement(elem);
	elemCreation.innerHTML = content;
	elemCreation.id = id;
	document.querySelector(attach).append(elemCreation);
	return elemCreation
}

export const arrayElemCreator = (items, tag) => {
	const elements = items.map((item) => `<${tag}>${item}</${tag}>`);
	return elements.join('');
}

export const arrayElemToasty = (items) => {
	const elements = items.map((item) => `${item}\n\n`);
	return elements.join('· ');
};

// Buttons
export const btnAction = (id, fx) => {
	document.querySelector(id).addEventListener('click', fx)
}
// Scroll
export const scrollToBottom = () => {
	const documentHeight = document.body.scrollHeight;
	window.scrollTo(0, documentHeight, { behavior: "smooth" });
}

// Toast
export const toast = (idSelector, content, time, topBottomQ, leftCenterRightQ, classN, closeB) => {
	Toastify({
		node: idSelector,
		text: content,
		duration: time,
		close: closeB,
		gravity: topBottomQ,
		position: leftCenterRightQ,
		stopOnFocus: true,
		className: classN,
	}).showToast();
}
