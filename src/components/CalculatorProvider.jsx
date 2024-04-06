import { createContext, useContext, useState } from "react";

const CalculatorContext = createContext();  

export const CalculatorProvider = ({ children }) => {
    const [listNumbers, setListNumbers] = useState([]);
    const [currentNumber, setCurrentNumber] = useState(0);
    
    const addNumbers = () => { 
        if (currentNumber > 0) {
            setListNumbers([...listNumbers, currentNumber]);
        }
    }
    const sumNumbers = () => {
        return listNumbers.reduce((acc, curr) => acc + curr, 0);
    }    
    const resetCalculator = () => {
        setListNumbers([]);
        setCurrentNumber(0);
    }
    
    return (
        <CalculatorContext.Provider value={{listNumbers, currentNumber, setCurrentNumber,addNumbers, sumNumbers, resetCalculator}}>
            {children}
        </CalculatorContext.Provider>
);  
};


export const useCalculator = () => useContext(CalculatorContext);
