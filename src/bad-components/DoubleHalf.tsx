import React from "react";
import { Button } from "react-bootstrap";
import { useDoubleHalfState } from "./DoubleHalfState";

function Doubler({
    setValue,
}: {
    setValue: React.Dispatch<React.SetStateAction<number>>;
}): React.JSX.Element {
    return <Button onClick={() => setValue((prev) => prev * 2)}>Double</Button>;
}

function Halver({
    setValue,
}: {
    setValue: React.Dispatch<React.SetStateAction<number>>;
}): React.JSX.Element {
    return <Button onClick={() => setValue((prev) => prev / 2)}>Halve</Button>;
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useDoubleHalfState();

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler setValue={setDhValue} />
            <Halver setValue={setDhValue} />
        </div>
    );
}
