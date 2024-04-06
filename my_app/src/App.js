import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Profile from './components/Profile';

function App() {
  return (
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' exact element={ <Home/> } />
          <Route path='/profile' exact element={ <Profile/>} />
        </Routes>
    </Router>
  );
}

export default App;
