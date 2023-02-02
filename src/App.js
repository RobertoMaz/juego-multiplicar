import { useState } from 'react';
import PrimerNumero from './components/PrimerNumero';
import Results from './components/Results';
import SegundoNumero from './components/SegundoNumero';
import './App.css';

function App() {

  let a = Math.round(Math.random() * 9 + 1);
  let b =  Math.round(Math.random() * 9 + 1); 
  
  const [aRandom, setARandom] = useState(a);
  const [bRandom, setBRandom] = useState(b);
 
  return (
    <div className="container">
      <div id="flashcard">       
        <PrimerNumero aRandom={aRandom}/>     
        <SegundoNumero bRandom={bRandom} />  
        <Results 
          setARandom={setARandom}
          setBRandom={setBRandom}  
          aRandom={aRandom}
        />              
      </div> 
    </div>
  );
}

export default App;
