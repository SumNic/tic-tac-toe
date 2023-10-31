import React from 'react';

type PropsWinner = {
    value: string
}

function AlertWinner(propsWinner: PropsWinner) {

    const {value} = propsWinner

    return (
        <h2>
            {value}
        </h2>
    );
}

export default AlertWinner;