import React from 'react';

function ProgressBar({ numberOfQuestions, currentQuestion }) {
    return (
        <div style=
                 {{
                     height: '10px',
                     width: `${ numberOfQuestions }%`,
                     border: '1px solid black',
                     borderRadius: '5px',
                 }}
        >
            <div style=
                     {{
                         height: '8px',
                         background: 'blue',
                         width: `${ currentQuestion }%`,
                         border: '1px solid black',
                     }}>

            </div>
        </div>
    );
}

export default ProgressBar;
