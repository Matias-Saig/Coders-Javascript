import { elemCreator, arrayElemCreator } from "../helpers/functions.js";
import { tutorial } from "./messages.js";

export let successAnswer = 0;
export let errorAnswer = 0;
export let userAnswers = [];
export const questionNr = 7;
export let questions;
export const questionContent = [];

export const containerElem = (id) => elemCreator('div', 1, '', '#root', id)

export const btnStart = (content, attach, fx) => elemCreator('input', 1, null, attach, null, 'btn-firts', 'button', content, 'click', fx);
export const btnClose = (content, attach, fx) => elemCreator('input', 1, null, attach, null, 'btn-third', 'button', content, 'click', fx);

const btnCloseSub = (attach,content,fx) => elemCreator('input', 1, null, attach, null, 'btn-third btn-sub', 'button', content, 'click', fx);


export const tutorialStart = () => elemCreator('input', 1, null, '#openingCont', null, 'btn-second', 'button', 'Tutorial', 'click', () => {
    const tutorialCont = containerElem('tutorialCont');
    arrayElemCreator(tutorial, 'p', '#tutorialCont', 'textSubContainer');
    btnCloseSub ('#tutorialCont', 'Cerrar tutorial', () => tutorialCont.remove())   
})