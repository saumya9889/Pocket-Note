import React from 'react';
import { HomePage } from './Component/Home-Page/HomePage';
import "./assets/styles/global.css";
import { AppProvider } from './Component/ContextApi';


function App() {
  return (
    <>
     <AppProvider>
      <HomePage />
     </AppProvider>
      {/* <HomePage /> */}
      
    </>
  );
}

export default App;
