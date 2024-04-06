import React from 'react';
import { useCalculator } from './CalculatorProvider';
import { Link } from 'react-router-dom';

function Result () {
  const {sumNumbers, listNumbers, resetCalculator} = useCalculator()
  const result = sumNumbers()

  return (
    <>
      <div className='div-result'>
        <h2>Resultado: {result}</h2>
        <div>Números seleccionados: {listNumbers.join(', ')}</div>
        <button className="reset" onClick={() => resetCalculator()}>Reset</button>
      </div>
        <Link to="/">Volver a la Calculadora</Link>
    </>
    );

}


  export default Result

