import React from 'react';
import Navigation from './Navigation';
import './App.css'; 

import LoginForm from './loginForm';
 export default function App() {
   return ( 
    <>
      <div className='App'>
        <div className='container'></div>
        <Navigation />
        <LoginForm />
    
      </div>
    </>
  );
};