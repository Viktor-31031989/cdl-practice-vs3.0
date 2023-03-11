import GK from "../components/images/GENERAL-KNOWLEDGE.png";
import CV from "../components/images/combination.png";
import AB from "../components/images/air-brakes.png";
import {generalKnowledgeQuestions} from "../components/Quiz/generalQuestions/generallKnnowledgeBase";
import {combinationQuestions} from "../components/Quiz/combinationQuestions/combination";
import {airBrakesQuestions} from "../components/Quiz/airBrakesQuestions/airBrakes";

const generalCards = [
    {
        id: 1,
        src: GK,
        altText: 'General knowledge',
        caption: 'FREE',
        link: "../Quiz/quizGreeting/QuizGreeting.js",
        clicked: false,
        questions: 50,
        mistakes: 20,
        base: generalKnowledgeQuestions,

    },
    {
        id: 2,
        src: CV,
        altText: 'Combination vehicles ',
        caption: 'FREE',
        link: "../Quiz/quizGreeting/QuizGreeting.js",
        clicked: false,
        questions: 30,
        mistakes: 10,
        base: combinationQuestions,
    },
    {
        id: 3,
        src: AB,
        altText: 'Air brakes',
        caption: 'FREE',
        link: "../Quiz/quizGreeting/QuizGreeting.js",
        clicked: false,
        questions: 20,
        mistakes: 5,
        base: airBrakesQuestions,
    }
];

export const mainReducerCards = (state = generalCards, action) => {
    switch (action.type) {
        case "SELECTED_CARD":
            return  [...state.map(el => el.id === action.payload ? {...el, clicked: !el.clicked} : {...el})]
        case "RESET":
            return [...state.map(el => ({...el, clicked: false}))]
        default:
            return state

    }
}
