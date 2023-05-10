import './App.css';
import Portfolio from './pages/dashboard/componenent/portfolio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path='/' element={ <Portfolio/> }/>   
          <Route path='/skills'/>       
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;