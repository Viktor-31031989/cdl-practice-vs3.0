import React from 'react';
import {Button} from "@mui/material";
import './GeneralKnowledgeStyle.css'

function FinalResultGeneral({restartQuiz, wrong, currentQuestion, score}) {
    return (
        <div>
            {
                currentQuestion === 50
                    ?
                    (
                        <div className='good-result'>
                            <h3>Good Job</h3>
                            <h3>you did {wrong} {wrong < 2 ? 'mistake' : 'mistakes'}</h3>
                        </div>
                    )

                    :
                    (
                        <div className='bad-result'>
                            <h3>You need practice more!</h3>
                            <h3>you answer {score} out of {currentQuestion} questions</h3>
                        </div>
                    )
            }
            <div className='try-button'>
                <Button variant="contained" onClick={() => restartQuiz()}>Try again</Button>
            </div>
        </div>
    );
}

export default FinalResultGeneral;
