import { Routes, Route } from 'react-router-dom';
import CylcleIndex from './components/FSPDataFlow/CycleIndex';
import NavBar from './components/FSPStyle/NavBar';
import Home from './components/FSPStyle/Home';
import './App.css';




function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/fsp-style" element={<>
          <NavBar/>
          <Home />
        </>}/>
        <Route exact path="/" element={<CylcleIndex />}/>
      </Routes>
    </div>
  );
}

export default App;
