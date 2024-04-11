import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Profile from './components/Profile';
import Chart from './pages/Chart'
import Layout from './components/Layout';
import Sportbot from './pages/sportbot';

function App() {
  return (
      <Router>
      <Layout>
        <Routes>
          <Route path='/' exact element={ <Home/> } />
          <Route path='/profile' exact element={ <Profile/>} />
          <Route path='/chart' exact element={ <Chart/>} />
          <Route path='/sportbot/:searchTerm' exact element={ <Sportbot/>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
