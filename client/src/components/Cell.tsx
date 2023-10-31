import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useMemo } from 'react';
import { Context } from '..';
import CSS from 'csstype';

type PropsCell = {
    value: {
        elemArr: string,
        index: number
    }
}

function Cell(props:  PropsCell) {

    const {store} = useContext(Context)
    const {elemArr, index} = props.value

    function HendlerCell() {
        const step: string = store.humanPlayX ? 'X'  : 'O' 
        store.setArrTable(step, index)
        store.setStepHuman(false)
    }

    useEffect(() => {
        if (!store.stepHuman) {
            store.setTableComputer({board: store.arrTable})
            store.setStepHuman(true)
        }
    }, [store.arrTable, store, store.stepHuman])

    const styles: CSS.Properties = useMemo(() => ({pointerEvents: elemArr === '' ? 'auto' : 'none'}), [elemArr])

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
            if(searchWinner === winnerHuman) store.setWinner('Вы победитель!')
            if(searchWinner === winnerComputer) store.setWinner('Победил компьютер!')
        })
      
        const quantityStep: number = store.arrTable.reduce((sum, elem) => elem !== '' ? sum + 1 : sum, 0)
        if (quantityStep === 9) store.setWinner('Ничья!')
    }

    return (
        <button className="styleCell" onClick={HendlerCell} style={styles} >
            {elemArr}
        </button>
    );
}

export default observer(Cell);