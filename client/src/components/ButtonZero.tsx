import { useContext, useMemo } from 'react';
import { Context } from '..';
import CSS from 'csstype';

function ButtonZero() {

    const {store} = useContext(Context)

    function InsertHumanZero() {
        store.setHumanPlayX(false)
        store.setStepHuman(false)
        store.setNewGame(false)
    }

    let styles: CSS.Properties = useMemo(() => ({
        pointerEvents: (store.newGame) ? 'auto' : 'none' 
    }), [store.newGame])

    
    return (
        <div className="d-grid pb-3">
            <button onClick={ InsertHumanZero } className="btn btn-outline-success btn-block" style={styles} >
                Играть ноликами
            </button>
        </div>
        
    );
}

export default ButtonZero;