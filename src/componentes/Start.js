import React from 'react';

const Start = ({ onQuizStart }) => {
    return(
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h1>Começar o quiz</h1>
                    <p>Boa sorte!</p>
                    <button className="Button is-info is-medium" onClick={onQuizStart}>começar</button>
                </div>
            </div>
        </div>
    );
}

export default Start;