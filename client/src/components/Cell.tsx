import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useMemo } from 'react';
import { Context } from '..';
import CSS from 'csstype';
import { WINNER_COMPUTER, WINNER_HUMAN, WINNER_NO } from '../utils/consts';

type PropsCell = {
    value: {
        elemArr: string,
        index: number,
    }
}

function Cell(props:  PropsCell) {

    const {store} = useContext(Context)
    const {elemArr, index} = props.value

    function HendlerCell() {
        const step: string = store.humanPlayX ? 'X'  : 'O' 
        store.setArrTable(step, index)
        store.setStepHuman(false)
        store.setNewGame(false)
    }

    useEffect(() => {
        if (!store.stepHuman) {
            store.setTableComputer({board: store.arrTable})
            store.setStepHuman(true)
        }
    }, [store.arrTable, store, store.stepHuman])

    let styles: CSS.Properties = useMemo(() => ({
        pointerEvents: (elemArr === '' && !store.winner) ? 'auto' : 'none' 
    }), [elemArr, store.winner])

    useEffect(() => {
        checkWinner()
    }, [styles])

    const winnerTable: number[][] = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    function checkWinner() {
        const winnerHuman: string = store.humanPlayX ? 'XXX' : 'OOO'
        const winnerComputer: string = store.humanPlayX ? 'OOO' : 'XXX'
      
        winnerTable.forEach(item => {
            const searchWinner: string = item.reduce((accum, elem) => accum + store.arrTable[elem], '')
            if(searchWinner === winnerHuman) store.setWinner(WINNER_HUMAN)
            if(searchWinner === winnerComputer) store.setWinner(WINNER_COMPUTER)
        })
      
        const quantityStep: number = store.arrTable.reduce((sum, elem) => elem !== '' ? sum + 1 : sum, 0)
        if (quantityStep === 9) store.setWinner(WINNER_NO)
    }

    return (
        <button className="style-Cell btn btn-light btn-lg border" onClick={HendlerCell} style={styles} >
            {elemArr}
        </button>
    );
}

export default observer(Cell);