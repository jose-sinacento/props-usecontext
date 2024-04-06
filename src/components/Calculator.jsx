import React from 'react';
import { useCalculator } from './CalculatorProvider';
import {Link} from 'react-router-dom'
import { useEffect } from 'react';

function Calculator () {
    const {currentNumber, setCurrentNumber, addNumbers} = useCalculator()

    const handleNumberClick = (num) => {
        setCurrentNumber(num)
    };

    useEffect(() => {
        addNumbers()
    },[currentNumber])
    
    return (
        <>
        <div className='div-calculator'>
            <h1>Calculator</h1>
            <h2>{currentNumber}</h2>
            <div className='div-buttons'>
                <button type="button" onClick={() => handleNumberClick(1)}>1</button>
                <button type="button" onClick={() => handleNumberClick(2)}>2</button>
                <button type="button" onClick={() => handleNumberClick(3)}>3</button>
                <button type="button" onClick={() => handleNumberClick(4)}>4</button>
                <button type="button" onClick={() => handleNumberClick(5)}>5</button>
                <button type="button" onClick={() => handleNumberClick(6)}>6</button>
                <button type="button" onClick={() => handleNumberClick(7)}>7</button>
                <button type="button" onClick={() => handleNumberClick(8)}>8</button>
                <button type="button" onClick={() => handleNumberClick(9)}>9</button>
            </div>
        </div>
        <Link to="/result">Result</Link>
        </>
    )
}

export default Calculator