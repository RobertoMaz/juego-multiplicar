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
  const [message, setMessage] = useState("Elige la respuesta correcta");
  const [arrBluf, setArrBluf] = useState([]);
  const [square, setSquare] = useState("square");
  const [playAgain, setPlayAgain] = useState(false);
  
  console.log(a);
  console.log(b);
  let respuesta = aRandom * bRandom;

    
  console.log(respuesta);
  
  function handlePlayAgain() {
    setMessage("Elige la respuesta correcta");

    a = Math.round(Math.random() * 9 + 1);
    b =  Math.round(Math.random() * 9 + 1);

    setARandom(a);
    setBRandom(b);

    respuesta = aRandom * bRandom;

    setArrBluf([]);
    setSquare("square");
    setPlayAgain(false);
  }

  return (
    <div className="container">
      <div id="flashcard">
        
        <PrimerNumero aRandom={aRandom}/>
        
        <SegundoNumero bRandom={bRandom} />
        
        <Results 
          respuesta={respuesta} 
          handlePlayAgain={handlePlayAgain}
          setMessage={setMessage}
          message={message}
          arrBluf={arrBluf}
          setArrBluf={setArrBluf}
          aRandom={aRandom}
          setSquare={setSquare}
          square={square}
          playAgain={playAgain}
          setPlayAgain={setPlayAgain}
        />
          
      </div>
      
    </div>
  );
}

export default App;
