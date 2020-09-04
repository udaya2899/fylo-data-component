import React from 'react';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="w-full h-full bg-very-dark-blue">
      <div className="w-full h-full bg-mobile-bg bg-no-repeat xs:bg-desktop-bg xs:bg-bottom">
        <Home/>
      </div>
    </div>
  );
};

export default App;			
			