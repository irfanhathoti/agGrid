import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom';
import Home from './Components/Home';
import GridTable from './Components/GridTable';
import { useState } from 'react';

function App() {
  const [data,setData] = useState('Hello')
  return (
    <div>
     <Router>
      <Routes>
        <Route path='/' element = {<Home  />} />
        <Route path='/grid' element = {<GridTable dat = {data} />} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
