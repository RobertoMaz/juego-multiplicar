// import { useState } from "react";
// import ResultsRow from "./ResultsRows";

// function Results({
//         respuesta,
//         start, 
//         handlePlayAgain, 
//         setMessage, 
//         message, 
//         arrBluf, 
//         setArrBluf, 
//         aRandom, 
//         setSquare,
//         square,
//         playAgain,
//         setPlayAgain

//     }) {

    
    
//     return (
//         <>
//             <div className="row">
//               <div id="divider"></div>
//             </div>
//             <div className="row2">
//                 <div id="msg" className="button">{message}</div>
//                 <div 
//                     id="again" 
//                     className={playAgain ? "button-again" : ""} 
//                     onClick={handlePlayAgain}
//                 >{playAgain}</div>
//             </div>
        

        

//             <ResultsRow 
//                 respuesta={respuesta}
//                 setMessage={setMessage}
//                 setPlayAgain={setPlayAgain}
//                 arrBluf={arrBluf}
//                 setArrBluf={setArrBluf}
//                 aRandom={aRandom}
//                 setSquare={setSquare}
//                 square={square}
//             />
//         </>
//     );
// }

// export default Results;

import { useState } from "react";
import ResultsRow from "./ResultsRows";

function Results({
        respuesta,
        start, 
        handlePlayAgain, 
        setMessage, 
        message, 
        arrBluf, 
        setArrBluf, 
        aRandom, 
        setSquare,
        square,
        playAgain,
        setPlayAgain

    }) {

    
    
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
                    disabled    
                >{playAgain}</div>
            </div>
        

        

            <ResultsRow 
                respuesta={respuesta}
                start={start}
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