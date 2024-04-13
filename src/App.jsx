import { useContext, useState } from 'react';
import { KissesContext } from './Contexts';
import './styles/App.css';

function App() {
  const [kisses, setKisses] = useState(0);
  const increase = () => {
    setKisses((c) => c + 1);
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

const TotalKisses = () => {
  const kisses = useContext(KissesContext);
  return <p>{kisses}</p>;
};

export default App;
