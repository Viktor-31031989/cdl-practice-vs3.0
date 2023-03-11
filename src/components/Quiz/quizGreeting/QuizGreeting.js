import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {Button} from "@mui/material";
import './greetingStyle.css';
import QuizLogic from "../QuizLogic";

function QuizGreeting(props) {
    const [card, setCard] = useState([])
    const [openQuiz, setOpenQuiz] = useState(false)
    const mainCards = useSelector(state => state.main)
    const extraCards = useSelector(state => state.extra)

    useEffect(() => {
        if (mainCards) {
            checkQuizCard()
        }
    }, [mainCards]);

    const checkQuizCard = () => {
        const chooseCard = mainCards.filter(card => card.clicked === true)
        setCard(chooseCard)
    }

    function startQuiz() {
        setOpenQuiz(!openQuiz)
    }

    console.log(card)
    return (
        <div>
            {openQuiz

                ?

                card && card[0] && <QuizLogic
                    questions={card[0].base}
                    mistakes={card[0].mistakes}
                    numberOfQuestions={card[0].questions}
                    title={card[0].altText}
                />

                :

                (
                    <div className='greeting-container'>
                        <h1>
                            In <span className='questions'>{card && card[0] && card[0].altText}</span> quiz you will
                            get <span className='number-green'>{card && card[0] && card[0].questions}</span> questions.
                            <br/>
                            To pass the test you can make no more than <span className='number-red'> {card && card[0] && card[0].mistakes}</span> mistakes.
                           <br/>
                           <br/>
                            Good Luck!
                        </h1>


                        <Button variant="contained"
                                style={{top: '200px'}}
                                onClick={() => startQuiz()}
                        >
                            Start Quiz
                        </Button>
                    </div>
                )
            }
        </div>
    );
}

export default QuizGreeting;
