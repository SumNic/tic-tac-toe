import React, { useContext, useEffect, useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { Context } from '..';
import { WINNER_COMPUTER, WINNER_HUMAN, WINNER_NO } from '../utils/consts';

type PropsWinner = {
    value: string
}

function AlertWinner(propsWinner: PropsWinner) {

    const {value} = propsWinner
    const {store} = useContext(Context)
    const [styleAlert, setStyleAlert] = useState<string>('')
    
    function playNew() {
        store.setWinner('')
        store.setHumanPlayX(true)
        store.setNewGame(true)
        for (let i = 0; i < 9; i++) {
            store.setArrTable('', i)
        }
    }

    const saccess: string = 'success'
    const danger: string = 'danger'
    const warning: string = 'warning'

    

    useEffect(() => {
        if (value === WINNER_HUMAN) setStyleAlert(saccess)
        if (value === WINNER_COMPUTER) setStyleAlert(danger)
        if (value === WINNER_NO) setStyleAlert(warning)
    }, [value])


    return (
        <Alert variant={styleAlert} className="mt-3 mb-3">
            {value}
            <hr />
            <div className="d-flex justify-content-end">
                <Button onClick={() => playNew()} variant={"outline-" + saccess} >
                    Новая игра?
                </Button> 
            </div>
        </Alert>
    );
}

export default AlertWinner;