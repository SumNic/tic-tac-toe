import { useContext } from 'react';
import { Context } from '..';

function ButtonZero() {

    const {store} = useContext(Context)

    function InsertHumanZero() {
        store.setHumanPlayX(false)
        store.setStepHuman(false)
    }
    
    return (
        <button onClick={ InsertHumanZero }>
            Играть ноликами
        </button>
    );
}

export default ButtonZero;