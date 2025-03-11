import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    let holidays = [
        { name: "Christmas", year: 2022 },
        { name: "Eid", year: 2023 },
        { name: "Hanukkah", year: 2021 },
        { name: "Diwali", year: 2024 },
        { name: "New Year", year: 2020 },
    ];

    let [index, setIndex] = useState<number>(0);

    function cycleAlphabetically(): void {
        setIndex((prevIndex) => (prevIndex + 1) % holidays.length);
    }

    function cycleByYear(): void {
        setIndex((prevIndex) => (prevIndex + 1) % holidays.length);
    }

    return (
        <div>
            <p>Holiday: {holidays[index].name}</p>
            <Button onClick={cycleAlphabetically}>Alphabet</Button>
            <Button onClick={cycleByYear}>Year</Button>
        </div>
    );
}
