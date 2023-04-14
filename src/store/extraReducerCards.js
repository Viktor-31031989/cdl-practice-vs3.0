import DE from "../components/images/double.png";
import TE from "../components/images/tanker.png";
import HE from "../components/images/hazerdous.png";
import { doubleTripleQuestions } from "../components/Quiz/doubleAndTripleQuestions/doubleTripleQuestions";
import { hazardousMaterialsQuestions } from "../components/Quiz/hazardousMaterialsQuestions/hazardousMateriialsQuestions";
import { tankerEndorsementQuestions } from "../components/Quiz/tankerQuestions/tankerEndorsementQuestions";

const moreCards = [
    {
        id: 4,
        src: DE,
        altText: 'Double/Triple Trailers Endorsement',
        caption: '1.99',
        clicked: false,
        link: "../Quiz/quizGreeting/QuizGreeting.js",
        questions: 20,
        mistakes: 4,
        base: doubleTripleQuestions,
    },
    {
        id: 5,
        src: TE,
        altText: 'Tanker Endorsement',
        caption: '1.99',
        clicked: false,
        link: "../Quiz/quizGreeting/QuizGreeting.js",
        questions: 20,
        mistakes: 4,
        base: tankerEndorsementQuestions,
    },
    {
        id: 6,
        src: HE,
        altText: 'Hazardous Materials Endorsement',
        caption: '1.99',
        clicked: false,
        link: "../Quiz/quizGreeting/QuizGreeting.js",
        questions: 30,
        mistakes: 6,
        base: hazardousMaterialsQuestions,
    }
];
export const extraReducerCards = (state = moreCards, action) => {
    switch (action.type) {
        case 'SELECTED_CARD_ENDORSEMENT':
            return  [...state.map(el => el.id === action.payload ? {...el, clicked: !el.clicked} : {...el})]
        case "RESET":
            return [...state.map(el => ({...el, clicked: false}))]
        default:
            return state
    }
}
