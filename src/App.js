import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
	
			<Router>
				<Header></Header>
			
			</Router>
		

    </div>
  );
}

export default App;
