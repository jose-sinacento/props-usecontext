import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Calculator from './components/Calculator.jsx'
import { CalculatorProvider } from './components/CalculatorProvider.jsx';
import Result from './components/Result.jsx'
import './App.css';

function App() {
  return (
    <Router>
      <CalculatorProvider>
        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </CalculatorProvider>
    </Router>
  );
}

export default App;
