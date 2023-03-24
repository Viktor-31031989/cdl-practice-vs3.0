import React, {useState} from 'react';
import FinalResultGeneral from "./finalResult/FinalResultGeneral";
import './QuizLogicStyle.css'

function QuizLogic({mistakes, title, questions, numberOfQuestions}) {


    const [showFinalResult, setFinalResult] = useState(false)
    const [wrong, setWrong] = useState(0)
    const [score, setScore] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [randomQuestion, setRandomQuestion] = useState(0)
    const [onClick, setOnClick] = useState(false)

    const optionClicked = (isCorrect) => {
        setOnClick(true)
        setTimeout(() => {
            if (!isCorrect && wrong + 1 === mistakes) {
                setFinalResult(true)
            }
            if (isCorrect) {
                setScore(score + 1);
            }
            if (!isCorrect) {
                setWrong(wrong + 1);
            }
            if (currentQuestion + 1 <= numberOfQuestions) {
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
        setScore(0)
    }
    return (
        <div className='general-container'>
            <h1 className='general-text'>{title}</h1>
            {showFinalResult
                ?
                (<FinalResultGeneral
                    currentQuestion={currentQuestion}
                    wrong={wrong}
                    restartQuiz={restartQuiz}
                    score={score}
                    questions={questions}
                    numberOfQuestions={numberOfQuestions}
                />)
                :
                (
                    <div>
                        <h6 className='error-text'>{wrong < 2 ? 'error:' : 'errors'} <span
                            style={{color: 'red', fontSize: '20px'}}>{wrong}</span> out of <span
                            style={{color: 'grey', fontSize: '20px'}}>{mistakes}</span></h6>

                        <h4>{questions[randomQuestion].text}</h4>
                        <div>
                            {questions[randomQuestion].options.map(el => (
                                <li onClick={() => optionClicked(el.isCorrect)}
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
                        <h6 className='question-number'>question {currentQuestion} out of {numberOfQuestions}</h6>
                    </div>
                )
            }
        < /div>
    )
        ;
}

export default QuizLogic;
