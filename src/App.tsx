import React from 'react';
import FrontPage from './FrontPage';
import LoginPage from './LoginPage';
import ResultsPage from './ResultsPage';
import './Styles/global.css';

function App() {
  return (
    <div className="App">
      <ResultsPage />
      <FrontPage />
      <LoginPage />
    </div>
  );
}

export default App;
