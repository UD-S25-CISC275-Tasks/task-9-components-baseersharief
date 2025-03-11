import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */

export function TwoDice(): React.JSX.Element {
    let [leftDie, setLeftDie] = useState<number>(1);
    let [rightDie, setRightDie] = useState<number>(2);

    function rollLeft(): void {
        setLeftDie(Math.floor(Math.random() * 6) + 1);
    }

    function rollRight(): void {
        setRightDie(Math.floor(Math.random() * 6) + 1);
    }

    let result =
        leftDie === rightDie ?
            leftDie === 1 ?
                "You Lose"
            :   "You Win"
        :   "Keep Rolling";

    return (
        <div>
            <p data-testid="left-die">Left Die: {leftDie}</p>
            <p data-testid="right-die">Right Die: {rightDie}</p>
            <Button onClick={rollLeft}>Roll Left</Button>
            <Button onClick={rollRight}>Roll Right</Button>
            <p>{result}</p>
        </div>
    );
}
