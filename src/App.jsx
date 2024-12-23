// App.jsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AvailRoutes from './router';
import ScrollToTop from './scrollToTop/scrollToTop';

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <AvailRoutes />
    </BrowserRouter>
  );
};




export default App;
