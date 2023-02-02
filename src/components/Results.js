import { useState } from "react";
import ResultsRow from "./ResultsRows";

function Results({aRandom, bRandom, setARandom, setBRandom}){

        const [message, setMessage] = useState("Elige la respuesta correcta");
        const [arrBluf, setArrBluf] = useState([]);
        const [square, setSquare] = useState("square");
        const [playAgain, setPlayAgain] = useState(false);
        const [respuesta, setRespuesta] = useState(aRandom * bRandom);

        function handlePlayAgain() {
            setArrBluf([]);
            setSquare("square");
            setMessage("Elige la respuesta correcta");
            setPlayAgain(false);
        
            let a = Math.round(Math.random() * 9 + 1);
            let b =  Math.round(Math.random() * 9 + 1);
        
            setARandom(a);
            setBRandom(b);
            setRespuesta(b * a);
          }          
    return (
        <>
            <div className="row">
              <div id="divider"></div>
            </div>
            <div className="row2">
                <div id="msg" className="button">{message}</div>
                <div 
                    id="again" 
                    className={playAgain ? "button-again" : ""} 
                    onClick={handlePlayAgain}
                >{playAgain}</div>
            </div>
            <ResultsRow 
                respuesta={respuesta}
                setMessage={setMessage}
                setPlayAgain={setPlayAgain}
                arrBluf={arrBluf}
                setArrBluf={setArrBluf}
                aRandom={aRandom}
                setSquare={setSquare}
                square={square}
                />
        </>
    );
}
export default Results;