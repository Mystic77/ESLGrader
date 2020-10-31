import React from 'react'; 
import FeedbackGenerator from './components/FeedbackGenerator';
import InputForm from './components/InputForm';
import './App.css';
import feedback from './feedback';

function App() {
  return (
    <div className="App">
        <h1 className='f1'>ESL Grader</h1>
        <InputForm />
        <FeedbackGenerator id={feedback[0].id} feedback={feedback[0][5]}/>
    </div>
  );
}

export default App;
