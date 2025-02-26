import React from 'react';
import Portfolio from './portfolio';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter basename="/my-portfolio">
      <Portfolio />
    </BrowserRouter>
  );
};

export default App;
