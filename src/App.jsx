import { useReducer } from 'react';
import reducer from './reducer';
import { TotalKisses } from './TotalKisses';
import { KissesContext } from './Contexts';
import './styles/App.css';

function App() {
  const [kisses, setKisses] = useReducer(reducer, {kiss:0})
  const increase = () => {
    setKisses({type:'kiss'});
  };

  return (
    <>
      <KissesContext.Provider value={kisses}>
        <h1>Kissing Booth</h1>
        <TotalKisses />
        <button onClick={increase}>Give Kiss</button>
      </KissesContext.Provider>
    </>
  );
}

export default App;
