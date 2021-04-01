import React, {useState, useEffect} from 'react';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Form from './Components/Form'
import Tasks from './Components/Tasks'
import './App.css';

function App() {


  return (
    <>
      <Header/>
      <main>
        <div className="text-center py-3">
          <Form/>
          <Tasks/>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default App;
