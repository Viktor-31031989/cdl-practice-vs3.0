import GK from "../components/images/GENERAL-KNOWLEDGE.png";
import CV from "../components/images/combination.png";
import AB from "../components/images/air-brakes.png";

const generalCards = [
    {
        id: 1,
        src: GK,
        altText: 'generalQuestions knowledge',
        caption: 'FREE',
        link: "../Quiz/QuizLogic.js",
        clicked: false,
    },
    {
        id: 2,
        src: CV,
        altText: 'commercial',
        caption: 'FREE',
        link: "../Quiz/QuizLogic.js",
        clicked: false,
    },
    {
        id: 3,
        src: AB,
        altText: 'air brakes',
        caption: 'FREE',
        link: "../Quiz/QuizLogic.js",
        clicked: false,
    }
];

export const mainReducer = (state = generalCards, action) => {
    switch (action.type) {
        case "SELECTED_CARD":
            return  [...state.map(el => el.id === action.payload ? {...el, clicked: !el.clicked} : {...el})]
        case "RESET":
            return [...state.map(el => ({...el, clicked: false}))]
        default:
            return state

    }
}
