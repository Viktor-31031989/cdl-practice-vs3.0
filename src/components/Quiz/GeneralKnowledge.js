import React, {useState} from 'react';
import {generalKnowledgeQuestions} from "./GenerallKnnowledgeBase";
import FinalResultGeneral from "./FinalResultGeneral";
import './GeneralKnowledgeStyle.css'

function GeneralKnowledge() {

    const [showFinalResult, setFinalResult] = useState(false)
    const [wrong, setWrong] = useState(0)
    const [score, setScore] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [randomQuestion, setRandomQuestion] = useState(0)
    const [onClick, setOnClick] = useState(false)

    const optionClicked = (isCorrect) => {
        setOnClick(true)
        setTimeout(() => {
            if (!isCorrect && wrong + 1 === 10) {
                setFinalResult(true)
            }
            if (isCorrect) {
                setScore(score + 1);
            }
            if (!isCorrect) {
                setWrong(wrong + 1);
            }
            if (currentQuestion + 1 <= 50) {
                setCurrentQuestion(currentQuestion + 1);
            } else {
                setFinalResult(true)
            }

            chooseRandomQuestion()
            setOnClick(false)
        }, 1000)
    }

    const chooseRandomQuestion = () => {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        setRandomQuestion(randomNumber)
    }

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setWrong(0);
        setFinalResult(false)
    }

    return (
        <div className='general-container'>
            <h1 className='general-text'>General Knowledge Quiz</h1>
            {showFinalResult
                ?
                (<FinalResultGeneral
                    currentQuestion={currentQuestion}
                    wrong={wrong}
                    restartQuiz={restartQuiz}
                    score={score}
                />)
                :
                (
                    <div>
                        <h6 className='error-text'>{wrong < 2 ? 'error:' : 'errors'} <span
                            style={{color: 'red', fontSize: '20px'}}>{wrong}</span> out of <span
                            style={{color: 'grey', fontSize: '20px'}}>10</span></h6>

                        <h4>{generalKnowledgeQuestions[randomQuestion].text}</h4>
                        <div>
                            {generalKnowledgeQuestions[randomQuestion].options.map(el => (
                                <li className='answers-box' onClick={() => optionClicked(el.isCorrect)}
                                    className='answer-text' key={el.id}>
                                    {onClick
                                        ?
                                        <div style={{background: el.isCorrect ? "lightgreen" : 'pink'}}>{el.text}</div>
                                        :
                                        el.text
                                    }
                                </li>
                            ))}
                        </div>
                        <h6 className='question-number'>question {currentQuestion} out of 50</h6>
                    </div>
                )
            }
        < /div>
    )
        ;
}

export default GeneralKnowledge;
