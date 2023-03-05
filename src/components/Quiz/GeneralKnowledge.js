import React, {useState} from 'react';
import {generalKnowledgeQuestions} from "./GenerallKnnowledgeBase";
import FinalResultGeneral from "./FinalResultGeneral";

function GeneralKnowledge() {

    const [showFinalResult, setFinalResult] = useState(false)
    const [wrong, setWrong] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [randomQuestion, setRandomQuestion] = useState(0)
    const [onClick, setOnClick] = useState(false)
    const optionClicked = (isCorrect) => {
        setOnClick(true)
        setTimeout(() => {
            if (!isCorrect && wrong + 1 === 10) {
                setFinalResult(true)
            }
            if (!isCorrect) {
                setWrong(wrong + 1);
            }
            if (currentQuestion + 1 < 40) {
                setCurrentQuestion(currentQuestion + 1);
            } else {
                setFinalResult(true)
            }

            chooseRandomQuestion()
            setOnClick(false)
        }, 1000)
    }

    const chooseRandomQuestion = () => {
        const randomNumber = Math.floor(Math.random()*100)+1;
        setRandomQuestion(randomNumber)
    }

    return (
        <div>
            <h1>General Knowledge Quiz</h1>
            {showFinalResult
                ?
                (<FinalResultGeneral/>)
                :
                (
                    <div><h4>wrong : {wrong}</h4>
                        <h4>question {currentQuestion} from 40</h4>
                        <h3>{generalKnowledgeQuestions[randomQuestion].text}</h3>
                        {generalKnowledgeQuestions[randomQuestion].options.map(el => (
                            <li onClick={() => optionClicked(el.isCorrect)} key={el.id}>
                                {onClick
                                    ?
                                    <div style={{background: el.isCorrect ? "green" : 'white'}}>{el.text}</div>
                                    :
                                    el.text
                                }
                            </li>
                        ))}

                    </div>
                )
            }
        < /div>
    )
        ;
}

export default GeneralKnowledge;
