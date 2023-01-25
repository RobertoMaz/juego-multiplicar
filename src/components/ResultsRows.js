import { useEffect, useState } from "react";
import Row from "./Row";


function ResultsRow({respuesta, setMessage, setPlayAgain, arrBluf, setArrBluf, aRandom, setSquare, square}) {

    let arr = [];
    let respuestaDistraccion;

    

    
    

        
    function handleClick(e){
        console.log(e.target.outerText);
        if(e.target.outerText == respuesta){
            setSquare("square-correcto");
            setMessage("Respuesta correcta!!");
            setPlayAgain("Volver a jugar");
        } else {
            setMessage("Respuesta incorrecta!!");
            e.target.className = "square incorrecto";
        }
    }
    
    function filtrar(){
        arr = arr.filter((item, index) => {
            return arr.indexOf(item) === index;
        })
    }    
    
    while(arr.length < 5){
        if(arr.length < 3 && respuesta > 10){
            
            respuestaDistraccion =  respuesta - Math.round(Math.random() * 9 + 1);
        } else {
            respuestaDistraccion =  respuesta + Math.round(Math.random() * 9 + 1);
            
        }
        arr.push(respuestaDistraccion);
        filtrar();

    }
    arr.push(respuesta);
    
    arr.sort(() => 0.5 - Math.random());  

    useEffect(() => {
        setArrBluf(arr);
    },[aRandom]);

    
    
            
    return (
        <>
            <Row 
                arr={arr}
                handleClick={handleClick}
                arrBluf={arrBluf}
                square={square}
            />
    </>
    );
}

export default ResultsRow;