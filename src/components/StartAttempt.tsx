import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    let [attempts, setAttempts] = useState<number>(4);
    let [inProgress, setInProgress] = useState<boolean>(false);

    function startQuiz(): void {
        if (attempts > 0) {
            setInProgress(true);
            setAttempts(attempts - 1);
        }
    }

    function stopQuiz(): void {
        setInProgress(false);
    }

    function addAttempt(): void {
        if (!inProgress) {
            setAttempts(attempts + 1);
        }
    }

    return (
        <div>
            <p>Attempts: {attempts}</p>
            <Button onClick={startQuiz} disabled={inProgress || attempts === 0}>
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button onClick={addAttempt} disabled={inProgress}>
                Mulligan
            </Button>
        </div>
    );
}
