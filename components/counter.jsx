import React from "react";

const CountDown = () => {
    const [days, setDays] = React.useState(0);
    const [hours, setHours] = React.useState(0);
    const [minutes, setMinutes] = React.useState(0);

    React.useEffect(() => {

    }, []);

    return (
        <header>
            <h1>TiC</h1>
        </header>
    )
}

export default CountDown;