import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '.';
import AlertWinner from './components/AlertWinner';
import ButtonZero from './components/ButtonZero';
import Cell from './components/Cell';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const {store} = useContext(Context)

  const list = store.arrTable.map((elemArr, index) => <Cell key={index} value={{elemArr, index}} />)

  return (
    <div className="w-100 vh-100 d-flex justify-content-center" style={{backgroundColor: '#dee2e6'}}>
      <div style={{width: 300}}>
          <h1 className="d-flex justify-content-center pt-4">TIC-TAC-TOE!</h1>
          <ButtonZero />
          <div className="grid-Cell" >
              {list}
          </div>
          {store.winner && <AlertWinner value={store.winner} />}
      </div>
    </div>
  )
}

export default observer(App);
