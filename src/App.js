import React from 'react';
import Header from './Components/Header'
import Footer from './Components/Footer'
import './App.css';

function App() {
  return (
    <>
      <Header/>
      <main>
        <div className="text-center">
          Write a task
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default App;
