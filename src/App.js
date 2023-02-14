import { useEffect, useState } from 'react';
import './App.css';
import Aleatorio from './components/Aleatorio';
import Divider from './components/Divider';
import PrimerNumero from './components/PrimerNumero';
import Results from './components/Results';
import SegundoNumero from './components/SegundoNumero';




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



  // function reset() {
  //   let aRandom = random();
  //   let bRandom = random();
  //   let arr = [];
  
  //   a.textContent = aRandom;
  //   b.textContent = bRandom;
  
  //   answer = aRandom * bRandom;
  
  //   for (let i = 1; i < squares.length; i++) {
  //     arr.push(distractors(i));
  //   }
  
  //   function distractors(i) {
  //     if (i < 3) {
  //       return answer + random();
  //     } else {
  //       return answer - random();
  //     }
  //   }
  
  //   arr.push(answer);
  
  //   arr = shuffle(arr);
  
  //   for (let i = 0; i < squares.length; i++) {
  //     squares[i].textContent = arr[i];
  //   }
  
  //   console.log("The answer is " + answer);
  //   console.log("The array is " + arr);
    
  //   setupSquares();
    
  //   function setupSquares() {
  //     for (let i = 0; i < squares.length; i++) {
  //       squares[i].classList.remove("selected");
  //       squares[i].style.background = "#FFEBBE"; //classList is not working inside of the 'if' statement.  Not sure why.
  //       msg.innerHTML = "";
  //       again.innerHTML = "Choose Your Answer";
        
  //       squares[i].addEventListener("click", function() {
  //         let clickedSquare = this.textContent;
  //         this.classList.add("selected");
  //         console.log("Player clicked on " + clickedSquare);
          
  //         if (clickedSquare == answer) {
  //           msg.innerHTML = "<span class='correct'>Correct!</span>";
  //           again.innerHTML = "<span class='again'>Play Again?</span>";
  //           this.style.background = "#4254bc"; //classList is not working inside of the 'if' statement.  Not sure why.
  //           } else {
  //           msg.innerHTML = "<span class='incorrect'>Wrong</span>";
  //         }
          
  //       }); //end click event function
        
  //     } //end for loop
  //   } // end setup squares function
    
  // } //end reset function
  
  



  return (
    <div className="container">
      <div id="flashcard">
        
        <PrimerNumero aRandom={aRandom}/>
        
        <SegundoNumero bRandom={bRandom} />
        
        {/* <Divider /> */}
        
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
