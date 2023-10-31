import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '.';
import AlertWinner from './components/AlertWinner';
import ButtonZero from './components/ButtonZero';
import Cell from './components/Cell';
import './style.css';

function App() {
  const {store} = useContext(Context)

  const list = store.arrTable.map((elemArr, index) => <li key={index} ><Cell value={{elemArr, index}} /></li>)

  return (
    <div>
        <h1>Tic-tac-toe!</h1>
        <ButtonZero /><br /><br />
        <ul className='styleTable'>
            {list}
        </ul>
        <AlertWinner value={store.winner} />
    </div>
  )
}

export default observer(App);
