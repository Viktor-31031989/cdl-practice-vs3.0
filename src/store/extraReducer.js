import DE from "../components/images/double.png";
import TE from "../components/images/tanker.png";
import HE from "../components/images/hazerdous.png";

const moreCards = [
    {
        id: 4,
        src: DE,
        altText: 'Slide 1',
        caption: '1.99',
        clicked: false,
    },
    {
        id: 5,
        src: TE,
        altText: 'Slide 2',
        caption: '1.99',
        clicked: false,
    },
    {
        id: 6,
        src: HE,
        altText: 'Slide 3',
        caption: '1.99',
        clicked: false,
    }
];
export const extraReducer = (state = moreCards, action) => {
    switch (action.type) {
        case 'SELECTED_CARD':
            return  [...state.map(el => el.id === action.payload ? {...el, clicked: !el.clicked} : {...el})]
        default:
            return state
    }
}
