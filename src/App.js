
import './App.css';
import DataEntry from './pages/DataEntry/DataEntry';
import Recommendation from './pages/Recommendations/Recommendation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App(){
  return (
  <div>
    <Router>
      <Routes>
        <Route path = '/' element={<DataEntry />} />
        <Route path = '/recommendation' element={<Recommendation />} /> 
      </Routes>
    </Router>
  </div>

)}

export default App;
